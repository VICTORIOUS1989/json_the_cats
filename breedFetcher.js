const request= require('request');
 const args = process.argv.slice(2); ;


request('https://api.thecatapi.com/v1/breeds/search?q='+args, function (error, response, body) {

  /*console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log(typeof body);
*/
if (error === null) console.log("error breed not found ");
else {
  console.error('error:', error); // Print the error if one occurred
  const data = JSON.parse(body);
  console.log(data[0].description);
}

//console.log(typeof data);

});


