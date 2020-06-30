const crypto = require('crypto');
const input = require('./utils');

// const result = crypto.createHmac("sha1", "123456").update("蚊子").digest("hex");

// console.log(result); // 0bdd6c1192e321e34887d965c1140be4361ada65

function createHmac(text) {
  // const text = "蚊子";
  const key = Math.random().toString().slice(-6);

  const result = crypto.createHmac("sha1", key).update(text).digest("hex");

  console.log(text, key, result);
}

void async function () {
  const text = await input();
  let n = 10;
  while (n--) {
    createHmac(text);
  }
}()