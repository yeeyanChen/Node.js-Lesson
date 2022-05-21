async function home() {
  console.log("This is the home page.");

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("This is home page.");
    }, 3000);
  });
}

function blog() {
  console.log("This is the blog page.");
  return "This is blog page.";
}

module.exports.home = home;
module.exports.blog = blog;
