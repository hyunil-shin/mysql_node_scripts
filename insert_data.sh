#!/bin/bash

set -x
set -e

IP=$1
PORT=$2
ID=$3
PW=$4
DB=$5
ITER=$6

if [ -f ./sql/data_big.sql ]; then
	echo "already created"
else
	unzip sql/data_big.zip
	mv data_big.sql sql/
fi
node src/insert_data.js $IP $PORT $ID $PW $DB $ITER
node src/run_query.js $IP $PORT $ID $PW $DB "select count(*) from hello;"

