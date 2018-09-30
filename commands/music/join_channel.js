const Commando = require('discord.js-commando');
const YTDL = require('ytdl-core');
// const bot = new Commando.Client();

function Play(connection, message)
{
  var server = servers[message.guild.id];
  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
  server.queue.shift();
  server.dispatcher.on("end", function(){
    if(server.queue[0])
    {
      Play(connection, message);

    }
    else{
        connection.disconnect();


    }


  })

}

class JoinChannelCommand extends Commando.Command
{
   constructor(client){
    super(client, {
        name: 'join',
        group: 'music',
        memberName: 'join',
        description: 'Joins the voice channel of the commander'
    })

   }

   async run(message, args)
  {
    // let dispatcher = await connection.playStream(YTDL(args[0], {filter: 'audioonly'}));
    //  var channel = "General";
    if(message.member.voiceChannel)
    {
      if(!message.guild.voiceConnection)
      {
        if(!servers[message.guild.id])
        {
          servers[message.guild.id] = {queue: []}
        }
        // var server = servers[message.guild.id];
        message.member.voiceChannel.join()
          .then(connection =>{
              var server = servers[message.guild.id];
              // var stream = YTDL("https://www.youtube.com/watch?v=SHqo2FDJSU0&index=21&t=0s&list=PLtKAp9Ecb2PnBP_9JmeCsBbE3LwaBw4s_", {filter: "audioonly"})
              message.reply("Successfully Joined!");
              server.queue.push(args);
              console.log("" + server.queue[0]);
              Play(connection, message);
              message.channel.send("now playing");
            })
      }
    } 
    else
    {
        message.reply("You must be in a voice channel to summon me");
    
    }
  }
}
module.exports = JoinChannelCommand;