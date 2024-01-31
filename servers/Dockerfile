FROM python:3.10

WORKDIR /app

# This includes app.py, lda.py, requirements.txt, and the folders templates/ and static/
COPY . /app

RUN pip install --no-cache-dir -r requirements.txt
RUN python -m nltk.downloader stopwords
RUN python -m nltk.downloader wordnet


EXPOSE 8000

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:8000", "app:app"]
