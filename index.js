const Discord = require('discord.js');
const client = new Discord.Client();






client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.on('message', msg => {

//apagar mensagens
	
      

     
	
	
//fim apagar mensagens	

//funcao


function criaRaid(ncanal,text,treinador){
  //inicio mensagem
	//var totaltreinadores=treinador.trim().split("@")
	//"!raid5 piscina !12h30".substring(1)
	
	
	var status="?";
	var cpiv="?"
	
	var ovo="";
	var braid=ovo;
	var bicho="";
	
	
	
	if(treinador.startsWith('%')){
      bicho=treinador.substring(1,treinador.indexOf(' '));
      treinador=treinador.substr(treinador.indexOf(' ')+1);
      
 
 }
	
	
	
	                var tiporaid=ncanal.substring(5,6);
			var titulo="RAID "+ncanal.substr(5)
			var thoras=titulo.split("-")
			var horas=thoras[thoras.length-1]
	y=thoras
var local=""

for (var i=0;i<y.length-1;i++){
   local=local+" "+y[i]
   
}

	//--tipos raid
	
	
	 //----  
	
	
	 //-----   
	if(tiporaid.startsWith('3')){
        ovo="https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";
      
		braid=ovo;   
		
		//bicho
	if(bicho.startsWith('machamp')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000031-dcf97ddeea/450/pokemon_icon_068_00.png";
		cpiv="1574-1967 1650-2063"	
       }     
	}   
	//----     
	    
	
	
	
	
     if(tiporaid.startsWith('4')){
        ovo="https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";
       
        braid=ovo;
     
     if(bicho.startsWith('absol')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000028-3bf1a3ce89/450/apsol.png";
	     cpiv="1232-1303/1540-1629";
       }      
	      
	 if(bicho.startsWith('tyra')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000029-e0378e12f0/450/tyra.png";
       } 
     } //----  
	
	
	 //------
	if(tiporaid.startsWith('5')){
        ovo="https://exraidspinhalnovo.webnode.pt/_files/200000019-4d5f84e5ec/200/Egg_Raid_Legendary.png";
       
        braid=ovo;    
		
		
	
	
	if(bicho.startsWith('registeel')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000035-0751e084bd/450/registeel.png";
	cpiv="1222-1292 / 1528-1615";
	status="Charizard with Overheat\nBlaziken FIRE\nTyphlosion - Overheat\n"+
		"Arcanine - Flamethrower\nSalamance - Fire Fang - Fire Blast\nHeracross - Combat\n";
       }	
		
		
		
	if(bicho.startsWith('regice')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000018-6874a696da/450/regice.png";
	cpiv="1682-1764 / 2103-2205";
		status="ENTEI\nMOLTRES\nCHARIZARD\nFLAREON\nHO-oh";
       }	
	    
	  if(bicho.startsWith('ohoh')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000026-5ec255fb74/450/Ho-Oh.png";
       }
	    
	    
      if(bicho.startsWith('articune')){
         braid="https://exraidspinhalnovo.webnode.pt/_files/200000030-050b3060a3/450/articune.png";
       }   
	     
	}//----    
	
	
	
	//--fim tipo raid
	
	
	 msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage("Utilize o canal para registo "+msg.guild.channels.find("name", msg.channel.name));	  
	
	
	
   const embed = new Discord.RichEmbed()
   .setTitle(horas)
  .setAuthor(local.toUpperCase(), ovo)
  
   /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("")
  .setFooter("Equipa: PKG Pinhal Novo, pubicado :", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")
 // .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail(braid)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Niveis CP", cpiv)
  /*
   * lista dos jogadores que vão RAID.
   */
  .addField("Treinadores:",treinador , true)
  /*
   * Blank field, useful to create some space.
   */
   
  .addBlankField(true)
  .addField("\n\n\n\n\n\Fraco contra:",status, true);  
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
	msg.replay("entrar");
	 //if(msg.content.startsWith("!")){
	//info(msg.content.toString());
	
	 //}

if(msg.content.startsWith('%') || msg.content.startsWith('@')){
	
	msg.replay("passou");
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
		

	
 
	  
	  if(msg.content.startsWith("!5") || msg.content.startsWith("!4")|| msg.content.startsWith("!3")){
	  
	
		  
		 
		  
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
