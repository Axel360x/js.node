/*var sum = 0;

for(var i = 2; i < process.argv.length; i++)
{
  sum += +process.argv[i];
}

console.log(sum);*/

/*var fs = require("fs");
var buffer = fs.readFileSync(process.argv[2]).toString();
console.log(buffer.split("\n").length - 1);*/

/*var fs = require("fs");
fs.readFile(process.argv[2], function callback(err, data) {
  console.log(data.toString().split("\n").length - 1);
});*/

/*var target = process.argv[2];
var extension = "." + process.argv[3];
var fs = require("fs");
var path = require("path");

fs.readdir(target, function(err,data){
  for(var i = 0; i < data.length; i++)
  {
    if(path.extname(data[i]) == extension)
    {
      console.log(data[i]);
    }
  }
});*/

var mymodule = require("./extmodule.js");
mymodule(process.argv[2], process.argv[3], function(err, data)
{
  for(var i = 0; i < data.length; i++)
  {
  console.log(data);
}
});
