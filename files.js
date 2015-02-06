var fs = require("fs");
document.getElementById("files").innerHTML = "zzz";
//function getFiles()
//{
fs.readdir("./", function(err, data)
{
	//for(var i = 0; i < data.length; i++)
	//{
		if(!err)
		{
			document.getElementById("files").innerHTML = data;
			console.log(data);
		}
	//}
});
//}