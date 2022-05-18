#!/bin/bash

set -x
set -e

IP=$1
PORT=$2
ID=$3
PW=$4

node src/lock_table.js $1 $2 $3 $4