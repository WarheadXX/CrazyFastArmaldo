const Commando = require('discord.js-commando');
// const bot = new Commando.Client();

class NewTeamCommand extends Commando.Command
{
   constructor(client){
    super(client, {
        name: 'newteam',
        group: 'team',
        memberName: 'newteam',
        description: 'Creates a new team'
    })

   }

   async run(message, args)
 {
   currentTeamMembers = [];
   message.reply("the current team has been reset");
 }

}
module.exports = NewTeamCommand;