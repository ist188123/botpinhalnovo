const Discord = require('discord.js')
const client = new Discord.Client()
client.on('message', message => {
  if (message.content === '!') {
    
 
  
 //---------
  
  
message.channel.send({embed: {
  color: 3447003,
  description: "A very simple Embed!"
}});
  
  
	  
	  
	  
//---------	  
  }
})
client.login(process.env.BOT_TOKEN)
