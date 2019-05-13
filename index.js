const Discord = require('discord.js')
const client = new Discord.Client()
client.on('message', message => {
  if (message.content === '!') {
    
 
  
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
