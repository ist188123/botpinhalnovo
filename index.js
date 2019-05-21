const Discord = require('discord.js')

const client = new Discord.Client()
client.on('message', message => {

var pkbicho= function(x){

   return pkbicho=x+".png";
}


if (message.content.startsWith("#?")) {
	
}



	
  if (message.content.startsWith("#")) {

	 
	  
	  var pkmpos=message.content.split("#"); 
	 
   var v=pkbicho(pkmpos[1].trim());
	 
	var nomeEvento=pkmpos[2];
	var dia=  pkmpos[3];
	  var horainicio=  pkmpos[4];
	   var horafim=  pkmpos[5];
	  var informacao=  pkmpos[6];
	  
	  
 
 //---------
  //Articuno.png

const embed = {
  "title": ""+nomeEvento ,
  "color": 0xF96221,
  "thumbnail": {
    "url": "attachment://"+v
  },
  "fields": [
    {
      "name": "Dia: ",
      "value": ""+dia,
      "inline": false
    },
    {
      "name": "Inicio:",
      "value": ""+horainicio,
      "inline": true,
    },
    {
      "name":"Fim:",
      "value":""+horafim,
      "inline": true
    },
  ],
  "footer": {
    "text":""+informacao
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
