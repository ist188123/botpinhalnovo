const Discord = require('discord.js')
const client = new Discord.Client()
client.on('message', message => {
  if (message.content === '!') {
    
    var text = message.content.substring(1);
  var imagem="./img/Articune.png"
  var attimage="Articune.png"
 //---------
  
  const exampleEmbed = new Discord.RichEmbed()
	.setTitle('Some title')
	.attachFiles(['./img/Articune.png'])
	.setImage('attachment://Articune.png');

channel.send(exampleEmbed);
  
  
	  
	  
	  
//---------	  
  }
})
client.login(process.env.BOT_TOKEN)
