curl "http://tic-tac-toe.wdibos.com/sign-up" \
  --include \
  --request POST \
  --data-urlencode "credentials[email]=Oliver" \
  --data-urlencode "credentials[password]=Oliver" \
  --data-urlencode "credentials[password_confirmation]=Oliver"
