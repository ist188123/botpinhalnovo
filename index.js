const Discord = require('discord.js')
const client = new Discord.Client()
client.on('message', message => {
  if (message.content === '!') {
    
    var text = message.content.substring(1);
 
 
    const embed = {
  "title": "A Title" ,
  "color": 0xF96221,

  "thumbnail": {
	  "attachFile" : "./img/Articune.png",
    "url": "attachment://Articune.png"
  },
  "fields": [
    {
      "name": "Field 1:",
      "value": "One",
      "inline": false
    },
    {
      "name": "Field 2:",
      "value": "Two",
      "inline": true,
    },
    {
      "name":"Field 3:",
      "value":"Three",
      "inline": true
    },
  ],
  "footer": {
    "text":"Footer text"
  }
};
	  
	  
  
    
	  
	  
	  
	  
	  
  }
})
client.login(process.env.BOT_TOKEN)
