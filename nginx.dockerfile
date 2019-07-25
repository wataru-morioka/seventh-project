FROM nginx:1.17

RUN useradd -m -s /bin/bash -u 1000 wataru

RUN sed -i 's/user\ \ nginx\;/user\ \ wataru\;/g' /etc/nginx/nginx.conf

RUN apt-get update && apt-get install -y vim
RUN apt-get install -y curl
RUN apt-get install -y procps

# RUN /bin/cp -f /usr/share/zoneinfo/Asia/Tokyo /etc/localtime
ADD ./uwsgi_params /etc/nginx/uwsgi_params

#ADD ./vhost.conf /etc/nginx/conf.d/default.conf
#CMD ["tail","-f","dev/null"]

WORKDIR /var/www
