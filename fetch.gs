function fetchbitwire(url) {
  const ordercode = "PAP20171006-042311-000025";
  // const ordercode = getOrdercode(url);
  const url = "https://bitflyer.jp/EasyPay/" + ordercode;
  const response = UrlFetchApp.fetch(url).getContentText();
  Logger.log(response);
}

function getOrdercode(url) {
  const response = UrlFetchApp.fetch(url).getContentText();
  const regexp = /action=.+(PAP\d+-\d+-\d+)\"/i;
  return response.match(regexp)[1];
}

function getPrice(response) {
  const regexp = /action=.+(PAP\d+-\d+-\d+)\"/i;
}
