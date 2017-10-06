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
  var json = new Object();
  for(var i=0; i<maxRow; i++){
    for(var j=0; j<maxColumn; j++){
      json[index[j]] = data[i][j];
    }
    result.push(json);
  }
  Logger.log(result);
  
  return result;
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
  if(salebool){
    sale = "販売中";
  }else{
    sale = "販売休止";
    url = createDIV("すみません。現在ビットコインで購入できません。", "soldout");
  }
  var body = sale + recipe + price + des + url;
  return createDIV(body, "menu");
}