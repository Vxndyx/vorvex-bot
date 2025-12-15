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

    if (message.content === "!rules") {

        // 🔹 Primer embed (banner principal)
        const topEmbed = {
            color: 0x1e1f22,
            image: {
                url: "https://cdn.discordapp.com/attachments/1282931466640167043/1444154250912600174/MOSHED-2025-11-28-21-33-5.gif?ex=69416db4&is=69401c34&hm=b4bda4dc0c3fc77ad801935e61e00adc22d35652b9b60931e00781b97e7e365c"
            }
        };

        // 🔹 Segundo embed (reglas)
        const rulesEmbed = {
            color: 0x1e1f22,
            title: "**───<a:cruz1:1449079819102060677>ʀᴜʟᴇꜱ───**",
            description: `

<a:Blackarrow:1449078987547742248> **ᴀʙɪᴅᴇ ʙʏ ᴅɪꜱᴄᴏʀᴅ ᴛᴏꜱ**  
**(https://discord.com/terms)**

<a:Blackarrow:1449078987547742248> **ɴᴏ 18+ ᴄᴏɴᴛᴇɴᴛ**

<a:Blackarrow:1449078987547742248> **ɴᴏ ᴀᴅᴠᴇʀᴛɪꜱɪɴɢ/ᴅᴍ ᴀᴅᴠᴇʀᴛɪꜱɪɴɢ**

<a:Blackarrow:1449078987547742248> **ɴᴏ ꜱᴘᴀᴍᴍɪɴɢ**

<a:Blackarrow:1449078987547742248> **ʀᴇꜰʀᴀɪɴ ꜰʀᴏᴍ ᴅɪꜱᴄᴜꜱꜱɪɴɢ ᴏʀ ꜱʜɪʟʟɪɴɢ ᴀʙᴏᴜᴛ ᴏᴛʜᴇʀ ɢᴇɴᴇʀᴀᴛᴏʀꜱ, ᴘʟᴇᴀꜱᴇ. ᴋᴇᴇᴘ ʏᴏᴜʀ ꜱʜɪᴛꜱʜᴏᴡ ᴅɪꜱᴄᴜꜱꜱɪɴɢ ꜱᴏᴍᴇᴡʜᴇʀᴇ ᴇʟꜱᴇ**

<a:Blackarrow:1449078987547742248> **ꜱᴘʀᴇᴀᴅ ᴛʜᴇ ʟᴏᴠᴇ**

<a:Blackarrow:1449078987547742248> **ᴅɪꜱᴄʟᴀɪᴍᴇʀ: ᴛʜɪꜱ ꜱᴇʀᴠᴇʀ ᴅᴏᴇꜱ ɴᴏᴛ ᴘᴀʀᴛᴛᴀᴋᴇ ɪɴ ᴀɴʏ ᴍᴀʟɪᴄɪᴏᴜꜱ ᴀᴄᴛɪᴠɪᴛʏ. ᴡᴇ ᴀʀᴇ ꜱᴛʀɪᴄᴛʟʏ ᴀ ᴄᴏᴍᴍᴜɴɪᴛʏ ꜱᴇʀᴠᴇʀ ꜰᴏʀ ᴛʜᴇ ᴘᴏᴘᴜʟᴀʀ ɢᴀᴍᴇ ʀᴏʙʟᴏx.**
            `,
            thumbnail: {
                url: "https://media.discordapp.net/attachments/1367205588445958318/1390362322349981887/a_2b9d08af401b8fcaf06b4092ef5f81fc.gif?ex=694182d1&is=69403151&hm=5a59c8bc4cb9cf5d62d9f9f4e0fc5b6fcbdd3872e2b381608862a5eba7a8576c&=&width=506&height=506"
            },
            image: {
                url: "https://media.discordapp.net/attachments/1367205588445958318/1390362322836394216/a_53fb1bf8cf4bf2adca07820a9cab3e77.gif?ex=694182d1&is=69403151&hm=a557790b3b06fa52a1282b7bf0cf73024fba2dd73b7fa756e2dfe03f430a78e5&=&width=900&height=317"
            }
        };

        // Enviar banner
        await message.channel.send({ embeds: [topEmbed] });

        // 🔹 Este es el ESPACIO FUERA DEL EMBED (mensaje vacío)
        await message.channel.send("‎"); // ← este carácter invisible crea el espacio

        // Enviar reglas
        await message.channel.send({ embeds: [rulesEmbed] });
    }
});

client.login(process.env.TOKEN);
