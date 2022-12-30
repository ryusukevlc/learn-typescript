const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("１秒経ちました。");
    resolve();
    console.log(promise);
  }, 1000);
});

console.log(promise);

promise.then(() => {
  console.log("thenメソッドが呼ばれました。");
});
