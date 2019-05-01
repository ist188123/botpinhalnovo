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



function informa_raid(message){
	
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
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
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
       message.channel.send("Ovo : "+add_minutes(new Date(), -40).toString());
       message.channel.send("Abre : "+add_minutes(new Date(), 5).toString());
       message.channel.send("Termina : "+add_minutes(new Date(), 50).toString());

		
	informa_raid(message);

		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}//fim ping
	
});
client.login(process.env.BOT_TOKEN);

