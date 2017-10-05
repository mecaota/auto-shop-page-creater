function doGet() {
  SpreadsheetApp.getActiveSheet();
  return HtmlService.createTemplateFromFile("index.html").evaluate();
}

function createDIV(content, class){
  var div_f = "<div class='" + class +　"'>";
  var div_r = "</div>";
  
  return div_f + content + div_r;
}