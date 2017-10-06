function fetchbitwire(url) {
    var ordercode = "PAP20171006-042311-000025";
    //ordercode = getOrdercode(url);
    url = "https://bitflyer.jp/EasyPay/" + ordercode;
    var response = UrlFetchApp.fetch(url).getContentText();
    Logger.log(response);
}

function getOrdercode(url){
  var response = UrlFetchApp.fetch(url).getContentText();
  var regexp = /action=.+(PAP\d+-\d+-\d+)\"/i;
  return response.match(regexp)[1];
}

function getPrice(response){
  var regexp = /action=.+(PAP\d+-\d+-\d+)\"/i;
  
}
