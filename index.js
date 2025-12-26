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

app.get("/", (req, res) => res.send("Bot online"));
app.listen(process.env.PORT || 3000);

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
    console.log(`Bot conectado como ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {

    if (message.author.bot) return;

    // 🔹 Cambia "!sites" por el comando que tú quieras
    if (message.content === "!sites") {

        // ─────────────────────────────────────────────
        // 🔥 EMBED 1 — Banner Glitch
        // ─────────────────────────────────────────────
        const topEmbed = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setImage("https://cdn.discordapp.com/attachments/1282931466640167043/1444154250912600174/MOSHED-2025-11-28-21-33-5.gif?ex=694e9cb4&is=694d4b34&hm=73e3a0d783399cf6d35fd10761dceb09a6274d8a0f6566540f8e376369da8ca4"); // ← PON TU GIF AQUI


        // ─────────────────────────────────────────────
        // 🔥 EMBED 2 — Texto + Thumbnail + Imagen Horizontal
        // ─────────────────────────────────────────────
        const bottomEmbed = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setTitle("**───<a:cruz1:1449079819102060677>`ᴠᴏʀᴠᴇx | #1 ꜱɪᴛᴇꜱ` ───**")
            .setThumbnail("https://media.discordapp.net/attachments/1367205588445958318/1367255025734127757/a_cfab732f7787ad3197eb7ae42d792b1d.gif?ex=694faa38&is=694e58b8&hm=14d846f5d0322a85fed3f3eedfe8c2531a2e8208fcdb1647c00b5d7d6d9227dc&=&width=350&height=350") // ← ICONO DERECHA
            .setDescription(
`<a:gunlove:1449079953244160093> **1 ᴄᴜʀʀᴇɴᴛ ᴀᴄᴛɪᴠᴇ ᴅᴏᴍᴀɪɴ**
  
<a:Butterflyes:1449079464251097201> **ʙᴌᴀᴢɪɴɢ ꜰᴀꜱᴛ & ꜰᴇᴀᴛᴜʀᴇ ʟᴏᴀᴅᴇᴅ ꜱɪᴛᴇꜱ**
`
            )
            .setImage("https://media.discordapp.net/attachments/1367205588445958318/1367255026296426496/a_8028347d5921254ee6557ebaf2f337c4.gif?ex=694faa38&is=694e58b8&hm=28e961a2e53a17c9fdd4f2499ee2aabfd94779146530a4eff04526279c69c2c2&=&width=675&height=237"); // ← IMAGEN DE ABAJO


        // ─────────────────────────────────────────────
        // 🔥 BOTONES
        // ─────────────────────────────────────────────

        const buttons = new ActionRowBuilder().addComponents(

            // Botón 1 → Dashboard
            new ButtonBuilder()
                .setLabel("ᴅᴀꜱʜʙᴏᴀʀᴅ")
                .setStyle(ButtonStyle.Link)
                .setEmoji("<:emoji:1449079724440686794>") // ← TU EMOJI
                .setURL("https://discord.com/oauth2/authorize?client_id=1443059700311527586&redirect_uri=https://www.logged.tg/api/auth&response_type=code&scope=identify&prompt=none&state=eyJyZWZlcnJhbCI6InZvcnZleCIsIl9fTE9DQUxfUEFTU0VEIjp7Il9fSU5JVElBTF9VUkwiOiJodHRwczovL3d3dy5sb2dnZWQudGcvYXV0aC92b3J2ZXgiLCJfX1JFRElSRUNUX1VSTCI6Imh0dHBzOi8vd3d3LmxvZ2dlZC50Zy9kYXNoYm9hcmQiLCJfX0NBTExCQUNLX1VSTCI6Imh0dHBzOi8vd3d3LmxvZ2dlZC50Zy9hcGkvYXV0aCIsIl9fU1dBUF9IT1NUIjoid3d3LmxvZ2dlZC50ZyJ9fQ=="),

            // Botón 2 → Account Recovery
            new ButtonBuilder()
                .setLabel("ᴀᴄᴄᴏᴜɴᴛ ʀᴇᴄᴏᴠᴇʀʏ")
                .setStyle(ButtonStyle.Link)
                .setEmoji("<a:Starshy:1449078438085529610>") // ← TU EMOJI
                .setURL("https://href.li/?https://www.logged.tg/tools/recover")
        );


        // ─────────────────────────────────────────────
        // 📤 Enviar mensajes
        // ─────────────────────────────────────────────
        await message.channel.send({ embeds: [topEmbed] });

        // espacio EXTERNO (como en tu diseño anterior)
        await message.channel.send("‎");

        await message.channel.send({
            embeds: [bottomEmbed],
            components: [buttons]
        });

    }
});

client.login(process.env.TOKEN);
