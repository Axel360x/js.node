var net = require("net");

net.createServer(function(socket) {

	socket.on("connect", function()
	{
		console.log("Client connected");
	});
	socket.on("timeout", function()
	{
		console.log("Timed out!");
	});
	socket.on("close", function()
	{
		console.log("Client disconnected");
	});
	
	socket.on("error", function(err) {
    console.log("Error");
	});
	var data = "Response from server!";
	socket.write(data);
}).listen(1337, function()
{
	console.log("server bound");
});
