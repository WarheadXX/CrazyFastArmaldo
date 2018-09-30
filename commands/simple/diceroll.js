const Commando = require('discord.js-commando');
// const bot = new Commando.Client();

class DiceRollCommand extends Commando.Command
{
   constructor(client){
    super(client, {
        name: 'roll',
        group: 'simple',
        memberName: 'roll',
        description: 'Rolls a six sided dice and gives a result'
    })

   }

   async run(message, args)
 {
   var diceroll = Math.floor(Math.random() * 6) + 1;
   message.reply("Your dice landed on " + diceroll);
 }

}
module.exports = DiceRollCommand;