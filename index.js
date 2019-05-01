const Discord = require("discord.js");
const client = new Discord.Client(); 



var dia =  function (dt) {
    var d =  new Date(dt.getTime()),
    dformat = [d.getDate(),
        d.getMonth()+1,
           d.getFullYear()].join('-');

           return dformat;
}

var add_minutes =  function (dt, minutes) {
    var d =  new Date(dt.getTime() + minutes*60000),
    dformat =  [d.getHours(),
           d.getMinutes()].join(':');

           return dformat;
}



function informa_raid(message,abre_ovo,abre_raid,termina_raid){
	
	message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "This is an embed",
    url: "http://google.com",
    description: "This is a test embed to showcase what they look like and what they can do.",
    fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Ovo",
        value: abre_ovo
      },
      {
        name: "Abre",
        value: abre_raid
      }
	     ,
      {
        name: "Termina",
        value: termina_raid
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
});
	
}





client.on("message", (message) => {
if(message.content == "!ping"){ // Check if content of message is "!ping"
	
	message.channel.send("Data : "+dia(new Date()));
   var  abre_ovo=  add_minutes(new Date(), -40).toString();
   var  abre_raid= add_minutes(new Date(), 5).toString();
   var  termina_raid=  add_minutes(new Date(), 50).toString();

		
	informa_raid(message,abre_ovo,abre_raid,termina_raid);

		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}//fim ping
	
});
client.login(process.env.BOT_TOKEN);

