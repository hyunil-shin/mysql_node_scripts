#!/bin/bash

node run_query.js $1 $2 $3 $4 'SELECT table_name AS "Table", ROUND(((data_length + index_length) / 1024 / 1024), 2) AS "Size (MB)" FROM information_schema.TABLES WHERE table_schema = "hello" ORDER BY (data_length + index_length) DESC;'
