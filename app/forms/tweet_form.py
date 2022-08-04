from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class TweetsForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    content = StringField('content', validators=[DataRequired()])
    imageURL = StringField('imageURL')
