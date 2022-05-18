#!/bin/bash

#set -x
set -e

IP=$1
PORT=$2
ID=$3
PW=$4
DB=$5
ITER=$6

if [ -f ./sql/infile.csv ]; then
	echo "already created"
else
	unzip sql/infile.zip
	mv infile.csv sql/
fi
for (( c=1; c <=$ITER; c++ ))
do
	node src/run_query.js $IP $PORT $ID $PW $DB "load data local infile 'sql/infile.csv' into table hello FIELDS TERMINATED BY ';';"
done

node src/run_query.js $IP $PORT $ID $PW $DB "show table status like 'hello';"

