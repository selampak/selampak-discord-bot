const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const cha = require('cha');
const db = require('quick.db');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const { promisify } = require('util')
const express = require('express');
const app = express();

//7-24 aktif tutma //
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`Aktiflk benim için bir tutku, yeni bir pinge merhaba!`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://selampak20068.glitch.me/`);
    }, 280000);
//7-24aktif tutma son //

let kufurEngel = JSON.parse(fs.readFileSync("./jsonlar/kufurEngelle.json", "utf8"));


var prefix = ayarlar.prefix;

var prefix = ayarlar.prefix;


const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
         let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});





client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------KOMUTLAR---------------------------------\\

//---------------------------------Rol Kur---------------------------------\\

client.on('message', async message => {
const ms = require('ms');
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let u = message.mentions.users.first() || message.author;
if (command === "rol-kur") {
if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
message.channel.send(`Rol Kurulumu Başlatıldı <:eveeet:690932992687734854> `)
if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.", {

max: 1,
time: 10000,
errors: ['time'],
})

message.guild.createRole({
name: '💎 | Sunucu Sahip',
color: 'ff0000',
permissions: [
"ADMINISTRATOR",
]
})


message.guild.createRole({
name: '🌺 | Genel Sorumlu',
color: '49ff00',
permissions: [
"MANAGE_GUILD",
"MANAGE_ROLES",
"MUTE_MEMBERS",
"DEAFEN_MEMBERS",
"MANAGE_MESSAGES",
"MANAGE_NICKNAMES",
"KICK_MEMBERS"
]
})

message.guild.createRole({
name: '💮 | Yönetici',
color: 'ffb400',
permissions: [
"MANAGE_GUILD",
"MANAGE_ROLES",
"MUTE_MEMBERS",
"DEAFEN_MEMBERS",
"MANAGE_MESSAGES",
"MANAGE_NICKNAMES"
]
})
  
  
message.guild.createRole({
name: '🔨 | Partner Sorumlusu',
color: '#FF4D00'
})

message.guild.createRole({
name: '💸 | Booster',
color: '#FF77FF',
})
  
message.guild.createRole({
name: '🎑 | Developer',
color: '#FFCC00',
})
  
message.guild.createRole({
name: '🌻 | Family',
color: '#FF8C69',
})
  
message.guild.createRole({
name: '⚜ | Partner',
color: '#002FA7'
})
    
message.guild.createRole({
name: '🌌 | Kız',
color: 'd300ff',
})

message.guild.createRole({
name: '🌃 | Erkek',
color: '#0000FF',
})

message.guild.createRole({
name: '🛡 | Discord Bot',
color: '0006ff',
})

message.channel.send(" Gerekli Roller Açıldı <a:22:688458642437177392> ")


}
});
//---------------------------------Rol Kur Son---------------------------------\\

//---------------------------------Sunucu kur---------------------------------\\
client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucu-kur") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
    message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then(collected => {
        message.guild.createChannel("|▬▬|ÖNEMLİ KANALLAR|▬▬|", "category", [
          {
            id: message.guild.id,
            deny: ["SEND_MESSAGES"]
          }
        ]);

        message.guild
          .createChannel("📃║Kurallar", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|"
              )
            )
          );
        message.guild
          .createChannel("🚪║Gelen-Giden", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|"
              )
            )
          );
        message.guild
          .createChannel("✔️║Sayaç", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|"
              )
            )
          );
        message.guild
          .createChannel("💾║Log Kanalı", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|"
              )
            )
          );
        message.guild
          .createChannel("📢║Duyuru-Odası", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|"
              )
            )
          );
      })
      .then(collected => {
        message.guild.createChannel("|▬▬|GENEL KANALLAR|▬▬|", "category", [
          {
            id: message.guild.id
          }
        ]);

        message.guild
          .createChannel(`💡║Sikayet ve Öneri`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`📷║Galeri`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🤖║Bot Komut`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`💬║Sohbet`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|"
              )
            )
          );

        message.guild
          .createChannel(`🏆Kurucu Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|SES KANALLARI|▬▬|"
              )
            )
          )
          .then(c => {
            let role = message.guild.roles.find("name", "@everyone");
            let role2 = message.guild.roles.find("name", "@everyone");

            c.overwritePermissions(role, {
              CONNECT: false
            });
            c.overwritePermissions(role2, {
              CONNECT: true
            });
          });

        message.guild.createChannel("|▬▬|SES KANALLARI|▬▬|", "category", [
          {
            id: message.guild.id
          }
        ]);

        message.guild
          .createChannel(`🏆║Yönetici`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|SES KANALLARI|▬▬|"
              )
            )
          )
          .then(c => {
            let role = message.guild.roles.find("name", "@everyone");
            let role2 = message.guild.roles.find("name", "Kurucu");
            let role3 = message.guild.roles.find("name", "Yönetici");
            c.overwritePermissions(role, {
              CONNECT: false
            });
            c.overwritePermissions(role2, {
              CONNECT: true
            });
            c.overwritePermissions(role3, {
              CONNECT: true
            });
          });

        message.guild
          .createChannel(`💼║Toplantı`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|SES KANALLARI|▬▬|"
              )
            )
          )
          .then(c => {
            let role = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
              CONNECT: true
            });
          });

        message.guild.createChannel("|▬▬|SOHBET ODALARI|▬▬|", "category", [
          {
            id: message.guild.id
          }
        ]);

        message.guild
          .createChannel(`🎤║Sohbet`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|SOHBET ODALARI|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎤║Sohbet 2`, "voice")
          .then(channel =>
            channel.setParent(
              message.gukoild.channels.find(
                channel => channel.name === "|▬▬|SOHBET ODALARI|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎤║Sohbet 3`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|SOHBET ODALARI|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎤║Sohbet 4`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|SOHBET ODALARI|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎧║Müzik`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|SOHBET ODALARI|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎧║Müzik 2`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|SOHBET ODALARI|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎧║Müzik 3`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|SOHBET ODALARI|▬▬|"
              )
            )
          );

        message.guild.createRole({
          name: "「🏆」Kurucu",
          color: "020201",
          permissions: ["ADMINISTRATOR"]
        });

        message.guild.createRole({
          name: "「📍」Yönetici",
          color: "ff4500",
          permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
          ]
        });

        message.guild.createRole({
          name: "「🔱」Moderatör",
          color: "4aff5c",
          permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
          ]
        });

        message.guild.createRole({
          name: "「☄️」Dost",
          color: "00ffff"
        });

        message.guild.createRole({
          name: "「🗡️」Üye",
          color: "30a5ec"
        });

        message.guild.createRole({
          name: "「🤖」Bot",
          color: "e424b6"
        });

        message.channel.send("Gerekli Odalar Kuruldu! <a:yees:690963148861341787> ");
      });
  }
});
//---------------------------------Sunucu Kur son---------------------------------\\

//---------------------------------Sunucu kur 2 ---------------------------------\\

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucu-kur-2") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
    message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('|▬▬|ÖNEMLİ KANALLAR|▬▬|', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])



        
 message.guild.createChannel('「📃」kurallar', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
 message.guild.createChannel('「🚪」gelen-giden', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
       message.guild.createChannel('「✅」sayaç', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
             message.guild.createChannel('「💾」log-kanalı', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
            message.guild.createChannel('「📢」duyuru-odası', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));

       }) 
       .then((collected) => {
        message.guild.createChannel('|▬▬|GENEL KANALLAR|▬▬|', 'category', [{
       id: message.guild.id,
     }]);
             
      message.guild.createChannel(`「💡」şikayet-ve-öneri`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「👥」pre-arama-odası`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「📷」görsel-içerik`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「🤖」bot-komutları`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「💬」sohbet`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));

      message.guild.createChannel(`🏆》Kurucu Odası`, "voice")
      .then(channel =>
        channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
      .then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        let role2 = message.guild.roles.find("name", "Kurucu");
        
        c.overwritePermissions(role, {
            CONNECT: false,
        });
        c.overwritePermissions(role2, {
            CONNECT: true,
            
        });
    })

    message.guild.createChannel('|▬▬|SES KANALLARI|▬▬|', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🏆》Yönetici Odası`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "Kurucu");
      let role3 = message.guild.roles.find("name", "Yönetici");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
  })

  message.guild.createChannel(`💬》Sohbet Odası`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})

message.guild.createChannel('|▬▬|OYUN ODALARI|▬▬|', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🎮》LOL`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》ZULA`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》COUNTER STRİKE`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》PUBG`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
  message.guild.createChannel(`🎮》FORTNİTE`, 'voice')
  .then(channel =>
   channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
   message.guild.createChannel(`🎮》MİNECRAFT`, 'voice')
   .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
    message.guild.createChannel(`🎮》ROBLOX`, 'voice')
    .then(channel =>
     channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
     message.guild.createChannel(`🎮》WOLFTEAM`, 'voice')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))



      message.guild.createRole({
        name: 'Kurucu',
        color: 'RED',
        permissions: [
            "ADMINISTRATOR",
    ]
      })

      
      message.guild.createRole({
        name: 'Yönetici',
        color: 'BLUE',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })

      message.guild.createRole({
        name: 'Moderatör',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.createRole({
        name: 'V.I.P',
        color: '00ffff',
      })

      message.guild.createRole({
        name: 'Üye',
        color: 'WHITE',
      })

      message.guild.createRole({
        name: 'Bot',
        color: 'ORANGE',
      })

       message.channel.send("Gerekli Odalar Kuruldu! <a:22:688458642437177392> ")
     
            })   
    
}
});
//---------------------------------Sunucu Kur 2 Son---------------------------------\\

//---------------------------------Güvenlik---------------------------------\\

client.on('guildMemberAdd',async member => {
  let user = client.users.get(member.id);
  let kanal = client.channels.get(db.fetch(`guvenlik${member.guild.id}`)) 
       const Canvas = require('canvas')
       const canvas = Canvas.createCanvas(360,100);
       const ctx = canvas.getContext('2d');
  
  const resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627428441695977497/gvnlk-spheli.png')
    const resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627427731407241226/gvnlk-gvnli.png')
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment(kurulus).format('dddd');  
    var kontrol;
      if (kurulus > 2629800000) kontrol = resim2
    if (kurulus < 2629800000) kontrol = resim1

       const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627425996454232064/gvnlk-arka.png');
       ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
  ctx.beginPath();
    ctx.lineWidth = 4;
  ctx.fill()
    ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
    ctx.clip();
  ctx.drawImage(avatar, 143,10, 73, 72  );

   if (!kanal) return
       const attachment = new Discord.Attachment(canvas.toBuffer(), 'selampak-güvenlik.png');
    kanal.send(attachment)
});
//---------------------------------Güvenlik Son ---------------------------------\\

//---------------------------------Güvenlik 2---------------------------------\\


client.on('guildMemberAdd',async member => {
  let user = client.users.get(member.id);
   let cfxt = await db.fetch(`val${member.guild.id}`)
   let chan = member.guild.channels.find('id', cfxt)
       
var cfxguvenlik = {

"supheli": "https://cdn.discordapp.com/attachments/636646818372911153/639166222100856902/Logopit_1572459491881.png",
"guvenli": "https://cdn.discordapp.com/attachments/636646818372911153/639163940860854285/Logopit_1572458932036.png",
"arkaplan": "https://cdn.glitch.com/c12498a8-0e49-4e92-8c5c-93420c61a842%2Fgv.png?v=1574962652357"

}

       let Canvas = require('canvas')
       let canvas = Canvas.createCanvas(360,100);
       let cfx = canvas.getContext('2d');

        let zaman = new Date().getTime() - user.createdAt.getTime();
        let gün = moment.utc(moment.duration(zaman, "seconds").asMilliseconds()).format("HH:mm")   
      
      let cfxkoruma = [];

      if (zaman > 2629800000) cfxkoruma = await Canvas.loadImage(cfxguvenlik.guvenli)
      if (zaman < 2629800000) cfxkoruma = await Canvas.loadImage(cfxguvenlik.supheli)
      let cfxarkaplan = await Canvas.loadImage(cfxguvenlik.arkaplan);
      let avatar = await Canvas.loadImage(member.user.displayAvatarURL);
 
  
  
  cfx.drawImage(cfxarkaplan, 0, 0, canvas.width, canvas.height);
  cfx.drawImage(cfxkoruma,0,10,143, 125)
  cfx.beginPath();
  cfx.lineWidth = 4;
  cfx.fill()
  cfx.lineWidth = 4;
  cfx.arc(180, 46, 36, 0, 2 * Math.PI);
  cfx.clip();
  cfx.drawImage(avatar, 143,10, 73, 72  );

   
       const attachment = new Discord.Attachment(canvas.toBuffer(), 'selampak-güvenlik.png');
    chan.send(attachment)
});
//---------------------------------Güvenlik 2 Son---------------------------------\\

//---------------------------------Sayaç---------------------------------\\


client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./jsonlar/sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Tebrikler, başarılı bir şekilde ${sayac[message.guild.id].sayi} kullanıcıya ulaştık!`)
                .setColor("0x808080")
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./jsonlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})
client.on("guildMemberRemove", async member => {
        let sayac = JSON.parse(fs.readFileSync("./jsonlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./jsonlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('SelamPak')
    .setDescription(`SelamPak`)
 .setColor("RED")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`<a:duyuruknk:690935464726626335><a:infinity2:684791301954469937> ${member.user.tag},<a:cikis:679055411592167453> aramızdan ayrıldı, \**${sayac[member.guild.id].sayi}\** kişi olmamıza \**${sayac[member.guild.id].sayi - member.guild.memberCount}\** kişi kaldı! <:hayr:690932993342308452> `);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});
client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/jsonlar.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/jsonlar.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('SelamPak')
    .setDescription(`SelamPak`)
 .setColor("GREEN")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`<a:duyuruknk:690935464726626335><a:infinity2:684791301954469937> ${member.user.tag},<a:giris:679055323364982846> aramıza katıldı \**${sayac[member.guild.id].sayi}\** kişi olmamıza \**${sayac[member.guild.id].sayi - member.guild.memberCount}\** kişi kaldı! <:eveeet:690932992687734854> ` );
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});

//---------------------------------Sayaç Son---------------------------------\\

//---------------------------------Server Panel---------------------------------\\

client.on("guildMemberAdd", async member => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`);
  if (sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`);
    let toplamuye = member.guild.channels.find(x =>
      x.name.startsWith("Toplam Üye •")
    );
    let toplamaktif = member.guild.channels.find(x =>
      x.name.startsWith("Aktif Üye •")
    );
    let botlar = member.guild.channels.find(x => x.name.startsWith("Botlar •"));
    let rekoraktif = member.guild.channels.find(x =>
      x.name.startsWith("Rekor Aktiflik •")
    );

    if (
      member.guild.members.filter(off => off.presence.status !== "offline")
        .size > rekoronline
    ) {
      db.set(
        `panelrekor_${member.guild.id}`,
        member.guild.members.filter(off => off.presence.status !== "offline")
          .size
      );
    }
    try {
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`);
      toplamaktif.setName(
        `Aktif Üye • ${
          member.guild.members.filter(off => off.presence.status !== "offline")
            .size
        }`
      );
      botlar.setName(
        `Botlar • ${member.guild.members.filter(m => m.user.bot).size}`
      );
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`);
    } catch (e) {}
  }
});



client.on("guildMemberRemove", async member => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`);
  if (sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`);
    let toplamuye = member.guild.channels.find(x =>
      x.name.startsWith("Toplam Üye •")
    );
    let toplamaktif = member.guild.channels.find(x =>
      x.name.startsWith("Aktif Üye •")
    );
    let botlar = member.guild.channels.find(x => x.name.startsWith("Botlar •"));
    let rekoraktif = member.guild.channels.find(x =>
      x.name.startsWith("Rekor Aktiflik •")
    );

    if (
      member.guild.members.filter(off => off.presence.status !== "offline")
        .size > rekoronline
    ) {
      db.set(
        `panelrekor_${member.guild.id}`,
        member.guild.members.filter(off => off.presence.status !== "offline")
          .size
      );
    }
    try {
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`);
      toplamaktif.setName(
        `Aktif Üye • ${
          member.guild.members.filter(off => off.presence.status !== "offline")
            .size
        }`
      );
      botlar.setName(
        `Botlar • ${member.guild.members.filter(m => m.user.bot).size}`
      );
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`);
    } catch (e) {}
  }
});
//---------------------------------Server Panel Son---------------------------------\\


//---------------------------------Geçici Oda sistemi---------------------------------\\

client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith('➕│2 Kişilik Oda')) {
        newMember.guild.createChannel(`║👤 ${newMember.displayName}`, {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(2)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('║👤 ')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            }
            else { // change name
                let matchMember = oldMember.voiceChannel.members.find(x => `║👤 ${x.displayName}` == oldMember.voiceChannel.name);
                if (matchMember == null) {
                    oldMember.voiceChannel.setName(`║👤 ${oldMember.voiceChannel.members.random().displayName}`)
                }
            }
        }
    }
});
//----------------------------------GEÇİCİ KANAL----------------------------// 
//----------------------------------GEÇİCİ KANAL----------------------------// 
client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith('➕│3 Kişilik Oda')) {
        newMember.guild.createChannel(`║👤 ${newMember.displayName}`, {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(3)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('║👤 ')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            }
            else { // change name
                let matchMember = oldMember.voiceChannel.members.find(x => `║👤 ${x.displayName}` == oldMember.voiceChannel.name);
                if (matchMember == null) {
                    oldMember.voiceChannel.setName(`║👤 ${oldMember.voiceChannel.members.random().displayName}`)
                }
            }
        }
    }
});
//----------------------------------GEÇİCİ KANAL----------------------------// 
//----------------------------------GEÇİCİ KANAL----------------------------// 
client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith('➕│4 Kişilik Oda')) {
        newMember.guild.createChannel(`║👤 ${newMember.displayName}`, {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(4)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('║👤 ')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            }
            else { // change name
                let matchMember = oldMember.voiceChannel.members.find(x => `║👤 ${x.displayName}` == oldMember.voiceChannel.name);
                if (matchMember == null) {
                    oldMember.voiceChannel.setName(`║👤 ${oldMember.voiceChannel.members.random().displayName}`)
                }
            }
        }
    }
});
//----------------------------------GEÇİCİ KANAL----------------------------// 
//----------------------------------GEÇİCİ KANAL----------------------------// 
client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith('➕│5 Kişilik Oda')) {
        newMember.guild.createChannel(`║👤 ${newMember.displayName}`, {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(5)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('║👤 ')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            }
            else { // change name
                let matchMember = oldMember.voiceChannel.members.find(x => `║👤 ${x.displayName}` == oldMember.voiceChannel.name);
                if (matchMember == null) {
                    oldMember.voiceChannel.setName(`║👤 ${oldMember.voiceChannel.members.random().displayName}`)
                }
            }
        }
    }
});
//----------------------------------GEÇİCİ KANAL----------------------------// 
//----------------------------------Özel oda sistemi----------------------------// 
client.on('message', async message => {
  const ms = require('ms');
  const prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "özel-oda-sistemi") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
    message.channel.send(`Özel Oda Sisteminin Kurulmasını İstiyorsanız **evet** Yazınız.`)
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
     })
    .then((collected) => {

message.guild.createChannel('【🔐】2 Kişilik Odalar【🔐】', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`➕│2 Kişilik Oda`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【🔐】2 Kişilik Odalar【🔐】")))

message.guild.createChannel('【🔐】3 Kişilik Odalar【🔐】', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`➕│3 Kişilik Oda`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【🔐】3 Kişilik Odalar【🔐】")))

message.guild.createChannel('【🔐】4 Kişilik Odalar【🔐】', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`➕│4 Kişilik Oda`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【🔐】4 Kişilik Odalar【🔐】")))

message.guild.createChannel('【🔐】5 Kişilik Odalar【🔐】', 'category', [{
  id: message.guild.id,
}]);
message.guild.createChannel(`➕│5 Kişilik Oda`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【🔐】5 Kişilik Odalar【🔐】")))

       message.channel.send("Gelişmiş Özel Oda Sistemi Aktif!")
     
            })   
      
}
});
//---------------------------------Geçici Oda sistemi son---------------------------------\\

//---------------------------------Reklam Engel---------------------------------\\


client.on("message", async message => {
  let kişiuyari = await db.fetch(  `uyarisayisi_${message.author.id}${message.guild.id}`);
  let sınır = await db.fetch(`reklamsınır_${message.guild.id}`);
  let reklambanayar = await db.fetch(`reklambanayar_${message.guild.id}`);
  let kullanici = message.member;
  const reklambankelimeler = [
    "discord.app",
    "discord.gg",
    "invite",
    "discordapp",
    "discordgg"
  ];
  if (reklambanayar == "kapali") return;
  if (reklambanayar == "acik") {
    if (
      reklambankelimeler.some(word =>
        message.content.toLowerCase().includes(word)
      )
    ) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();
        db.add(`uyarisayisi_${message.author.id}${message.guild.id}`, 1);
        let reklambanuyari = new Discord.RichEmbed()
          .addField(
            `Reklam Ban Sistemi Tarafından Discord Reklamı Engellendi :thumbsup:`,
            `Sunucu Reklamını Atan Kişi: **${message.author.tag}**\nUyarı Sayısı: **${kişiuyari}/${sınır}**`
          )
          .setTimestamp()
          .setFooter(`${client.user.username}`, client.user.avatarURL);
        message.channel
          .send(reklambanuyari)
          .then(message => message.delete(10000));
        if (kişiuyari == sınır) {
          message.delete();
          kullanici.ban({
            reason: `${client.user.username} Reklam Oto Ban Sistemi`
          });
          db.set(`uyarisayisi_${message.author.id}${message.guild.id}`, 1);
          let yeteramkreklamban = new Discord.RichEmbed()
            .addField(
              `Reklam Ban Sistemi Reklam Yapan Kişiyi Banladı :white_check_mark:`,
              `Reklamdan Banlanan Kişi: **${kullanici}**`
            )
            .setTimestamp(new Date())
            .setFooter(
              `${client.user.username} Blocker`,
              client.user.avatarURL
            );
          message.channel.send(yeteramkreklamban);
        }
      }
    }
  }
});

//---------------------------------Reklam Engel Son---------------------------------\\

//---------------------------------Mod Log ---------------------------------\\

const botadi = "Selampak"

client.on('messageDelete', message => {
  let modlogs = db.get(`modlogkanaly_${message.guild.id}`)
  const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (message.content.length > 1024) {
      modlogkanal.send({embed: {
    color: 3447003,
    author: {
      name: `${message.author.tag} tarafından gönderilen bir mesaj silindi`,
      icon_url: message.author.DisplayAvatarURL
    },
    fields: [{
        name: `Silinen mesaj 1024 karakterden fazla mesajı gösteremem`,
        value: `\`\`\`Bilinmiyor...\`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.DisplayAvatarURL,
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
    } else {
      modlogkanal.send({embed: {
    color: 3447003,
    author: {
      name: `${message.author.tag} kullanıcısının mesajı silindi\n`,
      icon_url: message.author.DisplayAvatarURL
    },
    fields: [{
        name: `Silinen mesaj:`,
        value: `\`\`\` ${message.content} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.DisplayAvatarURL,
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
    }
  }
})


client.on('guildBanAdd', async (guild, user) => {
  let modlogs = db.get(`modlogkanaly_${guild.id}`)
  const modlogkanal = guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new Discord.RichEmbed()
    .setColor("3447003")
    .setAuthor("Bir kişi sunucudan yasaklandı")
    .setThumbnail(user.avatarURL||user.defaultAvatarURL)
    .addField(`Yasaklanan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`${botadi} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});

client.on('guildBanRemove', async (guild, user) => {
  let modlogs = db.get(`modlogkanaly_${guild.id}`)
  const modlogkanal = guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new Discord.RichEmbed()
    .setColor("3447003")
    .setAuthor("Bir kişinin yasağı kaldırıldı")
    .setThumbnail(user.avatarURL||user.defaultAvatarURL)
    .addField(`Yasağı kaldırılan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`${botadi} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});

client.on('channelCreate', async channel => {
  let modlogs = db.get(`modlogkanaly_${channel.guild.id}`)
  const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (channel.type === "text") {
      modlogkanal.send({embed: {
      color: 3447003,
      fields: [{
          name: `Bir Kanal Oluşturuldu. \nOluşturulan Kanalin İsmi:`,
          value: `\`\`\` ${channel.name} \`\`\``
        },
        {
          name: `Oluşturulan Kanalin Türü`,
          value: `\`\`\` Metin Kanalı \`\`\``
        }
      ],
      timestamp: new Date(),
      footer: {
        text: `${botadi} | Mod-Log Sistemi`
      }
     }});
    } else {
      if (channel.type === "voice") {
       modlogkanal.send({embed: {
    color: 3447003,
    fields: [{
        name: `Bir Kanal Oluşturuldu. \nOluşturulan Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Oluşturulan Kanalin Türü`,
        value: `\`\`\` Ses Kanalı \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
}); 
      }
    }
  }
});

client.on('channelDelete', async channel => {
  let modlogs = db.get(`modlogkanaly_${channel.guild.id}`)
  const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (channel.type === "text") {
      modlogkanal.send({embed: {
      color: 3447003,
    fields: [{
        name: `Bir Kanal Silindi. \nSilinen Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Silinen Kanalin Türü`,
        value: `\`\`\` Ses Kanalı \`\`\``
      }
      ],
      timestamp: new Date(),
      footer: {
        text: `${botadi} | Mod-Log Sistemi`
      }
     }});
    } else {
      if (channel.type === "voice") {
       modlogkanal.send({embed: {
    color: 3447003,
    fields: [{
        name: `Bir Kanal Silindi. \nSilinen Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Silinen Kanalin Türü`,
        value: `\`\`\` Ses Kanalı \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
}); 
      }
    }
  }
});

client.on('roleDelete', async role => {
  let modlogs = db.get(`modlogkanaly_${role.guild.id}`)
  const modlogkanal = role.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send({embed: {
    color: 3447003,
    fields: [{
        name: `Bir Rol Silindi. \nSilinen Rolun İsmi:`,
        value: `\`\`\` ${role.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
  }
});

client.on('emojiDelete', async emoji => {
  let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`)
  const modlogkanal = emoji.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send({embed: {
    color: 3447003,
    fields: [{
        name: `Bir Emoji Silindi. \nSilinen Emojinin İsmi:`,
        value: `\`\`\` ${emoji.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
  
  }
});


client.on('roleCreate', async role => {
  let modlogs = db.get(`modlogkanaly_${role.guild.id}`)
  const modlogkanal = role.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
     modlogkanal.send({embed: {
    color: 3447003,
    fields: [{
        name: `Yeni Bir Rol Oluşturuldu. \nOluşturulan Rolun İsmi:`,
        value: `\`\`\` ${role.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
  }
});


client.on('messageUpdate', async (oldMessage, newMessage) => {
  let modlogs = db.get(`modlogkanaly_${oldMessage.guild.id}`)
  const modlogkanal = oldMessage.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (oldMessage.author.bot) {
        return false;
    }

    if (!oldMessage.guild) {
        return false;
    }

    if (oldMessage.content == newMessage.content) {
        return false;
    }
    modlogkanal.send({embed: {
      color: 3447003,
      author: {
      name: `${oldMessage.author.tag} mesajını düzenledi:\n`,
      icon_url: oldMessage.author.DisplayAvatarURL
      },
      fields: [{
        name: `Eski mesaj:`,
        value: `\`\`\` ${oldMessage.content} \`\`\``
      },
      {
        name: `Yeni Mesaj:`,
        value: `\`\`\` ${newMessage.content} \`\`\``
      }
      ],
      timestamp: new Date(),
      footer: {
      icon_url: oldMessage.author.DisplayAvatarURL,
      text: `${botadi} | Mod-Log Sistemi`
      }
    }
    });
  }
});


client.on('emojiCreate', async emoji => {
  let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`)
  const modlogkanal = emoji.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send({embed: {
    color: 3447003,
    fields: [{
        name: `Bir emoji eklendi. \nEklenen Emojinin İsmi:`,
        value: `\`\`\` ${emoji.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    } 
   } 
});
  }
});
//---------------------------------Mod Log Son ---------------------------------\\

//---------------------------------Sa As  ---------------------------------\\
client.on("message", async msg => {


  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm') {
          try {

                  return msg.reply('Aleyküm Selam, Hoşgeldin.')
      
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
    
    }
    if (!i) return;

    });
//---------------------------------Sa As SON---------------------------------\\

//---------------------------------OtoRol ---------------------------------\\
client.on("guildMemberAdd", async member  => {
  
  const botadı = 'SelamPak'
  
        let sayac = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let otorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let arole = otorole[member.guild.id].sayi
  let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  let üyesayı = member.user.size
  
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`<a:elmas:679038520148492319> <:eveeet:690932992687734854>  Hoşgeldin **${member.user.tag}** Seninle Birlikte ${member.guild.memberCount} kişiyiz! Rolün Başarıyla Verildi.<a:22:688458642437177392>`);
  

});

client.on("guildMemberAdd", async (member) => {
      let autorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let role = autorole[member.guild.id].sayi

      member.addRole(role)
if(!member.addRole(role)) member.addRole(role);

});
//---------------------------------OtoRol Son ---------------------------------\\


////////////////////

var data = {};
async function copyChannel (channel) {
    data[channel.guild.ownerID].channels.push(channel);
}
async function copyRole (role) {
    data[role.guild.ownerID].roles.push(role);
}
async function paste (guild, copyData) {
    copyData.channels.forEach(async function (channel) {
        guild.createChannel(channel.name, channel.type, channel.permissionOverwrites, "- Sweetie paste").then(channel2 => {
            channel2.setPosition(channel.position);
        });
    });
    copyData.roles.forEach(async function (role) {
        guild.createRole({
            name: role.name,
            color: role.hexColor
        }).then(async function (role2) {
            role2.setPosition(role.position);
        });
    });
}
async function copyAll (guild) {
    if (!data[guild.ownerID]) {
        data[guild.ownerID] = {
            roles: [],
            channels: [],
        };
    }
    guild.channels.sort(function (a,b) { return a.position - b.position; }).forEach(async function (channel) {
        copyChannel(channel);
    });
    guild.roles.sort(function (a,b) { return a.position - b.position; }).forEach(async function (role) {
        copyRole(role);
    });
}
client.on("message", async function (msg) {
    if (!prefix || typeof prefix !== "string") {
        var prefix = ayarlar.prefix;
    }
    if (!msg.author.bot) {
        if (msg.content.startsWith(prefix)) {
            var args = msg.content.slice(prefix.length).split(" ");
            var command = args[0];
            switch (command) {
                case "sunucu-kopyala":
                    if (!msg.guild.ownerID == msg.author.id) return msg.reply("Sunucunun Sahibi Olmalısınız.");
                    copyAll(msg.guild);
                    msg.reply("Başarıyla Kopyalandı.");
                break;
                case "yedek-yapıştır":
                    if (!msg.guild.ownerID == msg.author.id) return msg.reply("Sunucunun Sahibi Olmalısınız.");
                    if (!data[msg.guild.ownerID]) return msg.reply("Hiç Bir Şey Kopyalanmamış");
                    paste(msg.guild, data[msg.guild.ownerID]);
                break;
            }
        }
    }
})

////////////////

client.on('message', msg => {

if(client.ping > 2500) {

            let selampakbölge = ['singapore', 'eu-central', 'india', 'us-central', 'london',
            'eu-west', 'amsterdam', 'brazil', 'us-west', 'hongkong', 
            'us-south', 'southafrica', 'us-east', 'sydney', 'frankfurt',
            'russia']
           let yenibölge = selampakbölge[Math.floor(Math.random() * selampakbölge.length)]
           let sChannel = msg.guild.channels.find(c => c.name === "ddos-system")

           sChannel.send(`Sunucu'ya Saldırı Alğılandı \nSunucu Bölgesini Değiştirdim \n __**${yenibölge}**__  __**Sunucu Pingimiz**__ :`+ client.ping)
           msg.guild.setRegion(yenibölge)
           .then(g => console.log(" bölge:" + g.region))
           .then(g => msg.channel.send("bölge **"+ g.region  + " olarak değişti")) 
           .catch(console.error);
}});

//////////

client.on('guildMemberAdd', member => {
 let guvenlik= db.fetch(`botkoruma_${member.guild.id}`)
    if (!guvenlik) return;
    if(member.user.bot !==true){
    } else {
   member.kick(member) 
  }  
  });

 
///////

client.on('message', async message => {
let aktif = await db.fetch(`reklamEngelFrenzy_${message.channel.id}`)
if (!aktif) return 
let reklamlar = ["discord.app", "discord.gg" ,"discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az", ".cf", ".me", ".in"]
let kelimeler = message.content.slice(" ").split(/ +/g)
if (reklamlar.some(word => message.content.toLowerCase().includes(word))) {
if (message.member.hasPermission("BAN_MEMBERS")) return;
message.delete()
message.reply('Reklamları engelliyorum!').then(msg => msg.delete(7000)) 
}
});
//Frenzy Code
client.on("messageUpdate", async (oldMsg, newMsg) => {
let aktif = await db.fetch(`reklamEngelFrenzy_${oldMsg.channel.id}`)
if(!aktif) return
let reklamlar = ["discord.app", "discord.gg","discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az", ".cf", ".me", ".in"]
let kelimeler = newMsg.content.slice(" ").split(/ +/g)
if (reklamlar.some(word => newMsg.content.toLowerCase().includes(word))) {
if (newMsg.member.hasPermission("BAN_MEMBERS")) return;
newMsg.delete()
oldMsg.reply('Reklamları engelliyorum!').then(msg => msg.delete(7000)) 
}
});

//////////////////

client.on('message', message => {
    var antiraid = db.fetch(`sunucular.${message.guild.id}.spamkoruma`)
    if(!antiraid) return;
    if(message.author.bot) return;
    message.guild.fetchMember(message.author).then(member => {
    if(member.hasPermission('BAN_MEMBERS')) return;
    var b = []
    var aut = []
    setTimeout(() => {
    message.channel.fetchMessages({ limit: 10 }).then(m => {
    m.forEach(a => {
    if(m.filter(v => v.content === a.content).size > m.size / 2) {
    message.guild.fetchMember(m.author).then(member2 => {
    if(member2.hasPermission('BAN_MEMBERS')) return;
    b.push(a)
    aut.push(a.author)
    })}})
    if(!b.includes(":warning: | `Self` Botlar Susturulacak.")) { işlem() }
    else {}

    function işlem() {

    if(b.length > 5) {
      message.channel.send(':warning: | `Self` Botlar Susturulacak.')
      aut.forEach(a => {
        message.channel.overwritePermissions(a, {
          "SEND_MESSAGES": false
        })
      })
      message.channel.send( ' | `Self` botlar susturuldu.')
    } else return;
    }
    })})})})

//

client.on('guildDelete', guild => {

let rrrsembed = new Discord.RichEmbed()

.setColor("RED")
.setTitle(" Bot Kickledi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.get('680755570361368606').send(rrrsembed);
  
});


client.on('guildCreate', guild => {

let rrrsembed = new Discord.RichEmbed()

.setColor("GREEN")
.setTitle(" Bot Eklendi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.get('680755570361368606').send(rrrsembed);
  
});

//// 

client.on("guildCreate", guild => {
    const eklendim = new Discord.RichEmbed()
        .setColor('GREEN')
        .setTitle("Botunuzun adı Sunucuzuna Eklediğiniz İçin Teşekkür Ederim")
        .addField("Ana Bilgilendirme:", `"*yardım" ile yardım komutlarına ulaşabilir, "*admin" ile yetkili komutlarına ulaşabilirsiniz.`)
        .addField("Aynı zamanda başka özelliklerim:", `Müzik, koruma, eğlence, kullanıcı, genel, yetkili ve daha için SelamPak.`)
        .setFooter(`SelamPak`)
        .setTimestamp()
    guild.owner.send(eklendim)
    const ekler = new Discord.RichEmbed()
        .setColor('GREEN')
        .setTitle("Discord sunucumuza gelerek hem yardım alabilir, hem Botunuzun Adı daha iyi öğrenmiş olur, hemde kendi botunuzu oluşturup yardım alabilirsiniz.")
        .setDescription(`Discord: discord sunucunuz | Sunucuya geldiğinizde botun kurucuları ile konuşabilir, bazı yardımları ise yetkililerden alabilirsiniz.`)
        .addField("Botun kurucularını öğrenmek için komutlar:", `*yapımcım`)
        .setTimestamp()
    guild.owner.send(ekler)
});

////////

client.on('guildMemberAdd', async member => {
  let member2 = member.user
    let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2   
var cfxzaman = [];
if(zaman < 2629800000) {
  cfxzaman = 'Bu hesap 30 Günden Önce Açılmamış <:hayr:690932993342308452> '
} else {
  cfxzaman = 'Bu hesap 30 Günden Önce Açılmış  <:eveeet:690932992687734854>  '
}

let zaman1 = new Date().getTime() - user.createdAt.getTime()
const gecen = moment.duration(zaman1).format(`DD ** [Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye] **`)
 
  let dbayarfalanfilan = await db.fetch(`cfxdbayar${member.guild.id}`)
  let message =  member.guild.channels.find(x => x.id === dbayarfalanfilan)

  message.send(`Hoşgeldin ${member} Seninle Beraber ${message.guild.memberCount} Kişiyiz!   ${cfxzaman}    `)

})


//---------------------------------Gold üye ---------------------------------\\
client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 86400000
let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
let i = db.fetch(`gold_${msg.author.id}`)
          if (i == 'gold') {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`goldzzz_${msg.author.id}`, Date.now());

  var embed = new Discord.RichEmbed()
  .setThumbnail(`https://cdn.discordapp.com/emojis/679038564994121744.gif?v=1`)
  .setDescription(`▬▬▬▬▬▬▬▬▬▬▬▬๑۩۞۩๑▬▬▬▬▬▬▬▬▬▬▬▬\n <a:ejder:692005970662129736> **Seni Burada Görmek Güzel <@${msg.author.id}>** <a:ejder:692005970662129736>\n <a:elmasm:691962707464814662>__İşte Bir Gold Üye__<a:elmasm:691962707464814662> \n <a:kral:692732826499678209>\`\`Unutma\`\`<@${msg.author.id}> \`\`Ne Olduğun Değil Ne Olacağın Önemlidir.!\`\`<a:kral:692732826499678209> \n ▬▬▬▬▬▬▬▬▬▬▬▬๑۩۞۩๑▬▬▬▬▬▬▬▬▬▬▬▬`)
  .setColor("black")
  .setFooter(`${client.user.username} - Tüm hakları saklıdır.`, client.user.avatarURL)
   msg.channel.send(embed)
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});
//---------------------------------Gold Üye Son ---------------------------------\\

client.on('ready', ()=>{
client.channels.get('682244775939670045').join()
})
