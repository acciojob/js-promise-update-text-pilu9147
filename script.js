function delayHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

const outputElement = document.getElementById("output");

delayHello().then((message) => {
  outputElement.textContent = message;
});