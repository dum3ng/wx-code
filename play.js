let s = "?code=3&a=4";
const qs = {};
if (s) {
  s = s.substring(1);
  const params = s.split("&");

  params.forEach((p) => {
    const [k, v] = p.split("=");
    qs[k] = v;
  });
}

console.log(qs);
