const Discord = require("discord.js");
const client = new Discord.Client(); 
const data =require('date-utils');

let now = new Date();

client.on("message", (message) => {
if(message.content == "!ping"){ // Check if content of message is "!ping"
	
	

		message.channel.send("pong!"); // Call .send() on the channel object the message was sent in
	}
});

client.login(process.env.BOT_TOKEN);

