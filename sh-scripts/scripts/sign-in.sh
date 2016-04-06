#!/bin/bash


# curl "http://httpbin.org/post" \
curl "http://tic-tac-toe.wdibos.com//sign-in" \
  --include \
  --request POST \
  --data-urlencode "credentials[email]=$EMAIL"\
  --data-urlencode "credentials[password]=$PASSWORD"

echo
