const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
});

const prefix = config.prefix;

client.on("message", (message) => {
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase()
  
  switch (command){
    case 'ping' :
      message.channel.send("pong");
      break;
      
    case 'foo' :
      message.channel.send("bar");
      break;
      
    case 'asl' :
      let [age, sex, location] = args;
      
      message.reply(`Hello ${message.author.username}, you are a ${age} year old ${sex}, from ${location}`);
      break;
      
      case 'say' :
        let text = args.slice(1).join(" ");
        message.delete();
        message.channel.send(text);
        break;
  }
});

client.login(config.token);