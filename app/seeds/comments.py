from app.models import db, Comment

def seed_comments():

    com1 = Comment( userId=1, tweetId=2, comment='lululul')
    com2 = Comment( userId=2, tweetId=3, comment='relatable.')
    com3 = Comment( userId=3, tweetId=4, comment='hubba hubba')
    com4 = Comment( userId=4, tweetId=5, comment='emojiemoji')
    com5 = Comment( userId=5, tweetId=1, comment='comment')


    db.session.add(com1)
    db.session.add(com2)
    db.session.add(com3)
    db.session.add(com4)
    db.session.add(com5)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
