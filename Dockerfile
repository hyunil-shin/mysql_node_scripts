FROM node:10-buster

#RUN wget -O - https://github.com/hyunil-shin/mysql_node_scripts/archive/master.tar.gz | tar xz && \
#    ls -al && \
#    ln -s /mysql_node_scripts-master /script

RUN mkdir -p /script
ADD . /script
RUN ls -al /script

WORKDIR /script
RUN npm install mysql async-foreach
