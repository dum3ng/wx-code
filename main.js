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

let scope = "snsapi_base";
const ele = document.querySelector("#code");
const href = document.querySelector("#href");
const jump = document.querySelector("#jump");
const scopeEle = document.querySelector("#scope");
const changeScope = document.querySelector("#change-scope");

function setScope() {
  scopeEle.innerText = `scope: ${scope}`;
}

setScope();

changeScope.addEventListener("click", () => {
  if (scope === "snsapi_base") {
    scope = "snsapi_userinfo";
  } else {
    scope = "snsapi_base";
  }
  setScope();
});

jump.addEventListener("click", () => {
  const appId = "wx5955755dd64a8c3c";
  const redirectUrl = encodeURIComponent(window.location.href);
  const newUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectUrl}&response_type=code&scope=${scope}&state=123#wechat_redirect`;
  window.location = newUrl;
});

href.innerText = window.location.href;
if (qs.code) {
  // has code
  ele.innerText = qs.code;
} else {
  ele.innerText = "no code , redirect to get it";
}
