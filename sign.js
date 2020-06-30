const crypto = require("crypto");
const fs = require("fs");
const input = require('./utils');

void async function () {
  const pub_key = fs.readFileSync("./rsa_public.key");
  const priv_key = fs.readFileSync("./rsa_private.key");

  // const text = "hello, my name is 蚊子";
  const text = await input();

  // 生成签名
  const sign = crypto.createSign("RSA-SHA256");
  sign.update(text);
  const signed = sign.sign(priv_key, "hex");

  // 验证签名
  const verify = crypto.createVerify("RSA-SHA256");
  verify.update(text);
  const verifyResult = verify.verify(pub_key, signed, "hex");

  console.log("sign", signed); // ca364a6e31c1f540737ba3efb1ddf7fa2a087c5c11efe52a9e1f2c88b1fd1e0e50f12da4f22362fdfc3d77f3f538995a27a8206d250dba3572510dfcb33064f48685b96f2b2393f56de4958448cec92a4299434aa3318efe418e166b38100bc3a1d1a9310a510087021da0f66a817043ddfd2fb88db76eb2ace480c17a7f732f
  console.log("verifyResult", verifyResult); // true
}()