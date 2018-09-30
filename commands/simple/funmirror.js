const Commando = require('discord.js-commando');
// const bot = new Commando.Client();

class FunMirrorCommand extends Commando.Command
{
   constructor(client){
    super(client, {
        name: 'funmirror',
        group: 'simple',
        memberName: 'funmirror',
        description: 'Mirrors your profile picture'
    })

   }

   async run(message, args)
 {
    message.reply(message.author.avatarURL);
 }

}
module.exports = FunMirrorCommand;