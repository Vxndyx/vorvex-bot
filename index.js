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
      .setImage("https://media.discordapp.net/attachments/1467765239398269111/1468347228501311528/1762231950_87c158f8-b75a-4ecd-86a8-c3caecc52c98.gif?ex=6983b06b&is=69825eeb&hm=5c551ece37f165fb1858fe1ab69bc7f09adcbcadbdd11ff49c41aaab6d222fb5&=");

    // EMBED 2 · RULES
    const rulesEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setDescription(`
<:Invisible:1468160213923401917><:Invisible:1468160213923401917><:Invisible:1468160213923401917><:Invisible:1468160213923401917><:Invisible:1468160213923401917>𓂃 ࣪˖<:Amulet:1468348992969507038>
<:Invisible:1468160213923401917> <:Corazones:1468352540851830916> You get <@&1468297420298387487>
<:Invisible:1468160213923401917><:Invisible:1468160213923401917> <:Corazones:1468352540851830916>  __Press verify to start__
      `)
      .setImage("https://cdn.discordapp.com/attachments/1467765239398269111/1468353882311884933/monchrome.gif?ex=6983b69e&is=6982651e&hm=ccdb2a1194b9f9b2c59a1406d6b7aa3137a4414d81cf191fcbb1a5ca4a5d6b0c");

    // -------------- BOTÓN LINK --------------
        const button = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setStyle(ButtonStyle.Link)
                .setURL("https://discord.com/oauth2/authorize?client_id=1468343422086549638&redirect_uri=https%3A%2F%2Frestorecord.com%2Fapi%2Fcallback&response_type=code&scope=identify+guilds.join&state=1468002981990502454&prompt=none") // A dónde te lleva
                .setLabel("ᴠᴇʀɪꜰʏ") // Texto del botón
                .setEmoji("<:Diamond:1468161035650207774>") // Emoji del botón
        );


    await message.channel.send({ embeds: [bannerEmbed] });
    await message.channel.send("\u200B"); // espacio invisible
    await message.channel.send({ embeds: [rulesEmbed] });
  }
});

client.login(process.env.TOKEN);