from flask import Flask, jsonify, render_template
from pymongo import MongoClient
import re
from nltk.corpus import stopwords
from nltk.tokenize import RegexpTokenizer
from nltk.stem import WordNetLemmatizer
from langdetect import detect, LangDetectException
from gensim import corpora
from gensim.models.ldamodel import LdaModel
from flask_cors import CORS
import time

### Uncomment the following lines if you are running the app for the first time
# nltk.download('stopwords')
# nltk.download('wordnet')


### Client connection to MongoDB Atlas
client = MongoClient('mongodb+srv://sshahbscs20seecs:sFiIJeI6YV2guDkc@cluster0.1fxixvl.mongodb.net/?retryWrites=true&w=majority')
### Fetching Data
db = client['Psl_data']
collection = db['tweets']
documents = collection.find()
tweets = [doc['tweet'] for i, doc in enumerate(documents) if i < 500]

### Initializing the preprocessing tools
tokenizer = RegexpTokenizer(r'\w+')
en_stopwords = set(stopwords.words('english'))
lemmatizer = WordNetLemmatizer()

### Initializing the Flask app
app = Flask(__name__)
CORS(app)


def processTweet(tweet):
    try:
        # Check if the tweet is in English
        if detect(tweet) != 'en':
            return []  # return an empty list if the tweet is not in English
    except LangDetectException:
        return []  # return an empty list if language detection fails
    # Lowercase
    tweet = tweet.lower()
    # Remove URLs
    tweet = re.sub(r"http\S+|www\S+|https\S+", '', tweet, flags=re.MULTILINE)
    # Remove user mentions
    tweet = re.sub(r'@\w+', '', tweet)
    # Remove punctuations and numbers
    tweet = re.sub(r'\d+', '', tweet)
    # Tokenize
    tokens = tokenizer.tokenize(tweet)
    # Remove stopwords and lemmatize
    cleaned_tokens = [lemmatizer.lemmatize(token) for token in tokens if token not in en_stopwords]
    return cleaned_tokens


def lda(num_topics=1): 
    # Cleaning the tweets using your preprocessing function
    processed_tweets = [processTweet(tweet) for tweet in tweets]
    # Creating a term dictionary from the tokenized tweets
    dictionary = corpora.Dictionary(processed_tweets)
    # Converting list of tokenized tweets to Document Term Matrix
    doc_term_matrix = [dictionary.doc2bow(tweet) for tweet in processed_tweets]
    # Creating the LDA model
    lda_model = LdaModel(doc_term_matrix, num_topics=num_topics, id2word=dictionary, passes=5)
    # # Collect words and their weights
    lda_data = []
    for word, weight in lda_model.show_topic(0, 200):
        # Convert numpy.float32 to Python float
        weight = float(weight)
        lda_data.append({"text": word, "value": (round(weight, 4) * 2000)})

    client.close()
    return lda_data


@app.route('/lda', methods=['GET'])
def generate_lda():
    lda_results = lda()
    return lda_results

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
