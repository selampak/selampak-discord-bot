const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  msg.channel.sendCode("asciidoc",`  ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ←

--------------------------------------------------Bağış--------------------------------------------------


► Bağış için alttaki İninal barkoduma gönderebilirsiniz


            ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓


                                ╔═════════════════════════════════════╗
                                   ININAL BARKOD: 4000520156696
                                ╚═════════════════════════════════════╝


            ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ 


------------------------------------------------------------------------------------------------------------

→ → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → →`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bagis', 'bagıs'],
  permLevel: 0
};

exports.help = {
  name: 'bağış',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};