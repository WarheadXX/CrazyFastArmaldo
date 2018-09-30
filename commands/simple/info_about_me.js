const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class InfoAboutMeCommand extends Commando.Command
{
   constructor(client){
    super(client, {
        name: 'info',
        group: 'simple',
        memberName: 'info',
        description: 'learn a little bit about me!'
    })

   }

   async run(message, args)
 {
    var myInfo = new Discord.RichEmbed()
    .setTitle("All about me and my swift swim ability")
    // .addField("About Me", "Name: Crazy Fast Armaldo", true)
    .setDescription("Hello, my name is Crazy Fast Armaldo!")
    // .setColor(0xFF0000)
    // .setThumbnail(message.author.avatarURL)
    .setThumbnail("https://cdn.bulbagarden.net/upload/1/16/MDP348.png")
    .setURL("https://bulbapedia.bulbagarden.net/wiki/Armaldo_(Pok%C3%A9mon)")
    .setFooter("Vote me into Ubers 2020")

    message.channel.send(myInfo);
 }

}
module.exports = InfoAboutMeCommand;