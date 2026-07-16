const { JSDOM } = require("jsdom");

async function test() {
  const res = await fetch('https://my-blog-tan-tau.vercel.app/rss.xml');
  const str = await res.text();
  const dom = new JSDOM("");
  const parser = new dom.window.DOMParser();
  const data = parser.parseFromString(str, "text/xml");
  const items = data.querySelectorAll("item");
  console.log("Items found:", items.length);
  if (items.length === 0) {
      console.log(data.documentElement.innerHTML);
  }
}

test();
