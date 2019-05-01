const Discord = require("discord.js");
const client = new Discord.Client(); 

client.on("message", (message) => {
if(message.content == "!ping"){ // Check if content of message is "!ping"
	let today = new Date(Date.now());
	let yesterday = new Date(2015, 0, 1);
	message.channel.send(date.subtract(today, yesterday).toMinutes());
	message.channel.send(new Date(Date.now()).toLocaleString());
		message.channel.send("pong!"); // Call .send() on the channel object the message was sent in
	}
});
client.login(process.env.BOT_TOKEN);

