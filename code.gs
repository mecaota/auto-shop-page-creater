function doGet() {
  SpreadsheetApp.getActiveSheet();
  return HtmlService.createTemplateFromFile("index.html").evaluate();
}

function getInfo(){
  var ss = SpreadsheetApp.getActiveSheet();
  var maxColumn = ss.getLastColumn();
  var maxRow = ss.getLastRow();
  return [ss.getRange(2, 1, maxRow-1, maxColumn).getValues(), maxRow-1];
}

function createDIV(content, class){
  var div_f = "<div class='" + class +　"'>";
  var div_r = "</div>";
  return div_f + content + div_r;
}

function createA(url){
  var a_f = "<a href='" + url + "'>";
  var a_r = "</a>";
  return a_f + url + a_r;
}

function createMenu(data){
  var sale = createDIV(data[0], "sale");
  var salebool = data[1];
  var recipe = createDIV(data[2], "recipe");
  var price = createDIV(data[3]+"円", "price");
  var url = createDIV(createA(data[4]), "url");
  var des = createDIV(data[5], "description");
  var body = sale + recipe + price + des + url;
  return createDIV(body, "menu");
}