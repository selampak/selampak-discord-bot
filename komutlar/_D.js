const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
  let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("Maalesef bu komutu kullanamazsın gold üye değilsin :(")
  }else{
      if( kullanıcı == "gold"){
var Jimp = require('jimp');
const Discord = require('discord.js');
const GIFEncoder = require('gifencoder');

const options = {
    size: 256,
    frames: 16
}

module.exports.run = async (bot, msg, args) => {msg.channel.send("**Lütfen bekleyiniz. Bu biraz zaman alabilir...**").then(m => m.delete(1000));
  
  var user = msg.mentions.users.first() || msg.author;
      
  function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
  let avatarurl = user.avatarURL;
      if (['jpg', 'jpeg', 'gif', 'png', 'webp'].some(x => args.join(' ').includes(x))) {
        avatarurl = args.join(' ').replace(/gif|webp/g, 'png');
      }

      const marefibase = new Jimp(options.size, options.size);
      const avatar = await Jimp.read(avatarurl);
      const marefitext = await Jimp.read("https://cdn.discordapp.com/emojis/677954243176693776.gif?v=1");
      const marefiarkaplan = await Jimp.read("https://cdn.discordapp.com/attachments/655459488236568597/689158708835385398/red.png");

      avatar.resize(320, 320);
      marefiarkaplan.scaleToFit(marefibase.bitmap.width, marefibase.bitmap.height);
      marefiarkaplan.opacity(0.2);
      marefitext.scaleToFit(280, 60);

      const frames = [];
      const buffers = [];
      const encoder = new GIFEncoder(options.size, options.size);
      const stream = encoder.createReadStream();
      let temp;

      stream.on('data', async buffer => await buffers.push(buffer));
      stream.on('end', async() => {
        return await msg.channel.send({
          files: [{
            name: 'selampak.gif',
            attachment: Buffer.concat(buffers)
          }]
        });
      });

      for (let i = 0; i < options.frames; i++) {
        temp = marefibase.clone();

        if (i === 0) {
          temp.composite(avatar, -16, -16);
        } else {
          temp.composite(avatar, -32 + getRandomInt(-16, 16), -32 + getRandomInt(-16, 16));
        }

        temp.composite(marefiarkaplan, 0, 0);

        if (i === 0) temp.composite(marefitext, -10, 200);
        else temp.composite(marefitext, -12 + getRandomInt(-8, 8), 200 + getRandomInt(-0, 12));

        frames.push(temp.bitmap.data);
        }

      encoder.start();
      encoder.setRepeat(0);
      encoder.setDelay(20);
      for (const frame of frames) {
        encoder.addFrame(frame);
      }
      encoder.finish();
  
  };

    }
      
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: ':D', 
  description: "",
  usage: ''
};