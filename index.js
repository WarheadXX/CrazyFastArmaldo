const Discord = require('discord.js');
//const bot = new Discord.Client();
const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const botKey = 'GOFUCKYOURSELFYOUMASSIVEPIECESOFSHIT';

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('team', 'Team');
bot.registry.registerGroup('pokemon', 'Pokemon');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.currentTeamMembers = [];
global.servers = {};

bot.on('message', function (message){
 if(message.content == "hello")
 {
   //    message.reply("Hello!");

   message.channel.send("Hello " + message.author + ", how are you?");

 }else if(message.content == "whats the current team"){
    // message.channel.send(currentTeamMembers);
    var teamInfo = new Discord.RichEmbed()
    .setTitle("Current Team Members");
    for(var i = 0; i < currentTeamMembers.length; i++)
    {
      var indexPlus = (i + 1)
      // teamInfo.setDescription(currentTeamMembers[i].username);
      teamInfo.addField("Member " + indexPlus.toString(), currentTeamMembers[i].username);
    }
    message.channel.send(teamInfo);
  } 
  if(message.content == "join")
  {
    message.member.send("Welcome to Generation 3 UNHORNED edition XD");
    let memberRole = message.member.guild.roles.find("name", "Youngsters");
    message.member.addRole(memberRole);

    message.member.guild.createRole({
      name: message.member.user.username,
      color: 0xFF0000,
      permissions: []
    }).then(function(role){
       message.member.addRole(role);
    
    });

    

  }
  if(message.content == "faction")
  {
    let faction1 = message.member.guild.roles.find("name", "Rocket");
    let faction2 = message.member.guild.roles.find("name", "Magma");
    let faction3 = message.member.guild.roles.find("name", "Aqua");
    // let faction1String = message.member.roles.find("name", "Rocket");
    // let faction2String = message.member.roles.find("name", "Magma");
    // let faction3String = message.member.roles.find("name", "Aqua");
    let chance = Math.floor(Math.random() * 3);

    // if(message.member.roles.has(faction1.id))
    // {
    //   message.member.removeRole(faction2.id);
    //   message.member.removeRole(faction3.id);

    // }

    // if(message.member.roles.has(faction2.id))
    // {
    //   message.member.removeRole(faction1.id);
    //   message.member.removeRole(faction3.id);
    // }

    // if(message.member.roles.has(faction3.id))
    // {
    //   message.member.removeRole(faction3.id);
    //   message.member.removeRole(faction2.id);

    // }

    if(chance == 0)
    {
      message.member.removeRole(faction2);
      message.member.removeRole(faction3);
      message.member.addRole(faction1);
      message.member.send("Congrats, you're a part of Faction Rocket");
      message.channel.send(message.author + " is the newest member of Faction Rocket");
    }
    else if(chance == 1)
    {
      message.member.removeRole(faction1);
      message.member.removeRole(faction3);
      message.member.addRole(faction2);
      message.member.send("Congrats, you're a part of Faction Magma");
      message.channel.send(message.author + " is the newest member of Faction Magma");
    }
    else
    {
      message.member.removeRole(faction1);
      message.member.removeRole(faction2);
      message.member.addRole(faction3);
      message.member.send("Congrats, you're a part of Faction Aqua");
      message.channel.send(message.author + " is the newest member of Faction Aqua");
    }

    // if(message.member.roles.has(faction1.id))
    // {
    //   message.member.removeRole(faction1);
    //   // message.member.removeRole(faction3);
    // }

    // if(message.member.roles.has(faction2.id))
    // {
    //   message.member.removeRole(faction2);
    //   // message.member.removeRole(faction3);
    // }

    // if(message.member.roles.has(faction3.id))
    // {
    //   message.member.removeRole(faction3);
    //   // message.member.removeRole(faction2);
    // }
    
  }
  if(message.content == "role")
  {
    let memberRole = message.member.guild.roles.find("name", "Youngsters");
    message.member.addRole(memberRole);

    // message.member.guild.createRole({
    //   name: message.member.user.username,
    //   color: 0xFF0000,
    //   permissions: []
    // }).then(function(role){
    //    message.member.addRole(role);
    
    // });

  }

});

bot.on("guildMemberAdd", function(member){
  member.send("Welcome to Generation 3 UNHORNED edition XD");
  // let memberRole = member.guild.roles.find("name", "Dunsparce");
  // member.addRole(memberRole);
    let introChannel = member.guild.channels.find('name', 'general')
    let faction1 = member.guild.roles.find("name", "Faction Rocket");
    let faction2 = member.guild.roles.find("name", "Faction Magma");
    let faction3 = member.guild.roles.find("name", "Faction Aqua");
    let chance = Math.floor(Math.random() * 3);
    if(chance == 0)
    {
      member.addRole(faction1);
      member.send("Congrats, you're a part of Faction Rocket");
      // member.channel.send(member + "is the newest member of Faction Rocket");
      introChannel.send(member + " is the newest member of Faction Rocket");
    }
    else if(chance == 1)
    {
      member.addRole(faction2);
      member.send("Congrats, you're a part of Faction Magma");
      // member.channel.send(member + "is the newest member of Faction Magma");
      introChannel.send(member + " is the newest member of Faction Magma");
    }  
    else
    {
      member.addRole(faction3);
      member.send("Congrats, you're a part of Faction Aqua");
      // member.channel.send(member + "is the newest member of Faction Aqua");
      introChannel.send(member + " is the newest member of Faction Aqua");
    }
    let memberRole = message.member.guild.roles.find("name", "Youngsters");
    member.addRole(memberRole);

    // message.member.guild.createRole({
    //   name: message.member.user.username,
    //   color: 0xFF0000,
    //   permissions: []
    // }).then(function(role){
    //    message.member.addRole(role);
    
    // });

});

bot.on('ready', function(){
  console.log("ready");

});

bot.login(botKey);
