const Discord = require("discord.js");
const client = new Discord.Client(); 

client.on("message", (message) => {
if(message.content == "!ping"){ // Check if content of message is "!ping"
	
	var d = new Date,
dformat = [d.getMonth()+1,
       d.getDate(),
       d.getFullYear()].join('/')+' '+
      [d.getHours(),
       d.getMinutes(),
       d.getSeconds()].join(':');
	
	message.channel.send(dformat.toLocaleString());
		message.channel.send("pong!"); // Call .send() on the channel object the message was sent in
	}
});
client.login(process.env.BOT_TOKEN);

