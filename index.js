const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');



client.on('message', msg => {
  
  
  
  if (msg.content.startsWith('!quest')) {

	//---------------  
	
	  
var pkendereco='http://pnraidspn.atwebpages.com/poketstop.php'
//var jsonData = require('./raidspn.json');



var pkstQuest="http://pokemongo.pt";
var findpoketstop = msg.content.substring(1);


let poketstop = findpoketstop.substring(findpoketstop.split(" ")[0].length,findpoketstop.length).trim().toLocaleLowerCase()



    let reqpkst = http.get(pkendereco, function(res) {
        let datapkst = ''
            
    
        res.on('data', function(stream) {
          datapkst += stream;
        });

        res.on('end', function() {
            pkstMap = JSON.parse(datapkst);
            
            // will output a Javascript object
            var lerpkt="";
            for ( a=0; a<pkstMap.length;a++){
              lerpkt=pkstMap[a].cod.toLocaleLowerCase();
                if(lerpkt.includes(poketstop)){
			if (lerpkt.startsWith('http')) {
		             pkstQuest=lerpkt;
		         }
                    
                    
                }
                
            }
            
        });
    });


	  
	  
	//----------------  
	  
      var endereco='http://pnraidspn.atwebpages.com/teste.php'

      var dmsg = msg.content.substring(1);


      let cod = dmsg.split(" ")[0];

      let pokestop = dmsg.split(" ").slice(1).join(" ");
      let quest = "";
      let missao = "";
      let questimagem = "";
  
  let req = http.get(endereco, function(res) {
        let data = '',
            questMap;
    
        res.on('data', function(stream) {
            data += stream;
        });
        res.on('end', function() {
            questMap = JSON.parse(data);
    
             for (var x = 0; x < questMap.length; x++) {

        if (cod == questMap[x].cod) {
          quest = questMap[x].quest;
          missao = questMap[x].missao;
          questimagem = questMap[x].questimagem;
         
		
		
		 
		
		
         //--
        //  const embed = new Discord.RichEmbed()
    const embed = {
	color: 0x0099ff,
	title: 'Some title',
	url: 'https://discord.js.org',
	author: {
		name: 'Some name',
		icon_url: 'https://i.imgur.com/wSTFkRM.png',
		url: 'https://discord.js.org',
	},
	description: 'Some description here',
	thumbnail: {
		url: 'https://i.imgur.com/wSTFkRM.png',
	},
	fields: [
		{
			name: 'Regular field title',
			value: 'Some value here',
		},
		{
			name: '\u200b',
			value: '\u200b',
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
	],
	image: {
		url: 'https://i.imgur.com/wSTFkRM.png',
	},
	timestamp: new Date(),
	footer: {
		text: 'Some footer text here',
		icon_url: 'https://i.imgur.com/wSTFkRM.png',
	},
};
	  
	  
	  
	//-- fim mensagnem  
    msg.guild.channels.find("name", "quest").sendMessage({ embed }); 
          //---
          
          // - - messagem
          //.setAuthor(quest, 'https://exraidspinhalnovo.webnode.pt/_files/200000083-e9b0feaad1/450/pkst.png')
	
	//  .setFooter("PN PoGo Raids, pubicado ", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")
     
     
         // -- fim mensagem 
         
        }
      }

            
        });
    });
   //----ffff 
	  
	
	  
	  
//----fim f	  
  }
  
  
  
 
  
  
  
  
  
});
client.login(process.env.BOT_TOKEN);
