function doGet() {
  SpreadsheetApp.getActiveSheet();
  return HtmlService.createTemplateFromFile("index.html").evaluate();
}

function getInfo() {
  const ss = SpreadsheetApp.getActiveSheet();
  const maxColumn = ss.getLastColumn();
  const maxRow = ss.getLastRow() - 1;
  const index = ss.getRange(1, 1, 1, maxColumn).getValues()[0];
  const data = ss.getRange(2, 1, maxRow, maxColumn).getValues();
  let result = [];
  for (let i = 0; i < maxRow; i++) {
    let json = new Object();
    for (let j = 0; j < maxColumn; j++) {
      json[index[j]] = data[i][j];
    }
    result.push(json);
  }
  return result;
}

function createDIV(content, className) {
  const div_f = "<div class='" + className + "'>";
  const div_r = "</div>";
  return div_f + content + div_r;
}

function createA(url, body) {
  const a_f = "<a href='" + url + "'>";
  const a_r = "</a>";
  return a_f + body + a_r;
}

function createMenu(data) {
  let body;
  let sale = "";
  const salefrag = data.salefrag;
  const recipe = createDIV(data.recipe, "recipe");
  const price = createDIV(data.price + "円", "price");
  let url = "";
  if (data.bitcoin_url) {
    url += createDIV(createA(data.bitcoin_url, "ビットコインで購入"), "url");
  }
  if (data.paymo_url) {
    url += createDIV(createA(data.paymo_url, "paymoで購入"), "url");
  }
  const des = createDIV(data.description, "description");
  const className = "menu";
  if (!salefrag) {
    url = createDIV("販売休止", "url");
    sale = createDIV("すみません。現在購入できません。", "sale");
    className = "menu soldout";
  }
  body = sale + recipe + price + des + url;
  body = createDIV(body, className);
  return body;
}
