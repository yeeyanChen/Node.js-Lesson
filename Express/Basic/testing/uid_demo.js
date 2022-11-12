const uid = require("uid-safe");

uid(18, (err, str) => {
  console.log(str);
});
