export function colorToHex(colorval) {
  var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  delete parts[0];
  for (var i = 1; i <= 3; ++i) {
    parts[i] = parseInt(parts[i]).toString(16);
    if (parts[i].length === 1) parts[i] = "0" + parts[i];
  }
  return "#" + parts.join("");
}
export function genRandomColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
