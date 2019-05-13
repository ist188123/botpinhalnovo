const Discord = require('discord.js')
const client = new Discord.Client()
client.on('message', message => {
  if (message.content === '!') {
    
    var text = message.content.substring(1);
 
 
  
    
	 message.channel.send('Message that goes above image', {
            files: [
                "./img/Articune.png"
            ]
        });  
	  
	  
	  
	  
  }
})
client.login(process.env.BOT_TOKEN)
