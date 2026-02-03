console.log("TOKEN CARGADO:", process.env.TOKEN?.length);
const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Events,
  ChannelType,
  PermissionsBitField,
  StringSelectMenuBuilder
} = require("discord.js");
require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => res.send("ok"));
app.listen(PORT, () => console.log("Web up"));

// ======== CLIENTE ÚNICO ========
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

client.once("ready", () => {
  console.log(`Conectado como ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === "!rules") {

    // EMBED 1 · BANNER
    const bannerEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setImage("https://media.discordapp.net/attachments/1282931466640167043/1444154250912600174/MOSHED-2025-11-28-21-33-5.gif?ex=698358b4&is=69820734&hm=f9c1ba339fecd602ef7322f8b2254abc488f0e4c49b9be5743067dbf84180421&=");

    // EMBED 2 · RULES
    const rulesEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setDescription(`
**───<a:Crossblin:1468301257864380562>ʀᴜʟᴇꜱ───**

<a:Arrowblack:1468301199416754177> **ᴀʙɪᴅᴇ ʙʏ ᴅɪꜱᴄᴏʀᴅ ᴛᴏ**
**(https://discord.com/terms)**

<a:Arrowblack:1468301199416754177> **ɴᴏ 18+ ᴄᴏɴᴛᴇɴᴛ**

<a:Arrowblack:1468301199416754177> **ɴᴏ ᴀᴅᴠᴇʀᴛɪꜱɪɴɢ/ᴅᴍ ᴀᴅᴠᴇʀᴛɪꜱɪɴɢ**

<a:Arrowblack:1468301199416754177> **ɴᴏ ꜱᴘᴀᴍᴍɪɴɢ**

<a:Arrowblack:1468301199416754177> **ʀᴇꜰʀᴀɪɴ ꜰʀᴏᴍ ᴅɪꜱᴄᴜꜱꜱɪɴɢ ᴏʀ ꜱʜɪʟʟɪɴɢ ᴀʙᴏᴜᴛ ᴏᴛʜᴇʀ ɢᴇɴᴇʀᴀᴛᴏʀꜱ, ᴘʟᴇᴀꜱᴇ. ᴋᴇᴇᴘ ʏᴏᴜʀ ꜱʜɪᴛꜱʜᴏᴡ ᴅɪꜱᴄᴜꜱꜱɪɴɢ ꜱᴏᴍᴇᴡʜᴇʀᴇ ᴇʟꜱᴇ**

<a:Arrowblack:1468301199416754177> **ꜱᴘʀᴇᴀᴅ ᴛʜᴇ ʟᴏᴠᴇ**

<a:Arrowblack:1468301199416754177> **ᴅɪꜱᴄʟᴀɪᴍᴇʀ: ᴛʜɪꜱ ꜱᴇʀᴠᴇʀ ᴅᴏᴇꜱ ɴᴏᴛ ᴘᴀʀᴛᴛᴀᴋᴇ ɪɴ ᴀɴʏ ᴍᴀʟɪᴄɪᴏᴜꜱ ᴀᴄᴛɪᴠɪᴛʏ. ᴡᴇ ᴀʀᴇ ꜱᴛʀɪᴄᴛʟʏ ᴀ ᴄᴏᴍᴍᴜɴɪᴛʏ ꜱᴇʀᴠᴇʀ ꜰᴏʀ ᴛʜᴇ ᴘᴏᴘᴜʟᴀʀ ɢᴀᴍᴇ ʀᴏʙʟᴏx.**
      `)
      .setThumbnail("https://media.discordapp.net/attachments/1467765239398269111/1468310713259790356/ssstik.io_symbiote.ns_1768672296314-ezgif.com-crop.gif?ex=69838e69&is=69823ce9&hm=bd6f124ef11f8b64ae79645d50143b047558ecce3bb6b9c13ec3fa37ddf930d6&=")
      .setImage("https://media.discordapp.net/attachments/1467765239398269111/1468311064373493924/a_a9340363efa2fb270ccbfad07908a722.gif?ex=69838ebd&is=69823d3d&hm=dfd2b8e7aae0c5e31ca4eb773b96f2012da4e65f6af19a7f9addb7295d50f087&=");

    await message.channel.send({ embeds: [bannerEmbed] });
    await message.channel.send("\u200B"); // espacio invisible
    await message.channel.send({ embeds: [rulesEmbed] });
  }
});

client.login(process.env.TOKEN);