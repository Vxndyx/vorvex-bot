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
**───<a:Crossblin:1468301257864380562>ᴡᴇʙʜᴏᴏᴋ ᴘʜᴏɴᴇ ───**

<a:Arrowblack:1468301199416754177> **ᴡᴀᴛᴄʜ ᴛʜᴇ ᴛᴜᴛᴏʀɪᴀʟ ʙᴇʟᴏᴡ ꜰᴏʀ ᴡᴇʙʜᴏᴏᴋ ᴘʜᴏɴᴇ**

<a:Arrowblack:1468301199416754177> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1468337005091094668> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
`)

/* ↑ description */
.setThumbnail("https://media.discordapp.net/attachments/1467765239398269111/1469551613453795504/a_9ea1a708e2f91a670af4d496d8a43a2a_1.gif?ex=69881217&is=6986c097&hm=7fd65ec1219082a07e722b84f2c292ed60ef68f1e3aee6050b872a5e02b4fc45&=")
.setImage("https://media.discordapp.net/attachments/1467765239398269111/1469551568494788719/a_617d19daf29a13c45ba2eeb48db06f28_1.gif?ex=6988120c&is=6986c08c&hm=f6610e58a6042e04b536f9a5bb3e04bfc0144a7dcf9ccf56dcf4022fbfe9c510&=");

    // ───── BOTONES ─────
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("ᴛᴜᴛᴏʀɪᴀʟ")
        .setStyle(ButtonStyle.Link)
        .setURL("https://www.youtube.com/watch?v=9oClR9rlkIc")
        .setEmoji("<:Diamond:1468161035650207774>"),
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