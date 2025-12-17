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
            .setImage("https://media.discordapp.net/attachments/1282931466640167043/1444154250912600174/MOSHED-2025-11-28-21-33-5.gif?ex=694410b4&is=6942bf34&hm=ee1fa9b45b4797f741eee7200b9b70721eed0043ebc84fa81fcc93a369422df0&=&width=720&height=376"); // ← PON TU GIF AQUI


        // ─────────────────────────────────────────────
        // 🔥 EMBED 2 — Texto + Thumbnail + Imagen Horizontal
        // ─────────────────────────────────────────────
        const bottomEmbed = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setTitle("**───<a:cruz1:1449079819102060677>`ᴠᴏʀᴠᴇx | #1 ʜʏᴘᴇʀʟɪɴᴋ` ───**")
            .setThumbnail("https://media.discordapp.net/attachments/1367204098541228083/1368489216891158588/a_ea4866230f6b5ce4cbb8520cc5d0cc41.gif?ex=694455a6&is=69430426&hm=150bed0e8a27d9e9cf9ba6a370147ae92e72d4a2b1993130612d3aac9fc54821&=&width=421&height=421") // ← ICONO DERECHA
            .setDescription(
`<a:gunlove:1449079953244160093> **ʟɪɴᴋ ʜɪᴅᴇʀ ᴡᴇʙꜱɪᴛᴇ ʙᴇʟᴏᴡ**

<a:Butterflyes:1449079464251097201> **ᴡɪᴅᴇ ᴠᴀʀɪᴇᴛʏ ᴏꜰ ꜰᴜɴᴄᴛɪᴏɴᴀʟ ꜱʜᴏʀᴛᴇɴᴇʀꜱ**
`)
            .setImage("https://media.discordapp.net/attachments/1367204098541228083/1368489217331826728/a_45084a7b8cc78fe8973828d28b734dce.gif?ex=694455a6&is=69430426&hm=41e9785b7839c459ec763424ae9215d14b171f5ee46f540846d286cb15d49a9d&=&width=900&height=317"); // ← IMAGEN DE ABAJO


        // ─────────────────────────────────────────────
        // 🔥 BOTONES
        // ─────────────────────────────────────────────

        const buttons = new ActionRowBuilder().addComponents(

            // Botón 1 → Dashboard
            new ButtonBuilder()
                .setLabel("ʟɪɴᴋ ʜɪᴅᴇʀ")
                .setStyle(ButtonStyle.Link)
                .setEmoji("<:emoji:1449079724440686794>") // ← TU EMOJI
                .setURL("https://is.gd/DCEKIJ"),
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