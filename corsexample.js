//cors
/**
 * is a uses additionl http headers to tell browser whether a specific web
 * app can share resource with another web app
 * these two web app are having differen origin
 * 
 * let say when you are in abc.com
 *  before CORS 
 *      call to google.com - not allowed
 *      call to api.abc.com - not allowed
 *      call to abc.com:4000 diff port - not allowd
 * 
 *      diff. protocols are also not allowed
 * 
 * 
 * After CORS became std. browser do allow get data
 * 
 * 
 * Browser it self make a preflite / options call first made
 * if call is valida the server set the additional http headers along with request 
 * 
 * server setup some header
 * Accept-Control-allow-origin : *
 * 
 */
