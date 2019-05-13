const Discord = require('discord.js')
const client = new Discord.Client()
client.on('message', message => {
  if (message.content === '!') {
    
    var text = message.content.substring(1);
  var imagem="./img/Articune.png"
  var attimage="Articune.png"
 //---------
  
  
message.channel.send({embed: {
  color: 3447003,
  description: "A very simple Embed!"
}});
  
  
	  
	  
	  
//---------	  
  }
})
client.login(process.env.BOT_TOKEN)
