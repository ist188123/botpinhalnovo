const Discord = require('discord.js')
const client = new Discord.Client()
client.on('message', message => {
  if (message.content === '!') {
    
    var text = message.content.substring(1);
  var imagem="./img/Articune.png"
  var attimage="Articune.png"
 //---------
  
 const attachment = new Discord.Attachment('./img/Articune.png', 'Articune.png');
const embed = new RichEmbed()
        .setTitle('Wicked Sweet Title')
        .attachFile(attachment)
        .setImage('attachment://Articune.png');
message.channel.send({embed})
  
  
  
  
  
  
  
  
  
	  
	  
	  
//---------	  
  }
})
client.login(process.env.BOT_TOKEN)
