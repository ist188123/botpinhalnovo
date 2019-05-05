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



function informa_raid(message,abre_ovo,tempo_raid){
	const embed = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 1024 characters.")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
 .addField(tempo_raid, "", false)
  .addField("Criada por:", "dfadsfaf.", true)
  
  .addField("ffff", "Hora enviao msg.", true)
 .addField("autor", "They can also be inline.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
 
  message.channel.send({embed});
	
	
}





client.on("message", (message) => {
if(message.content == "!ping"){ // Check if content of message is "!ping"
	
	message.channel.send("Data : "+dia(new Date()));
   var  abre_ovo=  add_minutes(new Date(), -40).toString();
   var  tempo_raid="Aberta das : "+ add_minutes(new Date(), 5).toString()+ " até : "+add_minutes(new Date(), 50).toString();
   
	informa_raid(message,abre_ovo,tempo_raid);


}//fim ping
	
});
client.login(process.env.BOT_TOKEN);

