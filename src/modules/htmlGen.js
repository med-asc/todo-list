// {
//  type: div
//  class: class1 class2
//  id: id
//  attr: [[property1, value1], [property2, value2]]
//  text: 'teeeext'
// }

function createHtml(arr) {
  const element = document.createElement(arr.type);
  if (arr.class) arr.class.split(' ').forEach((c) => element.classList.add(c));
  if (arr.text) element.textContent = arr.text;
  if (arr.attr) arr.attr.forEach((row) => element.setAttribute(row[0], row[1]));
  return element;
}

export default createHtml;
