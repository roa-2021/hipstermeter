const clientId = "5fc062d114b34900bbf796580f2f99e5";

function getLoginUrl() {
  var authorizeUrl = "https://accounts.spotify.com/authorize?";
  const scopes = encodeURIComponent("user-top-read");
  var host = "";
  if (window.location.hostname.indexOf("localhost") > -1) {
    host += "http://";
    host += window.location.hostname;
    host += ":3000";
  } else {
    host += "https://";
    host += window.location.hostname;
  }
  const queries = [
    "client_id=" + clientId,
    "response_type=token",
    "redirect_uri="+host,
    "scope=" + scopes,
  ];
  return authorizeUrl + queries.join("&");
}

function getAccessToken() {
  var accessToken = localStorage.getItem("shopify-access-token");
  const expiryString = localStorage.getItem("shopify-access-token-expires");
  
  //Check token expiry date is in the past
  const tokenExpired = (Date.parse(expiryString) - Date.parse(new Date())) < 0;
  
  if (!accessToken || (expiryString && tokenExpired)) {
    //Convert params to object
    var paramsArray = window.location.href.split("/");
    var queries = {};

    paramsArray[paramsArray.length - 1].split("&").forEach((query) => {
      const key = query.split("=")[0];
      const value = query.split("=")[1];
      queries[key] = value;
    });

    console.log(paramsArray);

    //Check if token exists in query
    if (queries.access_token) {
      accessToken = queries.access_token;

      //Save token and expiry time
      const expiry = new Date();
      expiry.setSeconds(expiry.getSeconds() + parseInt(queries.expires_in));
      localStorage.setItem("shopify-access-token", accessToken);
      localStorage.setItem("shopify-access-token-expires", expiry);
    } else {
      return false;
    }
  }
  return accessToken;
}

export default {
  getLoginUrl,
  getAccessToken,
};
