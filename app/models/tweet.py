from .db import db
import datetime


class Tweet(db.Model):
    __tablename__ = 'tweets'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(144), nullable=False)
    imageURL = db.Column(db.String(255))
    userId = db.Column(db.Integer,db.ForeignKey("users.id"), nullable=False)
    likes = db.Column(db.Integer)
    retweets = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.datetime.now())


    userIds = db.relationship("User", back_populates="tweets")
    comments = db.relationship("Comment", back_populates="tweetIds")



    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'imageURL': self.imageURL,
            'user': self.userIds.to_dict(),
            'likes': self.likes,
            'retweets': self.retweets,
            'time': self.created_at,
        }
