from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class CommentForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    tweetId = IntegerField('tweetId', validators=[DataRequired()])
    comment = StringField('comment', validators=[DataRequired()])
