const crypto = require('crypto');
const readline = require('readline');



// const result = crypto.createHmac("sha1", "123456").update("蚊子").digest("hex");

// console.log(result); // 0bdd6c1192e321e34887d965c1140be4361ada65



async function input() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let answer = await new Promise((resolve => {
    rl.question('请输入要加密的文本: ', function (answer) {
      console.log('你输入的是 %s', answer);
      resolve(answer);
      // 不加close，则不会结束
    });
  }))
  rl.close();
  return answer;
}

function createHmac(text) {
  // const text = "蚊子";
  const key = Math.random().toString().slice(-6);

  const result = crypto.createHmac("sha1", key).update(text).digest("hex");

  console.log(text, key, result);
}

void async function hmac() {
  const text = await input();
  let n = 10;
  while (n--) {
    createHmac(text);
  }
}()