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

const ele = document.querySelector("#code");
const href = document.querySelector("#href");
href.innerText = window.location.href;
if (qs.code) {
  // has code
  ele.innerText = qs.code;
} else {
  ele.innerText = "no code , will redirect";
  setTimeout(() => {
    const appId = "wx5955755dd64a8c3c";
    const redirectUrl = encodeURIComponent(window.location.href);
    window.location.assign(
      `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
    );
    window.location.assign();
  }, 2000);
}
