const crypto = require('crypto');
const hashes = crypto.getHashes();

// 学习于https://www.jianshu.com/p/b761111eef72 http://nodejs.cn/api/readline.html
const readline = require('readline');

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

void async function hash() {
  let text = await input();
  console.log('需要加密的文本是: %s', text);
  // text 要摘要的文本
  // hashtype 摘要的算法
  function createHash(text, hashtype) {
    const hash = crypto.createHash(hashtype).update(text).digest("hex");
    console.log(hashtype, hash, hash.length);
  }
  hashes.forEach((type) => {
    // createHash("蚊子", type);
    createHash(text, type);
  });
}()