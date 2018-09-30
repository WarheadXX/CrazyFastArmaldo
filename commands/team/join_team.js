const Commando = require('discord.js-commando');
// const bot = new Commando.Client();

class JoinTeamCommand extends Commando.Command
{
   constructor(client){
    super(client, {
        name: 'jointeam',
        group: 'team',
        memberName: 'jointeam',
        description: 'Allows you to join a team'
    })

   }

   async run(message, args)
 {
    currentTeamMembers.push(message.author);
    message.reply("You have been added to the team!");
 }

}
module.exports = JoinTeamCommand;