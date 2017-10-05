function doGet() {
  SpreadsheetApp.getActiveSheet();
  return HtmlService.createTemplateFromFile("index.html").evaluate();
}

function createDIV(content, class){
  var div_f = "<div class='" + class +　"'>";
  var div_r = "</div>";
  
  return div_f + content + div_r;
}

function getInfo(){
  var ss = SpreadsheetApp.getActiveSheet();
  var maxColumn = ss.getLastColumn();
  var maxRow = ss.getLastRow();
  return [ss.getRange(2, 1, maxRow-1, maxColumn).getValues(), maxRow-1];
}