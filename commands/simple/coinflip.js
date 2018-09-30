const Commando = require('discord.js-commando');
// const bot = new Commando.Client();

class CoinFlipCommand extends Commando.Command
{
   constructor(client){
    super(client, {
        name: 'flip',
        group: 'simple',
        memberName: 'flip',
        description: 'Flips a coin, landing on either Heads or Tails'
    })

   }

   async run(message, args)
 {
   var chance = Math.floor(Math.random() * 2);
   if(chance == 0)
   {
     message.reply("HEADS");
 
   }
   else
   {
     message.reply("TAILS");
   }
 }

}
module.exports = CoinFlipCommand;