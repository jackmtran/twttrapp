from app.models import db, Tweet


def seed_tweets():

    tweet = Tweet(
        content = ':droolingface:', userId= 3)
    tweet2 =  Tweet(
        content = 'yummy in my tummy', userId= 4)
    tweet3 =  Tweet(
        content = 'rawrxd', userId= 5)
    tweet4 =  Tweet(
        content = '! ! !', userId= 2)
    tweet5 =  Tweet(
        content = '@sushisimpin is my dad', userId= 1)


    db.session.add(tweet)
    db.session.add(tweet2)
    db.session.add(tweet3)
    db.session.add(tweet4)
    db.session.add(tweet5)


    db.session.commit()



def undo_tweets():
    db.session.execute('TRUNCATE tweets RESTART IDENTITY CASCADE;')
    db.session.commit()
