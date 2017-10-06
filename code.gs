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
    Logger.log(json);
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
  var sale = "";
  var salefrag = data.salefrag;
  var recipe = createDIV(data.recipe, "recipe");
  var price = createDIV(data.price+"円", "price");
  var url = createDIV(createA(data.url), "url");
  var des = createDIV(data.description, "description");
  if(salefrag){
    sale = "販売中";
  }else{
    sale = "販売休止";
    url = createDIV("すみません。現在ビットコインで購入できません。", "soldout");
  }
  var body = sale + recipe + price + des + url;
  return createDIV(body, "menu");
}