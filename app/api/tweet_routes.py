from flask import Blueprint, request, redirect
from flask_login import login_required
from app.models import Tweet, Comment, db
from app.forms.tweet_form import TweetsForm

tweet_routes = Blueprint('tweets', __name__)

def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@tweet_routes.route('/')
@login_required
def tweets():
    tweets = Tweet.query.order_by(Tweet.id.desc()).all()
    return {'tweets': [tweet.to_dict() for tweet in tweets]}

@tweet_routes.route('/create', methods=['tweet'])
@login_required
def post_tweet():
    form = TweetsForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        tweet = Tweet(
            userId=form.data['userId'],
            content=form.data['content'],
            imageURL=form.data['imageURL']
        )
        db.session.add(tweet)
        db.session.commit()
        return tweet.to_dict()
    return ('Error')

@tweet_routes.route('/<int:id>', methods=['PUT'])
@login_required
def put_tweet(id):
    tweet = Tweet.query.get(id)
    data = request.json
    tweet.imageURL = data['imageURL']
    tweet.content = data['content']
    db.session.commit()
    return tweet.to_dict()

@tweet_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_tweet(id):
    tweet = Tweet.query.get(id)
    allComments = Comment.query.filter_by(tweetId=id)
    for comments in allComments:
        db.session.delete(comments)
    db.session.delete(tweet)
    db.session.commit()
    return tweet.to_dict()
