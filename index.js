const Discord = require("discord.js");
const client = new Discord.Client();

const http = require('http');

client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
   
    var endereco='http://pnraidspn.atwebpages.com/teste.php'
   
    message.channel.send("pong!");
  }
});
client.login(process.env.BOT_TOKEN);
