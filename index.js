const Discord = require('discord.js')
const client = new Discord.Client()
client.on('message', message => {
  if (message.content === '!') {
    
 
  
 //---------
  //Articuno.png

 const attachment = new Discord.Attachment('./img/Articuno.png', 'Articuno.png');
const embed = new RichEmbed()
        .setTitle('Wicked Sweet Title')
        .attachFile(attachment)
        .setImage('attachment://Articuno.png');
message.channel.send({embed}) 
	  
	  
//---------	  
  }
})
client.login(process.env.BOT_TOKEN)
