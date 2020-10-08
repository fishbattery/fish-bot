const discord = require('discord.js');
const client = new discord.Client();

client.once('ready', () => {
	console.log('ready!');
});

client.login('NzYzMDAwNzkyNTYyNDAxMzIw.X3xV3A.FmWoZfgbCanyXlqVwjfVlfiml4k');

client.on('message', message => {
    if(message.content === 'ping') {
        message.channel.send('pong!');
    }    
});

client.on('message', message => {
    if(message.content === '&talk') {
        message.channel.send('ok hi you fucker!');
    }
});

client.on('message', message => {
    if(message.content === 'chat revive') {
        message.channel.send('<@&762740598255910914> lets revive the chat');
    }
});

// Set the bot's "Playing: " status (must be in an event!)
client.on("ready", () => {
    client.user.setActivity("With my dick", { type: "PLAYING"})
})