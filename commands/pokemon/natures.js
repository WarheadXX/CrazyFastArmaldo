const Commando = require('discord.js-commando');
// const bot = new Commando.Client();

class NaturesCommand extends Commando.Command
{
   constructor(client){
    super(client, {
        name: 'natures',
        group: 'pokemon',
        memberName: 'natures',
        description: 'Shows all pokemon natures'
    })

   }

   async run(message, args)
   {
    message.reply( "```md" + "\r\n" + "--- Natures ---" + "\r\n" + "\r\n"+ "+Attack" + "\r\n" + "* Adamant - Sp.Attack" + "\r\n" + 
    "* Lonely - Defense" + "\r\n" + "* Brave - Speed" + "\r\n" + "* Naughty - Sp.Defense" + "\r\n" + "\r\n" + "+ Defense" + "\r\n" + "* Impish - Sp.Attack" + "\r\n" + 
    "* Bold - Attack" + "\r\n" + "* Relaxed - Speed" + "\r\n" + "* Lax - Sp.Defense" + "\r\n"+ "\r\n"+ "+ Sp.Attack" + "\r\n" + "* Mild - Defense" + "\r\n" + 
    "* Modest - Attack" + "\r\n" + "* Quiet - Speed" + "\r\n" + "* Rash - Sp.Defense" + "\r\n"+ "\r\n"+ "+ Sp.Defense" + "\r\n" + "* Gentle - Defense" + "\r\n" + 
    "* Calm - Attack" + "\r\n" + "* Sassy - Speed" + "\r\n" + "* Careful - Sp.Attack" + "\r\n"+ "\r\n"+ "+ Speed" + "\r\n" + "* Hasty - Defense" + "\r\n" + 
    "* Timid - Attack" + "\r\n" + "* Naive - Sp.Defense" + "\r\n" + "* Jolly - Sp.Attack" + "\r\n"+ "\r\n"+ "Neutral" + "\r\n" + "* Hardy" + "\r\n" + 
    "* Docile" + "\r\n" + "* Serious" + "\r\n" + "* Bashful" + "\r\n" + "* Quirky```");

   }

}
module.exports = NaturesCommand;