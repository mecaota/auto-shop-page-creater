function doGet() {
  SpreadsheetApp.getActiveSheet();
  return HtmlService.createTemplateFromFile("index.html").evaluate();
}

function getInfo(){
  var ss = SpreadsheetApp.getActiveSheet();
  var maxColumn = ss.getLastColumn();
  var maxRow = ss.getLastRow()-1;
  var index = ss.getRange(1, 1, 1, maxColumn).getValues()[0];
  var data = ss.getRange(2, 1, maxRow, maxColumn).getValues();
  var result = [];
  for(var i=0; i<maxRow; i++){
    var json = new Object();
    for(var j=0; j<maxColumn; j++){
      json[index[j]] = data[i][j];
    }
    result.push(json);
  }
  return result;
}

function createDIV(content, class){
  var div_f = "<div class='" + class +　"'>";
  var div_r = "</div>";
  return div_f + content + div_r;
}

function createA(url, body){
  var a_f = "<a href='" + url + "'>";
  var a_r = "</a>";
  return a_f + body + a_r;
}

function createMenu(data){
  var body;
  var sale = "";
  var salefrag = data.salefrag;
  var recipe = createDIV(data.recipe, "recipe");
  var price = createDIV(data.price+"円", "price");
  var url = "";
  if(data.bitcoin_url){
    url += createDIV(createA(data.bitcoin_url, "ビットコインで購入"), "url");
  }
  if(data.paymo_url){
    url += createDIV(createA(data.paymo_url, "paymoで購入"), "url");
  }
  var des = createDIV(data.description, "description");
  var class = "menu";
  if(!salefrag){
    url = createDIV("販売休止", "url");
    sale = createDIV("すみません。現在購入できません。", "sale");
    class = "menu soldout"
  }
  var body = sale + recipe + price + des + url;
  body = createDIV(body, class);
  return body;
}
