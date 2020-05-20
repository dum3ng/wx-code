let s = window.location.search;
const qs = {};
if (s) {
  s = s.substring(1);
  const params = s.split("&");

  params.forEach((p) => {
    const [k, v] = p.split("=");
    qs[k] = v;
  });
}

if (qs.code) {
  // has code
  const ele = document.querySelector("code");
  ele.innerText = qs.code;
} else {
  const appId = "wx707aad1c20975b7d";
  const redirectUrl = encodeURIComponent(window.location.href);
  window.location.assign(
    `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`
  );
  window.location.assign();
}