const Discord = require('discord.js')

const client = new Discord.Client()
client.on('message', message => {

var pkbicho= function(x){

   return pkbicho=x.substring(1)+".png";
}
	
  if (message.content.startsWith("#")) {
	 var pkmpos=message.content.split("#"); 
	  var v=pkmpos[1]
   // var v=pkbicho(message.content);
 
 //---------
  //Articuno.png

const embed = {
  "title": "A Title" ,
  "color": 0xF96221,
  "thumbnail": {
    "url": "attachment://"+v
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
    attachment:'./img/'+v,
    name:v
  }]
});
	  
	  
//---------	  
  }
	
	

	
	
	
})
client.login(process.env.BOT_TOKEN)
