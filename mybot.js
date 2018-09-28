const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("NDk0NjQ3MzUzNjcyODU5NjU5.Do8FhA.LW83neF64K5M32wQhU2KUgq0Td4");