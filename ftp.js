var http = require("http");
var fs = require("fs");
var path = require("path");


var rootPath = process.argv[3];
var portTarget = process.argv[2];

var server = http.createServer(function(request, response){
	if(request.url == "/")
	{
		//var filename = "/index.html";
		
		response.setHeader("Content-Type", "text/html");
		response.statusCode = 200;
		
		fs.readdir("./", function(err, data){
			if(!err)
			{
						response.end('<html><title>FTP</title><head><link rel="stylesheet" type="text/css" href="./style.css"></head>	<body>' + data + '</body></html>');
			}
		});
	}
	else
	{
		var filename = request.url || "index.html";
	}
	var fileExtension = path.extname(filename);
	var localPath = __dirname;
	
	var extensions = {
		".html" : "text/html",
		".js": "application/javascript",
		".css": "text/css",
		".txt": "text/plain",
		".jpg": "image/jpeg",
		".gif": "image/gif",
		".png": "image/png" 
	};
	
	var validExt = extensions[fileExtension];
	
	if(validExt)
	{
		localPath += filename;
		fs.exists(localPath, function(exists)
		{
			if(exists)
			{
				fs.readFile(localPath, function(err, content)
				{
					if(!err)
					{
						response.setHeader("Content-Length", content.length);
						response.setHeader("Content-Type", validExt);
						response.statusCode = 200;
						response.end(content);
					}
					else
					{
						console.log("File error");
						response.writeHead(500);
						response.end;
					}
				});
			}
			else
			{
				console.log("File not found");
				response.writeHead(404);
				response.end();
			}
		});
	}
	else
	{
		console.log("Invalid ext : " + fileExtension);
	}
	
	
});

server.listen(+process.argv[2], "127.0.0.1");