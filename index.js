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
            .setImage("https://cdn.discordapp.com/attachments/1282931466640167043/1444154250912600174/MOSHED-2025-11-28-21-33-5.gif?ex=69416db4&is=69401c34&hm=b4bda4dc0c3fc77ad801935e61e00adc22d35652b9b60931e00781b97e7e365c"); // ← PON TU GIF AQUI


        // ─────────────────────────────────────────────
        // 🔥 EMBED 2 — Texto + Thumbnail + Imagen Horizontal
        // ─────────────────────────────────────────────
        const bottomEmbed = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setTitle("**`ᴠᴏʀᴠᴇx | 1# ʙᴇꜱᴛ ʟɪɴᴋ ʜɪᴅᴇʀ`**")
            .setThumbnail("https://media.discordapp.net/attachments/1367204098541228083/1368489216891158588/a_ea4866230f6b5ce4cbb8520cc5d0cc41.gif?ex=6941b2a6&is=69406126&hm=3de8fb7b260b9860eca18673d925d05bb89313cb1c0617cb71dfdbbf5709e4e0&=&width=421&height=421") // ← ICONO DERECHA
            .setDescription(
`<a:Blackarrow:1449078987547742248> **ʟɪɴᴋ ʜɪᴅᴇʀ ᴡᴇʙꜱɪᴛᴇ ʙᴇʟᴏᴡ**  
<a:Butterflyes:1449079464251097201> **ʜɪᴅᴇ ʏᴏᴜʀ ʀᴏʙʟᴏx ʟɪɴᴋꜱ ꜱᴀꜰᴇʟʏ ᴏɴ ᴠᴏʀᴠᴇx**

‎` // ← ESPACIO INVISIBLE IGUAL AL DE TU DISEÑO
            )
            .setImage("https://media.discordapp.net/attachments/1367204098541228083/1368489217331826728/a_45084a7b8cc78fe8973828d28b734dce.gif?ex=6941b2a6&is=69406126&hm=f9b8d9f2cbe46ba7958e44a9629372b22bbee7fdafec150009196f6c7da411cb&=&width=900&height=317"); // ← IMAGEN DE ABAJO


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