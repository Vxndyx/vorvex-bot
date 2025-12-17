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
            .setTitle("**───<a:cruz1:1449079819102060677>ᴡᴇʙʜᴏᴏᴋ ᴘʜᴏɴᴇ ───**")
            .setThumbnail("https://media.discordapp.net/attachments/1392183422839033997/1392190755983851532/a_9ea1a708e2f91a670af4d496d8a43a2a.gif?ex=6944352d&is=6942e3ad&hm=cd42998b0f595e3b645fa4830c6bfc750be5b179af72fe024969d54025944df8&=&width=648&height=648") // ← ICONO DERECHA
            .setDescription(
`<a:Blackarrow:1449078987547742248> **ᴡᴀᴛᴄʜ ᴛʜᴇ ᴛᴜᴛᴏʀɪᴀʟ ʙᴇʟᴏᴡ ꜰᴏʀ ᴡᴇʙʜᴏᴏᴋ ᴘʜᴏɴᴇ**

<a:Blackarrow:1449078987547742248> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1449456703035936779> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
`)
            .setImage("https://media.discordapp.net/attachments/1392183422839033997/1392190756424515605/a_617d19daf29a13c45ba2eeb48db06f28.gif?ex=6944352d&is=6942e3ad&hm=6222e70f3c15bd9de2652bc3b8c439363c1bbeb68588ac94d9737cb5e3cca0e5&=&width=864&height=305"); // ← IMAGEN DE ABAJO


        // ─────────────────────────────────────────────
        // 🔥 BOTONES
        // ─────────────────────────────────────────────

        const buttons = new ActionRowBuilder().addComponents(

            // Botón 1 → Dashboard
            new ButtonBuilder()
                .setLabel("ᴛᴜᴛᴏʀɪᴀʟ")
                .setStyle(ButtonStyle.Link)
                .setEmoji("<:emoji:1449079724440686794>") // ← TU EMOJI
                .setURL("https://www.youtube.com/watch?v=9oClR9rlkIc"),
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