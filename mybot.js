const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

const prefix = "!";

client.on("message", (message) => {
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  if (message.content.toUpperCase().startsWith(prefix + "PING")) {
    message.channel.send("pong!");
  } else
  if (message.content.toUpperCase().startsWith(prefix + "FOO")){
    message.channel.send("bar");
  }
});

client.login("NDk0NjQ3MzUzNjcyODU5NjU5.Do8FhA.LW83neF64K5M32wQhU2KUgq0Td4");