const Discord = require("discord.js");
const client = new Discord.Client(); 

var d = Date.now();

let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
client.on("message", (message) => {
if(message.content == "!ping"){ // Check if content of message is "!ping"
	
	
	message.channel.send(d);

		message.channel.send("pong!"); // Call .send() on the channel object the message was sent in
	}
});

client.login(process.env.BOT_TOKEN);

