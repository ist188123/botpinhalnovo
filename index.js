const Discord = require('discord.js')

const client = new Discord.Client()
client.on('message', message => {
var qsonData = require('./quest.json');
	
var pkbicho= function(x){

   return pkbicho=x+".png";
}



if (message.channel.name == 'adm-pg-raids') {
if (message.content.startsWith("$?")) {
	message.reply("$imagem $nome evento $dia $horas inicio $hora fim $informação");
}

if (message.content.startsWith("1")) {

	message.guild.channels.find("name", "eventos-ativos").sendMessage("ddd")
	
}//fim 1

	
  if (message.content.startsWith("$")) {

	 
	  
	  var pkmpos=message.content.split("$"); 
	 
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
   description: ""+informacao,	
timestamp: new Date(),
    footer: {
	    
      icon_url: "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png",
      text: "PN PoGo Raids, pubicado "
    }

};
	//  msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage({ embed });
//message.channel.send({
	message.guild.channels.find("name", "eventos-ativos").sendMessage({
  embed,
  files: [{
    attachment:'./img/'+v,
    name:v
  }]
});
	  
	  
//---------	  
  }
	
	
}
	
	
	
})
client.login(process.env.BOT_TOKEN)
