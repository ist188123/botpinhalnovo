const Discord = require('discord.js')
const client = new Discord.Client()
client.on('message', message => {
  if (message.content === '!') {
    
 
  
 //---------
  //Articuno.png

const embed = {
  "title": "A Title" ,
  "color": 0xF96221,
  "thumbnail": {
    "url": "attachment://Articuno.png"
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
message.channel.send({
  embed,
  files: [{
    attachment:'./img/Articuno.png',
    name:'Articuno.png'
  }]
});
	  
	  
//---------	  
  }
})
client.login(process.env.BOT_TOKEN)
