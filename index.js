const Discord = require("discord.js");
const client = new Discord.Client(); 



let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
client.on("message", (message) => {
if(message.content == "!ping"){ // Check if content of message is "!ping"
	message.channel.send(client.uptime / 1000);
	
let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
let totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
	
	
	message.channel.send(hours);
	message.channel.send(totalSeconds);
	
		message.channel.send("pong!"); // Call .send() on the channel object the message was sent in
	}
});

client.login(process.env.BOT_TOKEN);

