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

// ID del rol que podrá ver los tickets
const SUPPORT_ROLE = "1436075285371031593";

client.once("ready", () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isButton()) return;


    if (interaction.customId === "pc_tutorial") {
        return interaction.reply({
            content: `\n${PC_VIDEO}`,
            ephemeral: true
        });
    }

    if (interaction.customId === "mobile_tutorial") {
        return interaction.reply({
            content: `\n${MOBILE_VIDEO}`,
            ephemeral: true
        });
    }

    if (interaction.customId === "tutorial_btn") {
        return interaction.reply({
            content: `${VIDEO_MP4}`,
            ephemeral: true
        });
    }

    if (interaction.customId === "tutorial_btn_i") {
        return interaction.reply({
            content: `\n${VIDEO_MP5}`,
            ephemeral: true
        });
    }

    if (interaction.customId === "cookie_btn_i") {
        return interaction.reply({
            content: `\n${COOKIE_EDITOR_LINK}`,
            ephemeral: true
        });
    }

    if (interaction.customId === "tutorial_btn_a") {
        return interaction.reply({
            content: `\n${VIDEO_MP6}`,
            ephemeral: true
        });
    }

    if (interaction.customId === "cookie_btn_a") {
        return interaction.reply({
            content: `\n${COOKIE_EDITOR_LINK_A}`,
            ephemeral: true
        });
    }

    if (interaction.customId === "tutorial_btn_p") {
        return interaction.reply({
            content: `\n${VIDEO_MP7}`,
            ephemeral: true
        });
    }

    if (interaction.customId === "cookie_btn_p") {
        return interaction.reply({
            content: `\n${COOKIE_EDITOR_LINK_P}`,
            ephemeral: true
        });
    }

    if (interaction.customId === "tutorial_agechanger") {
        return interaction.reply({
            content: `\n${VIDEO_AGE}`,
            ephemeral: true
        });
    }

    if (interaction.customId === "tutorial_session") {
        return interaction.reply({
            content: `\n${VIDEO_SESSION}`,
            ephemeral: true
        });
    }

    // SERVIDORES POR JUEGO
    if (interaction.customId in SERVERS) {
        const id = interaction.customId;
        const gameServers = SERVERS[id];

        if (!gameServers || !Array.isArray(gameServers)) {
            return interaction.reply({
                content: "No hay servidores configurados para este juego.",
                ephemeral: true
            });
        }

        const serverList = gameServers.map(s => `• ${s}`).join("\n");

        return interaction.reply({
            content: `\n\n${serverList}`,
            ephemeral: true
        });
    }
});   // 🔥 ESTA ES LA LLAVE QUE FALTABA — PRIMER EVENTO CERRADO

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return;

  if (message.content === "!links") {
    const bannerEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setImage("https://media.discordapp.net/attachments/1282931466640167043/1444154250912600174/MOSHED-2025-11-28-21-33-5.gif?ex=692da734&is=692c55b4&hm=d26e1fc6e1c018b2eaff55918d9afc8855e4c8e23a5141488d0a1b24522e83ba&=&width=720&height=376");

    const infoEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setTitle("**───<a:emoji_146:1444157442211446887>ʟɪɴᴋꜱ ───**")
      .setThumbnail("https://media.discordapp.net/attachments/1392183422839033997/1392190755983851532/a_9ea1a708e2f91a670af4d496d8a43a2a.gif?ex=692dcbad&is=692c7a2d&hm=984de6418bcae8f7392f23da4673b642d5df879b6f3155feee0d10ac199c6e73&=&width=648&height=648")
      .setDescription(`
        <a:arrow_black:1444162642435510283> **ᴡᴀᴛᴄʜ ᴛʜᴇ ᴛᴜᴛᴏʀɪᴀʟꜱ ʙᴇʟᴏᴡ ᴅᴇᴘᴇɴᴅɪɴɢ ᴏɴ ʏᴏᴜʀ ᴅᴇᴠɪᴄᴇ**

        <a:arrow_black:1444162642435510283> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1439034585303355433> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
`)
      .setImage("https://media.discordapp.net/attachments/1392183422839033997/1392190756424515605/a_617d19daf29a13c45ba2eeb48db06f28.gif?ex=692dcbad&is=692c7a2d&hm=b720cbe7db5f22103bc68b689fa379ce9aa23905b5fd16cedbb106016824ab75&=&width=864&height=305");

    const buttons = new ActionRowBuilder().addComponents(

      new ButtonBuilder()
        .setCustomId("pc_tutorial")
        .setLabel("ᴘᴄ ᴛᴜᴛᴏʀɪᴀʟ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<:emoji:1423892970465132594>"),

      new ButtonBuilder()
        .setCustomId("mobile_tutorial")
        .setLabel("ᴍᴏʙɪʟᴇ ᴛᴜᴛᴏʀɪᴀʟ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<a:starshy:1436184520163463290>")
    );

    await message.channel.send({ embeds: [bannerEmbed] });
    await message.channel.send("‎");
    await message.channel.send({ embeds: [infoEmbed], components: [buttons] });
  }

  if (message.content === "!privates") {
    const bannerEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setImage("https://media.discordapp.net/attachments/1282931466640167043/1444154250912600174/MOSHED-2025-11-28-21-33-5.gif?ex=692da734&is=692c55b4&hm=d26e1fc6e1c018b2eaff55918d9afc8855e4c8e23a5141488d0a1b24522e83ba&=&width=720&height=376");

    const infoEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setTitle("**───<a:emoji_146:1444157442211446887>ᴘʀɪᴠᴀᴛᴇ ꜱᴇʀᴠᴇʀ ───**")
      .setThumbnail("https://media.discordapp.net/attachments/1392183422839033997/1392190755983851532/a_9ea1a708e2f91a670af4d496d8a43a2a.gif?ex=692dcbad&is=692c7a2d&hm=984de6418bcae8f7392f23da4673b642d5df879b6f3155feee0d10ac199c6e73&=&width=648&height=648")
      .setDescription(`
        <a:arrow_black:1444162642435510283> **ᴡᴀᴛᴄʜ ᴛʜᴇ ᴛᴜᴛᴏʀɪᴀʟ ʙᴇʟᴏᴡ ꜰᴏʀ ᴘʀɪᴠᴀᴛᴇ ꜱᴇʀᴠᴇʀ ʟɪɴᴋꜱ**
        
        <a:arrow_black:1444162642435510283> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1439034585303355433> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
`)
      .setImage("https://media.discordapp.net/attachments/1392183422839033997/1392190756424515605/a_617d19daf29a13c45ba2eeb48db06f28.gif?ex=692dcbad&is=692c7a2d&hm=b720cbe7db5f22103bc68b689fa379ce9aa23905b5fd16cedbb106016824ab75&=&width=864&height=305");

    // 🔥 SOLO 1 BOTÓN
    const buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tutorial_btn")
        .setLabel("ᴛᴜᴛᴏʀɪᴀʟ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<:emoji:1423892970465132594>")
    );

    await message.channel.send({ embeds: [bannerEmbed] });
    await message.channel.send("‎");
    await message.channel.send({ embeds: [infoEmbed], components: [buttons] });
  }

  if (message.content === "!cookie-i") {
    const bannerEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setImage("https://media.discordapp.net/attachments/1282931466640167043/1444154250912600174/MOSHED-2025-11-28-21-33-5.gif?ex=692da734&is=692c55b4&hm=d26e1fc6e1c018b2eaff55918d9afc8855e4c8e23a5141488d0a1b24522e83ba&=&width=720&height=376");

    const infoEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setTitle("**───<a:emoji_146:1444157442211446887>ɪᴘʜᴏɴᴇ ᴄᴏᴏᴋɪᴇ ───**")
      .setThumbnail("https://media.discordapp.net/attachments/1382027143265124452/1388113405210263583/giphy-downsized-large.gif?ex=692d76d9&is=692c2559&hm=1c79c9a4f4a48abcd982059e3e6eb763ea68568eeaadc4605f8b280c80b3f44b&=&width=369&height=369")
      .setDescription(`
        <a:arrow_black:1444162642435510283> **ᴡᴀᴛᴄʜ ᴛʜᴇ ᴛᴜᴛᴏʀɪᴀʟ ʙᴇʟᴏᴡ ꜰᴏʀ ɪᴘʜᴏɴᴇ ᴄᴏᴏᴋɪᴇꜱ**
        
        <a:arrow_black:1444162642435510283> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1439034585303355433> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
        
      `)
      .setImage("https://media.discordapp.net/attachments/1382027143265124452/1388113405575037018/giphy-4.gif?ex=692d76d9&is=692c2559&hm=f05f9d327704c5a173cc8940c445a152c4bb0a125b284d3eebaf02a9549288a8&=&width=540&height=185");

    // 🔥 AHORA SON 2 BOTONES
    const buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tutorial_btn_i")
        .setLabel("ᴛᴜᴛᴏʀɪᴀʟ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<:emoji:1423892970465132594>"),

      new ButtonBuilder()
        .setCustomId("cookie_btn_i")
        .setLabel("ᴄᴏᴏᴋɪᴇ ᴇᴅɪᴛᴏʀ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<a:starshy:1436184520163463290>")
    );

    await message.channel.send({ embeds: [bannerEmbed] });
    await message.channel.send("‎");
    await message.channel.send({ embeds: [infoEmbed], components: [buttons] });
  }

  if (message.content === "!cookie-a") {
    const bannerEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setImage("https://media.discordapp.net/attachments/1282931466640167043/1444154250912600174/MOSHED-2025-11-28-21-33-5.gif?ex=692da734&is=692c55b4&hm=d26e1fc6e1c018b2eaff55918d9afc8855e4c8e23a5141488d0a1b24522e83ba&=&width=720&height=376");

    const infoEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setTitle("**───<a:emoji_146:1444157442211446887>ᴀɴᴅʀᴏɪᴅ ᴄᴏᴏᴋɪᴇ ───**")
      .setThumbnail("https://media.discordapp.net/attachments/1382027143265124452/1388113405210263583/giphy-downsized-large.gif?ex=692d76d9&is=692c2559&hm=1c79c9a4f4a48abcd982059e3e6eb763ea68568eeaadc4605f8b280c80b3f44b&=&width=369&height=369")
      .setDescription(`
        <a:arrow_black:1444162642435510283> **ᴡᴀᴛᴄʜ ᴛʜᴇ ᴛᴜᴛᴏʀɪᴀʟ ʙᴇʟᴏᴡ ꜰᴏʀ ᴀɴᴅʀᴏɪᴅ ᴄᴏᴏᴋɪᴇꜱ**
        
        <a:arrow_black:1444162642435510283> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1439034585303355433> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
        
      `)
      .setImage("https://media.discordapp.net/attachments/1382027143265124452/1388113405575037018/giphy-4.gif?ex=692d76d9&is=692c2559&hm=f05f9d327704c5a173cc8940c445a152c4bb0a125b284d3eebaf02a9549288a8&=&width=540&height=185");

    // 🔥 AHORA SON 2 BOTONES
    const buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tutorial_btn_a")
        .setLabel("ᴛᴜᴛᴏʀɪᴀʟ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<:emoji:1423892970465132594>"),

      new ButtonBuilder()
        .setCustomId("cookie_btn_a")
        .setLabel("ᴄᴏᴏᴋɪᴇ ᴇᴅɪᴛᴏʀ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<a:starshy:1436184520163463290>")
    );

    await message.channel.send({ embeds: [bannerEmbed] });
    await message.channel.send("‎");
    await message.channel.send({ embeds: [infoEmbed], components: [buttons] });
  }

  if (message.content === "!cookie-p") {
    const bannerEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setImage("https://media.discordapp.net/attachments/1282931466640167043/1444154250912600174/MOSHED-2025-11-28-21-33-5.gif?ex=692da734&is=692c55b4&hm=d26e1fc6e1c018b2eaff55918d9afc8855e4c8e23a5141488d0a1b24522e83ba&=&width=720&height=376");

    const infoEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setTitle("**───<a:emoji_146:1444157442211446887>ᴘᴄ ᴄᴏᴏᴋɪᴇ ───**")
      .setThumbnail("https://media.discordapp.net/attachments/1382027143265124452/1388113405210263583/giphy-downsized-large.gif?ex=692d76d9&is=692c2559&hm=1c79c9a4f4a48abcd982059e3e6eb763ea68568eeaadc4605f8b280c80b3f44b&=&width=369&height=369")
      .setDescription(`
        <a:arrow_black:1444162642435510283> **ᴡᴀᴛᴄʜ ᴛʜᴇ ᴛᴜᴛᴏʀɪᴀʟ ʙᴇʟᴏᴡ ꜰᴏʀ ᴀɴᴅʀᴏɪᴅ ᴄᴏᴏᴋɪᴇꜱ**
        
        <a:arrow_black:1444162642435510283> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1439034585303355433> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
        
      `)
      .setImage("https://media.discordapp.net/attachments/1382027143265124452/1388113405575037018/giphy-4.gif?ex=692d76d9&is=692c2559&hm=f05f9d327704c5a173cc8940c445a152c4bb0a125b284d3eebaf02a9549288a8&=&width=540&height=185");

    // 🔥 AHORA SON 2 BOTONES
    const buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tutorial_btn_p")
        .setLabel("ᴛᴜᴛᴏʀɪᴀʟ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<:emoji:1423892970465132594>"),

      new ButtonBuilder()
        .setCustomId("cookie_btn_p")
        .setLabel("ᴄᴏᴏᴋɪᴇ ᴇᴅɪᴛᴏʀ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<a:starshy:1436184520163463290>")
    );

    await message.channel.send({ embeds: [bannerEmbed] });
    await message.channel.send("‎");
    await message.channel.send({ embeds: [infoEmbed], components: [buttons] });
  }

  if (message.content === "!agechanger") {

        // -------------------------------------------
        // EMBED 1 — La imagen principal (glitch)
        // -------------------------------------------
        const embedPrincipal = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setImage("https://media.discordapp.net/attachments/1282931466640167043/1444154250912600174/MOSHED-2025-11-28-21-33-5.gif?ex=692da734&is=692c55b4&hm=d26e1fc6e1c018b2eaff55918d9afc8855e4c8e23a5141488d0a1b24522e83ba&=&width=720&height=376"); 
            // ← Reemplaza este link con tu banner glitch


        // -------------------------------------------
        // EMBED 2 — Info, thumbnail y banner
        // -------------------------------------------
        const embedInfo = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setTitle("**───<a:emoji_146:1444157442211446887>ᴀɢᴇ ᴄʜᴀɴɢᴇʀ ───**")
            .setThumbnail("https://media.discordapp.net/attachments/1394306416663330826/1394310085282365510/a_56e10ea4fd44a9ef520835bb1f8861f5.gif?ex=692d9875&is=692c46f5&hm=b9fcada939397ef8752848b48c3debc1c9d8ac7352a2cc8907ffb5e2bc7de3f6&=&width=506&height=506") 
            .setDescription(`
            <a:arrow_black:1444162642435510283> **ᴛʜɪꜱ ꜱᴇᴛᴛɪɴɢ ᴄʜᴀɴɢᴇꜱ ᴛʜᴇ ᴀᴄᴄᴏᴜɴᴛ ᴀɢᴇ ꜰʀᴏᴍ 13+ ᴛᴏ ᴜɴᴅᴇʀ 13. ᴀꜰᴛᴇʀ ᴛʜɪꜱ, ʏᴏᴜ ᴀʀᴇ ᴀʙʟᴇ ᴛᴏ ᴄʜᴀɴɢᴇ ᴛʜᴇ ᴇᴍᴀɪʟ ᴀɴᴅ ᴘᴀꜱꜱᴡᴏʀᴅ. ᴡᴀᴛᴄʜ ᴛʜᴇ ᴛᴜᴛᴏʀɪᴀʟ ʙᴇʟᴏᴡ ꜰᴏʀ ᴛʜᴇ ꜱᴛᴇᴘꜱ.**

            <a:arrow_black:1444162642435510283> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1439034585303355433> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
`)
            .setImage("https://media.discordapp.net/attachments/1394306416663330826/1394310085764714607/a_54b4ce47e3f37e2012ce023a9ddba69f.gif?ex=692d9875&is=692c46f5&hm=07586cd88568c2df802d9ab1441baa80ea642a5787196617ad20aa94420a7a1b&=&width=900&height=317"); 
            // ← Reemplaza con tu banner inferior


        // -------------------------------------------
        // BOTÓN — TUTORIAL
        // -------------------------------------------
        const botones = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("tutorial_agechanger")
                .setLabel("ᴛᴜᴛᴏʀɪᴀʟ")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:emoji:1423892970465132594>")
        );

        // -------------------------------------------
        // ENVÍO DE EMBEDS
        // -------------------------------------------
        await message.channel.send({ embeds: [embedPrincipal] });

        // ESPACIO ENTRE EMBEDS
        await message.channel.send("\u200B");

        await message.channel.send({
            embeds: [embedInfo],
            components: [botones]
      });  
    }

  if (message.content === "!session") {

        // -------------------------------------------
        // EMBED 1 — La imagen principal (glitch)
        // -------------------------------------------
        const embedPrincipal = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setImage("https://media.discordapp.net/attachments/1282931466640167043/1444154250912600174/MOSHED-2025-11-28-21-33-5.gif?ex=692da734&is=692c55b4&hm=d26e1fc6e1c018b2eaff55918d9afc8855e4c8e23a5141488d0a1b24522e83ba&=&width=720&height=376"); 
            // ← Reemplaza este link con tu banner glitch


        // -------------------------------------------
        // EMBED 2 — Info, thumbnail y banner
        // -------------------------------------------
        const embedInfo = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setTitle("**───<a:emoji_146:1444157442211446887>ꜱᴇꜱꜱɪᴏɴ ꜱᴇᴄᴜʀᴇ ───**")
            .setThumbnail("https://media.discordapp.net/attachments/1394306416663330826/1394310085282365510/a_56e10ea4fd44a9ef520835bb1f8861f5.gif?ex=692d9875&is=692c46f5&hm=b9fcada939397ef8752848b48c3debc1c9d8ac7352a2cc8907ffb5e2bc7de3f6&=&width=506&height=506") 
            .setDescription(`
            <a:arrow_black:1444162642435510283> **ᴛʜɪꜱ ꜱᴇᴛᴛɪɴɢ ꜰᴏʀᴄᴇꜱ ᴀᴜᴛʜᴇɴᴛɪᴄᴀᴛɪᴏɴ ᴀɴᴅ ɢɪᴠᴇꜱ ʏᴏᴜ ꜰᴜʟʟ ᴀᴄᴄᴏᴜɴᴛ ᴀᴄᴄᴇꜱꜱ ʙʏ ꜱᴇɴᴅɪɴɢ ᴛʜᴇ ꜱᴇꜱꜱɪᴏɴ ᴜʀʟ ᴀɴᴅ ꜱᴇꜱꜱɪᴏɴ ᴋᴇʏ (ᴀᴜᴛʜᴇɴᴛɪᴄᴀᴛᴏʀ ꜱᴇᴄʀᴇᴛ). ᴡᴀᴛᴄʜ ᴛʜᴇ ᴛᴜᴛᴏʀɪᴀʟ ʙᴇʟᴏᴡ ꜰᴏʀ ᴛʜᴇ ꜱᴛᴇᴘꜱ.**

            <a:arrow_black:1444162642435510283> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1439034585303355433> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
`)
            .setImage("https://media.discordapp.net/attachments/1394306416663330826/1394310085764714607/a_54b4ce47e3f37e2012ce023a9ddba69f.gif?ex=692d9875&is=692c46f5&hm=07586cd88568c2df802d9ab1441baa80ea642a5787196617ad20aa94420a7a1b&=&width=900&height=317"); 
            // ← Reemplaza con tu banner inferior


        // -------------------------------------------
        // BOTÓN — TUTORIAL
        // -------------------------------------------
        const botones = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("tutorial_session")
                .setLabel("ᴛᴜᴛᴏʀɪᴀʟ")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:emoji:1423892970465132594>")
        );

        // -------------------------------------------
        // ENVÍO DE EMBEDS
        // -------------------------------------------
        await message.channel.send({ embeds: [embedPrincipal] });

        // ESPACIO ENTRE EMBEDS
        await message.channel.send("\u200B");

        await message.channel.send({
            embeds: [embedInfo],
            components: [botones]
        });
    }

  if (message.content === "!servers") {

        // EMBED 1 — Imagen principal
        const embedPrincipal = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setImage("https://media.discordapp.net/attachments/1282931466640167043/1444154250912600174/MOSHED-2025-11-28-21-33-5.gif");

        // EMBED 2 — Info
        const embedInfo = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setTitle("**───<a:emoji_146:1444157442211446887>ꜱᴇʀᴠᴇʀꜱ ───**")
            .setDescription(`
            <a:arrow_black:1444162642435510283> **ᴄʟɪᴄᴋ ᴛʜᴇ ʙᴜᴛᴛᴏɴꜱ ʙᴇʟᴏw ꜰᴏʀ ꜱᴇʀᴠᴇʀ ɪɴᴠɪᴛᴇ ʟɪɴᴋꜱ**

            <:arrow:1444162642435510283> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1439034585303355433> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
            `)
            .setThumbnail("https://media.discordapp.net/attachments/1367451376879407145/1424427132607660092/a_4589025142faaffc6ca797fb3cf74165.gif")
            .setImage("https://media.discordapp.net/attachments/1367451376879407145/1424427133140340838/a_ebd8cdcc0f9e7b19aea2d9ffaf63f1d7.gif");

        // FILA 1
        const row1 = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId("adoptme").setLabel("ᴀᴅᴏᴘᴛ ᴍᴇ").setEmoji("<:emoji:1423892970465132594>").setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId("mm2").setLabel("ᴍᴍ2").setEmoji("<a:emoji_146:1444157442211446887>").setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId("gag").setLabel("ɢᴀɢ").setEmoji("<a:starshy:1436184520163463290>").setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId("sab").setLabel("ꜱᴀʙ").setEmoji("<a:butterflyshy:1436191159222276127>").setStyle(ButtonStyle.Secondary)
        );

        // FILA 2
        const row2 = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId("99nights").setLabel("99 ɴɪɢʜᴛꜱ").setEmoji("<a:Skullguy:1444564802142736445>").setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId("bloxfruits").setLabel("ʙʟᴏx ꜰʀᴜɪᴛꜱ").setEmoji("<:cruz:1444563919527088138>").setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId("fisch").setLabel("ꜰɪꜱᴄʜ").setEmoji("<a:gunlove:1444563665779949590>").setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId("ps99").setLabel("ᴘꜱ99").setEmoji("<a:gunshit:1444572549689376898>").setStyle(ButtonStyle.Secondary)
        );

        // FILA 3
        const row3 = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId("dahood").setLabel("ᴅᴀʜᴏᴏᴅ").setEmoji("<:Nistar:1444563606271295519>").setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId("bladeball").setLabel("ʙʟᴀᴅᴇʙᴀʟʟ").setEmoji("<a:batfly:1444575476935950346>").setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId("jailbreak").setLabel("ᴊᴀɪʟʙʀᴇᴀᴋ").setEmoji("<a:blackworld:1423893376805376040>").setStyle(ButtonStyle.Secondary)
        );

        // Enviar embed principal
        await message.channel.send({ embeds: [embedPrincipal] });

        // Espacio exacto
        await message.channel.send("\u200B");

        // Enviar embed + botones
        await message.channel.send({
            embeds: [embedInfo],
            components: [row1, row2, row3]
        });
    }

  if (message.content === "!sendpanel") {

        // Guardar la categoría del panel
        global.ticketCategory = message.channel.parentId;

        const topImage = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setImage("https://images-ext-1.discordapp.net/external/fCF7XXecyCVrFsiAsRvIe3fLNQukpRxBLCbhx-W3Yr4/%3Fwidth%3D576%26height%3D288/https/images-ext-1.discordapp.net/external/1qrfSndKY0FVypqDi2XPYN7HHSzYtg2RbTkpQSnz25E/%253Fsize%253D512/https/cdn.discordapp.com/banners/686080969018572801/a_e4703171585577d63e74d4284c4123cf.gif?width=576&height=288");

        const panelEmbed = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setTitle(`**─── <:Nistar:1444563606271295519> SUPPORT ───**`)
            .setDescription(`**<:cruz:1444563919527088138> ᴘʟᴇᴀꜱᴇ ᴄʜᴏᴏꜱᴇ ᴀ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ ᴏɴ ᴡʜᴀᴛ ꜱᴜᴘᴘᴏʀᴛ ʏᴏᴜ ɴᴇᴇᴅ**`)
            .setImage("https://media.discordapp.net/attachments/1017600005764284497/1415662667720556587/Tumblr_l_76198603461233.gif?ex=692cd559&is=692b83d9&hm=8ded984aac47264eb3f5a0239e0cd767f3c88ce0edb68b09cff73bec54dcc7f7&=&width=1440&height=79");

        const button = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("open_ticket_options")
                .setLabel("ᴏᴘᴇɴ ᴛɪᴄᴋᴇᴛ")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:emoji:1423892970465132594>")
        );

        await message.channel.send({ embeds: [topImage, panelEmbed], components: [button] });
     }

});

// 🔥 VIDEOS MP4 DIFERENTES
const PC_VIDEO = "https://cdn.discordapp.com/attachments/1424104336409104425/1444926271048913037/How_to_create_ur_fake_links_1_1.mp4?ex=692e7bf4&is=692d2a74&hm=53cc355185a5ec21d42c1ec34104ec7251f53b57b6507793b570a4a49f79bbb3&";
const MOBILE_VIDEO = "https://cdn.discordapp.com/attachments/1424104336409104425/1444926867659427941/1129_1.mp4?ex=692e7c82&is=692d2b02&hm=f10a532bd3ed815dcb36af43ac9f0bdc9439aae4cabf467e22ceb7e6e59147b8&";
const VIDEO_MP4 = "https://cdn.discordapp.com/attachments/1424104336409104425/1444927141190959134/private_tuto.mp4?ex=692e7cc3&is=692d2b43&hm=04f9173ce139bad04e15f291b5017af7062e291cc320a5f8bdf247a38adaf8ab&";
const VIDEO_MP5 = "https://cdn.discordapp.com/attachments/1424104336409104425/1444927578539561122/ScreenRecording_03-26-2025_21-35-28_1_1_1.mp4?ex=692e7d2c&is=692d2bac&hm=9a440896169ce6b88db0d6c38e8e433879d4b558963d40f028bf07bec9d9a4e3&";
const COOKIE_EDITOR_LINK = "https://chromewebstore.google.com/detail/open-cookie-editor/mhelhppllnfkpaboohnijkfjeclehgab?hl=en";
const VIDEO_MP6 = "https://cdn.discordapp.com/attachments/1424104336409104425/1444927809741914232/Screen_Recording_20250326_051910_Yandex_Browser_2_2.mp4?ex=692e7d63&is=692d2be3&hm=3e2d31adfa85280c8d6623209e35dd30082f2f36823f297e68ff2718a5bac16f&";
const COOKIE_EDITOR_LINK_A = "https://chromewebstore.google.com/detail/cookie-editor/iphcomljdfghbkdcfndaijbokpgddeno?hl=en";
const VIDEO_MP7 = "https://cdn.discordapp.com/attachments/1424104336409104425/1444928105247408128/Cookies_pc_tuto.mp4?ex=692e7da9&is=692d2c29&hm=0191b15b8563853a0151cf09b71cb0d1e2127096c3afef7679cc1aa63c13dbdc&";
const COOKIE_EDITOR_LINK_P = "https://chromewebstore.google.com/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm";
const VIDEO_AGE = "https://cdn.discordapp.com/attachments/1424104336409104425/1444928272159736001/1129_1.mp4?ex=692e7dd1&is=692d2c51&hm=5b5c557f85f71162389746b74105243d2e04b6cf64663af3a290473d5fcc895b&";
const VIDEO_SESSION = "https://cdn.discordapp.com/attachments/1424104336409104425/1444928400610431066/Tutorial_.mp4?ex=692e7df0&is=692d2c70&hm=9636494e96d5d51ef05e4de5db6adcc756d7ab58c5966e4466f04479af6a352c&";
// -----------------------------
// SERVERS POR JUEGO
// -----------------------------
const SERVERS = {
    adoptme: [
        "https://discord.gg/trade",
        "https://discord.gg/adoptme",
        "https://discord.gg/adoptmevalues",
        "https://discord.gg/smoblox-squad-733082399520587777",
        "https://discord.com/invite/amv",
        "https://discord.com/invite/adopt",   
        "https://discord.gg/amtv",
        "https://discord.gg/amh",
        "https://discord.gg/kronrbx"
    ],
    mm2: [
        "https://discord.com/invite/mm2",
        "https://discord.gg/supremevalues",
        "https://discord.gg/murdermystery2",
        "https://discord.gg/mm2",
        "https://discord.gg/luger",
        "https://discord.gg/san-s-mm2-1170559872983633981",
        "https://discord.gg/murdermystery"
    ],
    gag: [
        "https://discord.com/invite/growagardens",
        "https://discord.com/invite/growagarden39",
        "https://discord.com/invite/grow-a-garden-trading-1186441401139990580",
        "https://discord.com/invite/growabiggarden",
        "https://discord.com/invite/gaghubb"
    ],
    sab: [
        "https://discord.gg/abrainrot",
        "https://discord.gg/sammy",
        "https://discord.gg/stealbrainrots",
        "https://discord.gg/stealabrainrod",
        "https://discord.gg/fischin",
        "https://discord.gg/stealarot",
        "https://discord.gg/thebrainrot"
    ],
    "99nights": [
        "https://discord.gg/99nightsforest",
        "https://discord.gg/99nightsinforeste",
        "https://discord.gg/99nightintheforest",
        "https://discord.gg/nightsintheforest"
    ],
    bloxfruits: [
        "https://discord.gg/bloxzy",
        "https://discord.com/invite/varietyjay",
        "https://discord.gg/kenrblx",
        "https://discord.gg/bloxuniverse",
        "https://discord.gg/yJtMUucdpV",
        "https://discord.gg/bloxtrade",
        "https://discord.gg/bfts",
        "https://discord.gg/NkWFunW2kc",
        "https://discord.gg/tradings",
        "https://discord.gg/bfts",
        "https://discord.gg/bloxfruits",
        "https://discord.gg/k3cKUBbncT"
    ],
    fisch: [
        "https://discord.gg/9hQBKUEAPU",
        "https://discord.gg/bacha",
        "https://discord.gg/fischplaza"
    ],
    ps99: [
        "https://discord.gg/qhEvBFwDs9",
        "https://discord.gg/Rx4mXe3gmv",
        "https://discord.gg/CGt9f8YAWk",
        "https://discord.gg/T4zx2JmAnh",
        "https://discord.gg/FmfHZfxGQw",
        "https://discord.gg/ps99",
        "https://discord.gg/russoplays",
        "https://discord.gg/alphagg",
        "https://discord.gg/zomg",
        "https://discord.gg/biggames"
    ],
    dahood: [
        "https://discord.com/invite/hoodmodded",
        "https://discord.gg/dht"
    ],
    bladeball: [
        "https://discord.gg/bladeball",
        "https://discord.gg/bladeballtrading",
        "https://discord.gg/gA6n2xQEEZ",
        "https://discord.com/invite/hu9CgvukGz"
    ],
    jailbreak: [
        "https://discord.gg/jailbreak",
        "https://discord.gg/jbvalues",
        "https://discord.gg/jailbreaktrading",
        "https://discord.gg/jailbreaktradingnetwork"
    ]
}

// ====================================================================
// 📌 INTERACTIONS (BOTONES + SERVERS)
// ====================================================================

// ====================================================================
// 📌 CREAR TICKET (MENÚ SELECT)
// ====================================================================
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isButton()) return;

    if (interaction.customId === "open_ticket_options") {

        const setupEmbed = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setImage("https://media.discordapp.net/attachments/1367456715284676668/1426564118625652907/IMG_4793.gif");

        const menu = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId("ticket_type_select")
                .setPlaceholder("ꜱᴇʟᴇᴄᴛ ᴛɪᴄᴋᴇᴛ ᴛʏᴘᴇ...")
                .addOptions([
                    {
                        label: "ʟɪɴᴋꜱ",
                        value: "links",
                        description: "ᴏᴘᴇɴ ᴛɪᴄᴋᴇᴛ ꜰᴏʀ ʜᴇʟᴘ ᴡɪᴛʜ ʟɪɴᴋꜱ",
                        emoji: "<a:emoji_146:1444157442211446887>"
                    },
                    {
                        label: "ᴍᴇᴛʜᴏᴅꜱ",
                        value: "methods",
                        description: "ᴏᴘᴇɴ ᴛɪᴄᴋᴇᴛ ꜰᴏʀ ʜᴇʟᴘ ᴡɪᴛʜ ᴍᴇᴛʜᴏᴅꜱ",
                        emoji: "<a:butterflyshy:1436191159222276127>"
                    },
                    {
                        label: "ᴏᴛʜᴇʀꜱ",
                        value: "others",
                        description: "ᴏᴘᴇɴ ᴛɪᴄᴋᴇᴛ ꜰᴏʀ ᴏᴛʜᴇʀ ʜᴇʟᴘ",
                        emoji: "<a:starshy:1436184520163463290>"
                    }
                ])
        );

        await interaction.reply({ embeds: [setupEmbed], components: [menu], ephemeral: true });
    }
});

// ==========================
// CREAR EL CANAL PRIVADO SEGÚN LA OPCIÓN
// ==========================
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isStringSelectMenu()) return;
    if (interaction.customId !== "ticket_type_select") return;

    const type = interaction.values[0];
    const user = interaction.user;

    const channel = await interaction.guild.channels.create({
        name: `${user.username}-${type}`,
        type: ChannelType.GuildText,
        parent: global.ticketCategory || null,     // ← SE CREA EN LA MISMA CATEGORÍA
        permissionOverwrites: [
            {
                id: interaction.guild.id,
                deny: [PermissionsBitField.Flags.ViewChannel]
            },
            {
                id: user.id,
                allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages]
            },
            {
                id: SUPPORT_ROLE,
                allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages]
            }
        ]
    });

    await interaction.reply({ content: `Your ticket is open: <#${channel.id}>`, ephemeral: true });

    const ticketEmbed = new EmbedBuilder()
        .setColor(0x1e1f22)
        .setTitle("**<:cruz:1444563919527088138> Welcome to Vorvex**")
        .setDescription(`Welcome <@${user.id}>!
Please describe what you need help with and wait for a support member to assist you.`)
        .setImage("https://media.discordapp.net/attachments/1017600005764284497/1415662667720556587/Tumblr_l_76198603461233.gif")
        .setFooter({ text: `Ticket Opened By ${user.username}` });

    const closeButton = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setCustomId("close_ticket")
            .setLabel("ᴄʟᴏꜱᴇ ᴛɪᴄᴋᴇᴛ")
            .setStyle(ButtonStyle.Secondary)   // ← GRIS OSCURO
            .setEmoji("<:emoji:1423892970465132594>")
    );

    // Mención corregida del rol
    await channel.send({ content: `<@&${SUPPORT_ROLE}>`, embeds: [ticketEmbed], components: [closeButton] });
});

// ==========================
// CERRAR EL TICKET
// ==========================
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isButton()) return;
    if (interaction.customId !== "close_ticket") return;

    const channel = interaction.channel;

    await interaction.reply({ content: "Closing ticket in 3 seconds…", ephemeral: true });

    setTimeout(() => {
        channel.delete().catch(() => {});
    }, 3000);
});

client.login(process.env.TOKEN);
