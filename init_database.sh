#!/bin/bash

IP=$1
PORT=$2
ID=$3
PW=$4
DB=$5

node src/run_query.js $IP $PORT $ID $PW "" "DROP DATABASE ${DB};"
node src/run_query.js $IP $PORT $ID $PW "" "CREATE DATABASE ${DB};"
node src/create_table.js $IP $PORT $ID $PW $DB
if [ -f ./sql/data_big.sql ]; then
	echo "already created"
else
	unzip sql/data_big.zip
	mv data_big.sql sql/
fi
node src/insert_data.js $1 $2 $3 $4 $DB 1
node src/run_query.js $IP $PORT $ID $PW $DB "select count(*) from hello;"

