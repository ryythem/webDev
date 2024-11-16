const jwt = require("jsonwebtoken");

const secret = "hello";

const encrypt = jwt.sign("rythem", secret);

console.log(encrypt);

const decode = jwt.decode(encrypt);
console.log(decode);

const verify =
  ("eyJhbGciOiJIUzI1NiJ9.cnl0aGVt.Ke0DIEPrJQ8VAMFYleX_67_ai9Q_eQlkjK5MHsbIMIU",
  secret,
  (err, decoded) => {
    if (err) {
      console.log(err);
    } else {
      console.log(decoded);
    }
  });
