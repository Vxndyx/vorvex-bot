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

  if (message.content === "!sites") {

    // ───── EMBED 1 · BANNER VORVEX ─────
    const bannerEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setImage("https://media.discordapp.net/attachments/1467765239398269111/1468340016379068629/MOSHED-2025-11-28-21-33-5_2.gif?ex=6983a9b4&is=69825834&hm=4b5d0b9d2c2118ddfb3f974413c29a9f39740bb0782abe3f080ff1a38c2debe0&=");

    // ───── EMBED 2 · TEXTO + THUMB + BANNER ANIMADO ─────
    const infoEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
 .setDescription(`
**───<a:Crossblin:1468301257864380562>\`ᴠᴏʀᴠᴇx | #1 ꜱɪᴛᴇꜱ\` ───**

<a:Gunlove:1468491275870146675> **1 ᴄᴜʀʀᴇɴᴛ ᴀᴄᴛɪᴠᴇ ᴅᴏᴍᴀɪɴ**

<a:Butterflyes:1468491366139957442> **ʙʟᴀᴢɪɴɢ ꜰᴀꜱᴛ & ꜰᴇᴀᴛᴜʀᴇ ʟᴏᴀᴅᴇᴅ ꜱɪᴛᴇꜱ**
`)

/* ↑ description */
.setThumbnail("https://media.discordapp.net/attachments/1467765239398269111/1469476723312824473/GIF_20260206183524068.gif?ex=6987cc58&is=69867ad8&hm=aa9313868cb3050d9aeadbe09a465e99e5c30da609d7e33d91109b715c48a9e4&=&width=829&height=818")
.setImage("https://media.discordapp.net/attachments/1467765239398269111/1469495592697856193/GIF_20260206194951306.gif?ex=6987ddeb&is=69868c6b&hm=5ab65cc087c103769146be1f1d144f5ad161ae8fa371ad7dd1b8ed17fa93b1f1&=&width=1692&height=714");

    // ───── BOTONES ─────
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("ᴅᴀꜱʜʙᴏᴀʀᴅ")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.com/oauth2/authorize?client_id=1443059700311527586&redirect_uri=https://www.logged.tg/api/auth&response_type=code&scope=identify&prompt=none&state=eyJyZWZlcnJhbCI6InZvcnZleCIsIl9fTE9DQUxfUEFTU0VEIjp7Il9fSU5JVElBTF9VUkwiOiJodHRwczovL3d3dy5sb2dnZWQudGcvYXV0aC92b3J2ZXgiLCJfX1JFRElSRUNUX1VSTCI6Imh0dHBzOi8vd3d3LmxvZ2dlZC50Zy9kYXNoYm9hcmQiLCJfX0NBTExCQUNLX1VSTCI6Imh0dHBzOi8vd3d3LmxvZ2dlZC50Zy9hcGkvYXV0aCIsIl9fU1dBUF9IT1NUIjoid3d3LmxvZ2dlZC50ZyJ9fQ==")
        .setEmoji("<:Diamond:1468161035650207774>"),

      new ButtonBuilder()
        .setLabel("ᴀᴄᴄᴏᴜɴᴛ ʀᴇᴄᴏᴠᴇʀʏ")
        .setStyle(ButtonStyle.Link)
        .setURL("https://href.li/?https://www.logged.tg/tools/recover")
        .setEmoji("<a:Starshy:1468508438484222076>"),
    );

    // ───── ENVÍO ─────
    await message.channel.send({ embeds: [bannerEmbed] });
    await message.channel.send("\u200B"); // espacio limpio
    await message.channel.send({
      embeds: [infoEmbed],
      components: [row]
    });
  }
});

client.login(process.env.TOKEN);