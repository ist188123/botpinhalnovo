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



client.on("message", (message) => {
if(message.content == "!ping"){ // Check if content of message is "!ping"
	
	message.channel.send("Data : "+dia(new Date()));
       message.channel.send("Ovo : "+add_minutes(new Date(), -40).toString());
       message.channel.send("Abre : "+add_minutes(new Date(), 5).toString());
       message.channel.send("Termina : "+add_minutes(new Date(), 50).toString());
	
	
		
	}
});
client.login(process.env.BOT_TOKEN);

