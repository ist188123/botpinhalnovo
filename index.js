const Discord = require('discord.js')
const client = new Discord.Client()
client.on('message', message => {
  if (message.content === '!') {
    
 
  
 //---------
  

  
  message.channel.send({
  embed,
  files: [{
    attachment:'img/Articune.png',
    name:'Articune.png'
  }]
});
	  
	  
	  
//---------	  
  }
})
client.login(process.env.BOT_TOKEN)
