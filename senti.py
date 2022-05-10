from flask import Flask, render_template, request, jsonify
# import natural language toolkit
import nltk 
from nltk.sentiment.vader import SentimentIntensityAnalyzer

# download the lexicon
nltk.download('vader_lexicon')

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/')
def home():
  return render_template('senti.html')

@app.route('/sentiment')
def analyze():
  args = request.args
  s = args.get("s")

  analyzer = SentimentIntensityAnalyzer()
  score = analyzer.polarity_scores(s)
  return score
  