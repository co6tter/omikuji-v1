import "./style.css";

const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
btn?.addEventListener("click", () => {
  const results = ["大吉", "中吉", "小吉", "吉", "半吉", "末吉", "末小吉", "凶", "小凶", "半凶", "末凶", "大凶"];
  const n = Math.floor(Math.random() * results.length);
  if (result) {
    result.textContent = results[n];
  }
});
