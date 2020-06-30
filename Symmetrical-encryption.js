const crypto = require('crypto');
const input = require('./utils');

function encode(src, key, iv) {
  let sign = "";
  const cipher = crypto.createCipheriv("aes-128-cbc", key, iv); // createCipher在10.0.0已被废弃
  sign += cipher.update(src, "utf8", "hex");
  sign += cipher.final("hex");
  return sign;
}

function decode(sign, key, iv) {
  let src = "";
  const cipher = crypto.createDecipheriv("aes-128-cbc", key, iv);
  src += cipher.update(sign, "hex", "utf8");
  src += cipher.final("utf8");
  return src;
}

void async function () {
  const key = "37725295ea78b626"; // Buffer.from('37725295ea78b626', 'utf8');
  const iv = "efcf77768be478cb"; // Buffer.from('efcf77768be478cb', 'utf8');
  // console.log(key, iv);
  // const src = "hello, my name is wenzi! my password is `etu^&&*(^123)`";
  const src = await input();
  const sign = encode(src, key, iv);
  const _src = decode(sign, key, iv);

  console.log("key: ", key, "iv: ", iv);
  console.log("原文：", src);
  console.log("加密后: ", sign);
  console.log("解密后: ", _src);

  // key:  37725295ea78b626 iv:  efcf77768be478cb
  // 原文： hello, my name is wenzi! my password is `etu^&&*(^123)`
  // 加密后:  ce6dc873bfd5a5ae6fe0b2bb3f3de46fb9fc15e0ffc75d12286871dbfa3ed185b3ebf60b8e16dd0057eb0750e897347abeddf5a2741944d5a307ceb25c181276
  // 解密后:  hello, my name is wenzi! my password is `etu^&&*(^123)`
}()