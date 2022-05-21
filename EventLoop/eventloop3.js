setTimeout(() => {
  console.log("timer1");

  Promise.resolve().then(function () {
    console.log("promise1");
  });
}, 0);

setTimeout(() => {
  console.log("timer2");

  Promise.resolve().then(function () {
    console.log("promise2");
  });
}, 0);

/**
 * V10 以前
 *
 * timer1
 * timer2
 * promise1
 * promise2
 */

/**
 * V11 以後
 *
 * timer1
 * promise1
 * timer2
 * promise2
 */
