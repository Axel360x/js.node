var fs = require("fs");
var path = require("path");
module.exports = function(target, extension, callback)
{
  var arr = [];
fs.readdir(target, function(err,data){
	if(err)
	{
		return callback(err, null);
	}
  var j = 0;
  for(var i = 0; i < data.length; i++)
  {
    if(path.extname(data[i]) == extension)
    {
      arr[j] = data[i];
      j++;
    }
  }
  return callback(null, arr);
});
}
