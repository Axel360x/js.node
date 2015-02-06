var net = require("net");
var exec = require("child_process").exec;

var clients = [];

var server = net.createServer(function(socket)
{
	socket.name = socket.remoteAddress + ":" + socket.remotePort;
	clients.push(socket);
	socket.on("timeout", function()
	{
		console.log("Timed out!");
	});
	socket.on("close", function()
	{
		clients.splice(clients.indexOf(socket), 1);
		broadcast(socket.name + " disconnected\n");
		console.log("Client disconnected");
	});
	socket.on("data", function(data)
	{
		console.log("Got something!");
		if(data.toString() == "calc")
		{
			var child = exec("calc");
		}
		broadcast(socket.name + " said: " + data + "\n", socket);
	});
	socket.on("error", function(err) {
    console.log("Error");
	});
	socket.write("Hello " + socket.name + "\n");
	broadcast(socket.name + " connected!\n", socket);
	
});
server.on("connection", function()
{
	console.log("Client connected");
});
server.listen(1337);

function broadcast(message, sender)
{
	clients.forEach(function (client)
	{
		if(client == sender)
			return;
		client.write(message);
	});
}