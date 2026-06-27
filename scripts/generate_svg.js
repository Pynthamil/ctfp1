const chars = {
  '3': [
    [1,1,1,1,1],
    [0,0,0,0,1],
    [1,1,1,1,1],
    [0,0,0,0,1],
    [1,1,1,1,1]
  ],
  'x': [
    [1,0,0,0,1],
    [0,1,0,1,0],
    [0,0,1,0,0],
    [0,1,0,1,0],
    [1,0,0,0,1]
  ],
  'p': [
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,0,0,0,0]
  ],
  'l': [
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,1]
  ],
  '0': [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,1,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]
  ],
  '1': [
    [0,1,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [1,1,1,1,1]
  ],
  't': [
    [1,1,1,1,1],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0]
  ]
};

const word = "3xpl01t";
let path = "";
let xOffset = 0;

for (const char of word) {
  const grid = chars[char];
  for (let y = 0; y < 5; y++) {
    let x = 0;
    while (x < 5) {
      if (grid[y][x]) {
        let startX = x;
        while (x < 5 && grid[y][x]) {
          x++;
        }
        let width = x - startX;
        path += `M ${xOffset + startX} ${y} h ${width} v 1 h -${width} Z `;
      } else {
        x++;
      }
    }
  }
  xOffset += 6;
}

const svg = `<svg viewBox="-2 -1 45 7" style="width: 100%; max-width: 400px; height: auto; margin: 20px auto 30px auto; display: block;"><defs><linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d8b4fe" /><stop offset="100%" stop-color="#9333ea" /></linearGradient></defs><path d="${path.trim()}" fill="url(#purpleGradient)" /></svg>`;
console.log(svg);
