from .db import db
import datetime


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer,db.ForeignKey("users.id"), nullable=False)
    tweetId = db.Column(db.Integer,db.ForeignKey("tweets.id"), nullable=False)
    comment = db.Column(db.String(40), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.now())


    userIds = db.relationship("User", back_populates="comments")
    tweetIds = db.relationship("Tweet", back_populates="comments")


    def to_dict(self):
        return {
            'id': self.id,
            'userIds': self.userId,
            'postId': self.postId,
            'comment': self.comment,
            'poster': self.userIds.username,
            'commentersId' : self.userIds.id
        }
