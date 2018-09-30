const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class OUCommand extends Commando.Command
{
   
   constructor(client){
    super(client, {
        name: 'ou',
        group: 'pokemon',
        memberName: 'ou',
        description: 'Shows a list of all OU pokemon'
    })

   }

   async run(message, args)
   {
     var myInfo = new Discord.RichEmbed()
     .setTitle("# OU")
     // .addField("About Me", "Name: Crazy Fast Armaldo", true)
     .setDescription("* Aerodactyl" + "\r\n" + "* Blissey" + "\r\n" + 
     "* Celebi" + "\r\n" + "* Claydol" + "\r\n" + "* Cloyster" + "\r\n"  + "* Dugtrio" + "\r\n" + "* Flygon" + "\r\n" + 
     "* Forretress" + "\r\n" + "* Gengar" + "\r\n" + "* Gyarados" + "\r\n"+ "* Heracross" + "\r\n" + "* Jirachi" + "\r\n" + 
     "* Jolteon" + "\r\n" + "* Magneton" + "\r\n" + "* Metagross" + "\r\n"+ "* Milotic" + "\r\n" + "* Porygon2" + "\r\n" + 
     "* Raikou" + "\r\n" + "* Regice" + "\r\n" + "* Salamence" + "\r\n"+ "* Skarmory" + "\r\n" + "* Snorlax" + "\r\n" + 
     "* Starmie" + "\r\n" + "* Suicune" + "\r\n" + "* Swampert" + "\r\n"+ "* Tyranitar" + "\r\n" + "* Zapdos"/* + "\r\n" + 
     "* Docile" + "\r\n" + "* Serious" + "\r\n" + "* Bashful" + "\r\n" + "* Quirky"*/)
     //  .setTitle("Aerodactyl")
     // .setColor(0xFF0000)
     // .setThumbnail(message.author.avatarURL)
     // .setThumbnail("https://cdn.bulbagarden.net/upload/1/16/MDP348.png")
     .setURL("https://www.smogon.com/dex/rs/formats/ou/")
     //  .setURL("https://bulbapedia.bulbagarden.net/wiki/Armaldo_(Pok%C3%A9mon)")
     // .setFooter("Vote me into Ubers 2020")

     message.channel.send(myInfo);
   }

}
module.exports = OUCommand;