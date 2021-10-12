(function () {
  function add(num1, num2) {
    return num1 + num2;
  }

  function subtract(num1, num2) {
    return num1 - num2;
  }

  // exports.add = add;
  // exports.subtract = subtract;
  module.exports = {
    add,
    subtract,
  };

  console.log(module.exports);
  console.log(module.exports == exports); //true
  console.log(this == module.exports); //thue
  console.log(this); //{}

  console.log(global);
})();
