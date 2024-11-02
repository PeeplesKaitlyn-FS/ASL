FROM python:3.9

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD [ "python", "-c", "import datetime; print('Hello ASL! ' + datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'))" ]