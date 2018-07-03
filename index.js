const Discord = require('discord.js');
const client = new Discord.Client();






client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.on('message', msg => {


//funcao


function criaRaid(ncanal,text,treinador){
  //inicio mensagem
	//var totaltreinadores=treinador.trim().split("@")
	//"!raid5 piscina !12h30".substring(1)
	                var tiporaid=ncanal.substring(5,6);
			var titulo="RAID 5 "+ncanal.substr(7)
			var thoras=titulo.split("-")
			var horas=thoras[thoras.length-1]
	y=thoras
var local=""

for (var i=0;i<y.length-1;i++){
   local=local+" "+y[i]
   
}

	//--tipos raid
	
	var status="";
	var cpiv=""
	
	var ovo="https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";
	var braid=ovo;
	var bicho="";
	
	 //----  
     if(tiporaid.startsWith('4')){
        ovo="https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";
       
        braid=ovo;
     
     if(bicho.startsWith('absol')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000028-3bf1a3ce89/450/apsol.png";
       }      
	      
	 if(bicho.startsWith('tyra')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000029-e0378e12f0/450/tyra.png";
       } 
     } //----  
	
	
	
	
	
	
	//--fim tipo raid
	
	
	 msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage("Utilize o canal para registo "+msg.guild.channels.find("name", msg.channel.name));	  
	
	
	
   const embed = new Discord.RichEmbed()
   .setTitle(horas)
  .setAuthor(local.toUpperCase(), "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png")
  
   /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("")
  .setFooter("Equipa: PKG Pinhal Novo, pubicado :", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")
 // .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Niveis CP", "1682 - 1764 / 2103-2205 Nuvens(cloudy)\n\n")
  /*
   * lista dos jogadores que vão RAID.
   */
  .addField("Treinadores:",treinador , true)
  /*
   * Blank field, useful to create some space.
   */
   
  .addBlankField(true)
  .addField("\n\n\n\n\n\Fraco contra:", "Entei (Fire Spin/Overheat)\n" +
"Moltres (Fire Spin/Overheat)\n" +
"Charizard (Fire Spin/Blast Burn)\n" +
"Flareon (Fire Spin/Overheat)\n" +
"Ho-Oh (Steel Wing/Fire Blast)\n" +
"Machamp (Counter/Dynamic Punch)\n" +
"Tyranitar (Smack Down/Stone Edge)\n" +
"Blaziken (Counter/Overheat)\n" +
"Breloom (Counter/Dynamic Punch)"
, true);  
   msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage({embed});	  
	




}



// fim funcao





// fim funcao
function info(titulo){
	
	var vinformacao=titulo.split("!")
	
	
	
   const embed = new Discord.RichEmbed()
  .setTitle(vinformacao[2])
  .setAuthor(vinformacao[1], "https://exraidspinhalnovo.webnode.pt/_files/200000024-8e37d8f30a/450/Item_1403-2.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("")
  .setFooter("Informação partilhada :", "https://exraidspinhalnovo.webnode.pt/_files/"+vinformacao[4])
 
  .setThumbnail("https://exraidspinhalnovo.webnode.pt/_files/"+vinformacao[4])
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("INFORMAÇÃO", vinformacao[3], true);

  msg.guild.channels.find("name", vinformacao[5]).sendMessage({embed})
	
	
	
	
	
}




if (msg.channel.name == 'adm-pg-pinhalnovo') {
	
	 if(msg.content.startsWith("!")){
	info(msg.content.toString())
	
	 }
	
}





  
	
	 
 

	
	
	
	
	
	
	if (msg.channel.name.startsWith('_raid')) {
		
		
		
		
		
		
		//if(msg.content.startsWith("")){
	      //  msg.guild.channels.find("name",msg.channel.name).sendMessage("Inserido na RAID :"+msg.author.toString());	
		
			//var mensagem=msg.author.toString()+msg.content.toString().substr(4)
			
		criaRaid(msg.channel.name,msg.channel.name,msg.content.toString())	
		//criaRaid(msg.channel.name,msg.content.toString())	
			
		//}//fim if
	    
    //msg.guild.channels.find("name",msg.channel.name).sendMessage("**Trenadores registados na RAID**\n"+msg.content.toString());
	
	}//msg.channel.name
	
    
    




	
if (msg.channel.name == 'lab-prof-willow') {
		

	
 
	  
	  if(msg.content.startsWith("!5") || msg.content.startsWith("!4")){
	  
	
		  
		 
		  
  //LE A MENSAGEM EXCLUINDO O !
     var text = msg.content.substring(1);
 
		  var canal='_raid'+text
		  canal=canal.split('!').join('').toLowerCase();
		 var nomecanal=canal.split(' ').join('-').toLowerCase();
	//cria canal
		  if(msg.guild.channels.find("name", nomecanal  )){
		  }else{
			  
	msg.guild.createChannel(canal, "text");
			
	
		  }	  
		  
		//var refcanal=refcanal.concat("#",nomecanal) 
		 //msg.guild.channels.find("name", canal.split(' ').join('-')).sendMessage("sdfsdfsadfd");	 
	        
		 
		  
	  
   text='RAID '+text	  
	var refcanal="";
		  
    
	  
	  
	  
  }   // fim do inicio carater
 
    
  
  if (msg.content === '!willow') {
    msg.reply('Olá,\nEu sou o Prof. Willow.\n\n'+
    'E vou ajudar-te a marcar as RAIDS no Pinhal Novo.\n\nAinda estou em desenvolvimento, mas podes sempre falar comigo.\n\n :stuck_out_tongue_winking_eye:');
  }


  if (msg.content === '!mewtwo') {
    msg.reply('**\nMEWTWO**\n\nCP 2275 100% sem weather bost\n\nCP 2844 100% IV com weather bost (WINDY)\n\n'+
	      'Melhores para o combater *Sem focus blast*:\n\n'+
	     '*Tyranitar*\n'+
	      '*Mewtwo*\n'+
	       '*Houndoom*\n'+
	       '*Scizor*\n'+
	      '*Pinsir*\n'+
	      '*Dragonite*\n'
	      
	     );
  }


	
		
	}
});









client.login(process.env.BOT_TOKEN);
