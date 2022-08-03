from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class TweetsForm(FlaskForm):
    content = StringField('content', validators=[DataRequired()])
    imageURL = StringField('imageURL', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])
