FROM python:3.7
RUN mkdir /conf
WORKDIR /conf
ADD ./requirements.txt /conf/
RUN apt-get update && \
    apt-get install -y vim && \
    pip install --upgrade pip && \
    pip install -r service-requirements.txt && \
    useradd -m -s /bin/bash -u 1000 wataru && \
    mkdir /var/log/uwsgi && \
    mkdir /app && \
    mkdir /app/site && \
    chmod -R 766 /app/site
    # mkdir /app/site/src
ADD ./service-uwsgi.ini /app/uwsgi.ini

WORKDIR /app/site



