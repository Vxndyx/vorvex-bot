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

// ID del rol que podrá ver los tickets
const SUPPORT_CHANNEL_ID = "1468337005091094668";
const SUPPORT_ROLE = "1468298093152960776";

client.once("ready", () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isButton()) return;


    if (interaction.customId === "hyperlink_tutorial") {
        return interaction.reply({
            content: `\n${HYPERLINK_VIDEO}`,
            ephemeral: true
        });
    }

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

       if (message.content === "!verify") {

        // -------------- BANNER SUPERIOR --------------
        const bannerEmbed = {
            color: 0x1e1f22,
            image: {
                url: "https://images-ext-1.discordapp.net/external/vbuzgS7dKUib6NoOQ5vNkMa6oyz785B41huWeDdpq8Y/%3Fwidth%3D608%26height%3D302/https/images-ext-1.discordapp.net/external/oZRzezrUgFTOPrQpsV1xoex7eYtoNeD4RIASTcru1l0/%253Fwidth%253D608%2526height%253D302/https/images-ext-1.discordapp.net/external/Mw--UiL5LUbiA8qkkuHqpdpdvhfzaqo7mFVfHiBV8qc/https/pub-db80dcc50c20428991354122e7a058e4.r2.dev/uploads/images/1762231950_87c158f8-b75a-4ecd-86a8-c3caecc52c98.gif?width=608&height=302" // GIF grande de arriba
            }
        };

        // -------------- EMBED PRINCIPAL (TEXTO + BARRA) --------------
        const verifyEmbed = {
            color: 0x1e1f22,
            description: `
<:Invisible:1449077600612913266><:Invisible:1449077600612913266><:Invisible:1449077600612913266><:Invisible:1449077600612913266><:Invisible:1449077600612913266>𓂃 ࣪˖ <a:Amulet:1449077299289915512>
<:Invisible:1449077600612913266> <a:Loveted:1449077823686967426> You get <@&1449054358736998404>
<:Invisible:1449077600612913266><:Invisible:1449077600612913266> <a:Loveted:1449077823686967426> __Press verify to start__
            `,
            image: {
                url: "https://media.discordapp.net/attachments/1017600005764284497/1415662667720556587/Tumblr_l_76198603461233.gif?ex=693ea199&is=693d5019&hm=360cc39d1124867e4722432594c35cad2087369476bd3c7c81c5a4322cf7505f&=&width=1440&height=79" // ← ESTE ES EL GIF DE LA LÍNEA
            }
        };

        // -------------- BOTÓN LINK --------------
        const button = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setStyle(ButtonStyle.Link)
                .setURL("https://discord.com/oauth2/authorize?client_id=1444140477485154386&redirect_uri=https%3A%2F%2Frestorecord.com%2Fapi%2Fcallback&response_type=code&scope=identify+guilds.join&state=1449054358736998403&prompt=none") // A dónde te lleva
                .setLabel("ᴠᴇʀɪꜰʏ") // Texto del botón
                .setEmoji("<:emoji:1449079724440686794>") // Emoji del botón
        );

        // ENVÍO
        await message.channel.send({ embeds: [bannerEmbed] });
        await message.channel.send("‎");
        await message.channel.send({
            embeds: [verifyEmbed],
            components: [button]
        });
    }

  if (message.content === "!linkhider") {
    const bannerEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setImage("https://media.discordapp.net/attachments/1467765239398269111/1468340016379068629/MOSHED-2025-11-28-21-33-5_2.gif?ex=698846f4&is=6986f574&hm=d55139a0216c0c4a7141e3e3de39ed2460c72d494744edb44ccaf8a908968963&=");

    const infoEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setTitle("**───<a:Crossblin:1468301257864380562>ʟɪɴᴋ ʜɪᴅᴇʀ ───**")
      .setThumbnail("https://media.discordapp.net/attachments/1467765239398269111/1469551613453795504/a_9ea1a708e2f91a670af4d496d8a43a2a_1.gif?ex=6988bad7&is=69876957&hm=35acc7b5236d3aba72b314b5e5b4cee2ce271a845612369a36530e16f2880334&=")
      .setDescription(`
        <a:Arrowblack:1468301199416754177> **ʟɪɴᴋ ʜɪᴅᴇʀ ᴡᴇʙꜱɪᴛᴇ ʙᴇʟᴏᴡ**

        <a:Arrowblack:1468301199416754177> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1468337005091094668> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
`)
      .setImage("https://media.discordapp.net/attachments/1467765239398269111/1469551568494788719/a_617d19daf29a13c45ba2eeb48db06f28_1.gif?ex=6988bacc&is=6987694c&hm=5413b3b9937bb44bf6838eaca27eadfab3ca0b2788e0e7cf4f0eb32e77452927&=");

    const buttons = new ActionRowBuilder().addComponents(

      new ButtonBuilder()
        .setURL("https://is.gd/DCEKIJ") // A dónde te lleva
        .setLabel("ʟɪɴᴋ ʜɪᴅᴇʀ")
        .setStyle(ButtonStyle.Link)
        .setEmoji("<:Diamond:1468161035650207774>"),

      new ButtonBuilder()
        .setCustomId("hyperlink_tutorial")
        .setLabel("ᴛᴜᴛᴏʀɪᴀʟ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<a:Starshy:1468508438484222076>")
    );

     await message.channel.send({ embeds: [bannerEmbed] });
    await message.channel.send("‎");
    await message.channel.send({ embeds: [infoEmbed], components: [buttons] });
    }

  if (message.content === "!links") {
    const bannerEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setImage("https://media.discordapp.net/attachments/1467765239398269111/1468340016379068629/MOSHED-2025-11-28-21-33-5_2.gif?ex=698846f4&is=6986f574&hm=d55139a0216c0c4a7141e3e3de39ed2460c72d494744edb44ccaf8a908968963&=");

    const infoEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setTitle("**───<a:Crossblin:1468301257864380562>ʟɪɴᴋꜱ ───**")
      .setThumbnail("https://media.discordapp.net/attachments/1467765239398269111/1469551613453795504/a_9ea1a708e2f91a670af4d496d8a43a2a_1.gif?ex=6988bad7&is=69876957&hm=35acc7b5236d3aba72b314b5e5b4cee2ce271a845612369a36530e16f2880334&=")
      .setDescription(`
        <a:Arrowblack:1468301199416754177> **ᴡᴀᴛᴄʜ ᴛʜᴇ ᴛᴜᴛᴏʀɪᴀʟꜱ ʙᴇʟᴏᴡ ᴅᴇᴘᴇɴᴅɪɴɢ ᴏɴ ʏᴏᴜʀ ᴅᴇᴠɪᴄᴇ**

        <a:Arrowblack:1468301199416754177> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1468337005091094668> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
`)
      .setImage("https://media.discordapp.net/attachments/1467765239398269111/1469551568494788719/a_617d19daf29a13c45ba2eeb48db06f28_1.gif?ex=6988bacc&is=6987694c&hm=5413b3b9937bb44bf6838eaca27eadfab3ca0b2788e0e7cf4f0eb32e77452927&=");

    const buttons = new ActionRowBuilder().addComponents(

      new ButtonBuilder()
        .setCustomId("pc_tutorial")
        .setLabel("ᴘᴄ ᴛᴜᴛᴏʀɪᴀʟ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<:Diamond:1468161035650207774>"),

      new ButtonBuilder()
        .setCustomId("mobile_tutorial")
        .setLabel("ᴍᴏʙɪʟᴇ ᴛᴜᴛᴏʀɪᴀʟ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<a:Starshy:1468508438484222076>")
    );

    await message.channel.send({ embeds: [bannerEmbed] });
    await message.channel.send("‎");
    await message.channel.send({ embeds: [infoEmbed], components: [buttons] });
  }

  if (message.content === "!privates") {
    const bannerEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setImage("https://media.discordapp.net/attachments/1467765239398269111/1468340016379068629/MOSHED-2025-11-28-21-33-5_2.gif?ex=698846f4&is=6986f574&hm=d55139a0216c0c4a7141e3e3de39ed2460c72d494744edb44ccaf8a908968963&=");

    const infoEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setTitle("**───<a:Crossblin:1468301257864380562>ᴘʀɪᴠᴀᴛᴇ ꜱᴇʀᴠᴇʀ ───**")
      .setThumbnail("https://media.discordapp.net/attachments/1467765239398269111/1469551613453795504/a_9ea1a708e2f91a670af4d496d8a43a2a_1.gif?ex=6988bad7&is=69876957&hm=35acc7b5236d3aba72b314b5e5b4cee2ce271a845612369a36530e16f2880334&=")
      .setDescription(`
        <a:Arrowblack:1468301199416754177> **ᴡᴀᴛᴄʜ ᴛʜᴇ ᴛᴜᴛᴏʀɪᴀʟ ʙᴇʟᴏᴡ ꜰᴏʀ ᴘʀɪᴠᴀᴛᴇ ꜱᴇʀᴠᴇʀ ʟɪɴᴋꜱ**
        
        <a:Arrowblack:1468301199416754177> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1468337005091094668> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
`)
      .setImage("https://media.discordapp.net/attachments/1467765239398269111/1469551568494788719/a_617d19daf29a13c45ba2eeb48db06f28_1.gif?ex=6988bacc&is=6987694c&hm=5413b3b9937bb44bf6838eaca27eadfab3ca0b2788e0e7cf4f0eb32e77452927&=");

    // 🔥 SOLO 1 BOTÓN
    const buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tutorial_btn")
        .setLabel("ᴛᴜᴛᴏʀɪᴀʟ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<:Diamond:1468161035650207774>")
    );

    await message.channel.send({ embeds: [bannerEmbed] });
    await message.channel.send("‎");
    await message.channel.send({ embeds: [infoEmbed], components: [buttons] });
  }

  if (message.content === "!cookie-i") {
    const bannerEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setImage("https://media.discordapp.net/attachments/1467765239398269111/1468340016379068629/MOSHED-2025-11-28-21-33-5_2.gif?ex=698846f4&is=6986f574&hm=d55139a0216c0c4a7141e3e3de39ed2460c72d494744edb44ccaf8a908968963&=");

    const infoEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setTitle("**───<a:Crossblin:1468301257864380562>ɪᴘʜᴏɴᴇ ᴄᴏᴏᴋɪᴇ ───**")
      .setThumbnail("https://media.discordapp.net/attachments/1467765239398269111/1469770300647276544/giphy-downsized-large.gif?ex=6988ddc2&is=69878c42&hm=cc6389f32a1539f8d3b514440c89ec32da587d1c0e42a8495e8d0b66307236e1&=")
      .setDescription(`
        <a:Arrowblack:1468301199416754177> **ᴡᴀᴛᴄʜ ᴛʜᴇ ᴛᴜᴛᴏʀɪᴀʟ ʙᴇʟᴏᴡ ꜰᴏʀ ɪᴘʜᴏɴᴇ ᴄᴏᴏᴋɪᴇꜱ**
        
        <a:Arrowblack:1468301199416754177> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1468337005091094668> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
        
      `)
      .setImage("https://media.discordapp.net/attachments/1467765239398269111/1469770318791966740/giphy-2.gif?ex=6988ddc7&is=69878c47&hm=84353cea86c3aaf40e6e7de28b02c4edfabbd0ea04c62dda5358fdb0cc132dd7&=");

    // 🔥 AHORA SON 2 BOTONES
    const buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tutorial_btn_i")
        .setLabel("ᴛᴜᴛᴏʀɪᴀʟ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<:Diamond:1468161035650207774>"),

      new ButtonBuilder()
        .setCustomId("cookie_btn_i")
        .setLabel("ᴄᴏᴏᴋɪᴇ ᴇᴅɪᴛᴏʀ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<a:Starshy:1468508438484222076>")
    );

    await message.channel.send({ embeds: [bannerEmbed] });
    await message.channel.send("‎");
    await message.channel.send({ embeds: [infoEmbed], components: [buttons] });
  }

  if (message.content === "!cookie-a") {
    const bannerEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setImage("https://media.discordapp.net/attachments/1467765239398269111/1468340016379068629/MOSHED-2025-11-28-21-33-5_2.gif?ex=698846f4&is=6986f574&hm=d55139a0216c0c4a7141e3e3de39ed2460c72d494744edb44ccaf8a908968963&=");

    const infoEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setTitle("**───<a:Crossblin:1468301257864380562>ᴀɴᴅʀᴏɪᴅ ᴄᴏᴏᴋɪᴇ ───**")
      .setThumbnail("https://media.discordapp.net/attachments/1467765239398269111/1469770300647276544/giphy-downsized-large.gif?ex=6988ddc2&is=69878c42&hm=cc6389f32a1539f8d3b514440c89ec32da587d1c0e42a8495e8d0b66307236e1&=")
      .setDescription(`
        <a:Arrowblack:1468301199416754177> **ᴡᴀᴛᴄʜ ᴛʜᴇ ᴛᴜᴛᴏʀɪᴀʟ ʙᴇʟᴏᴡ ꜰᴏʀ ᴀɴᴅʀᴏɪᴅ ᴄᴏᴏᴋɪᴇꜱ**
        
        <a:Arrowblack:1468301199416754177> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1468337005091094668> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
        
      `)
      .setImage("https://media.discordapp.net/attachments/1467765239398269111/1469770318791966740/giphy-2.gif?ex=6988ddc7&is=69878c47&hm=84353cea86c3aaf40e6e7de28b02c4edfabbd0ea04c62dda5358fdb0cc132dd7&=");

    // 🔥 AHORA SON 2 BOTONES
    const buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tutorial_btn_a")
        .setLabel("ᴛᴜᴛᴏʀɪᴀʟ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<:Diamond:1468161035650207774>"),

      new ButtonBuilder()
        .setCustomId("cookie_btn_a")
        .setLabel("ᴄᴏᴏᴋɪᴇ ᴇᴅɪᴛᴏʀ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<a:Starshy:1468508438484222076>")
    );

    await message.channel.send({ embeds: [bannerEmbed] });
    await message.channel.send("‎");
    await message.channel.send({ embeds: [infoEmbed], components: [buttons] });
  }

  if (message.content === "!cookie-p") {
    const bannerEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setImage("https://media.discordapp.net/attachments/1467765239398269111/1468340016379068629/MOSHED-2025-11-28-21-33-5_2.gif?ex=698846f4&is=6986f574&hm=d55139a0216c0c4a7141e3e3de39ed2460c72d494744edb44ccaf8a908968963&=");

    const infoEmbed = new EmbedBuilder()
      .setColor(0x1e1f22)
      .setTitle("**───<a:Crossblin:1468301257864380562>ᴘᴄ ᴄᴏᴏᴋɪᴇ ───**")
      .setThumbnail("https://media.discordapp.net/attachments/1467765239398269111/1469770300647276544/giphy-downsized-large.gif?ex=6988ddc2&is=69878c42&hm=cc6389f32a1539f8d3b514440c89ec32da587d1c0e42a8495e8d0b66307236e1&=")
      .setDescription(`
        <a:Arrowblack:1468301199416754177> **ᴡᴀᴛᴄʜ ᴛʜᴇ ᴛᴜᴛᴏʀɪᴀʟ ʙᴇʟᴏᴡ ꜰᴏʀ ᴀɴᴅʀᴏɪᴅ ᴄᴏᴏᴋɪᴇꜱ**
        
        <a:Arrowblack:1468301199416754177> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1468337005091094668> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
        
      `)
      .setImage("https://media.discordapp.net/attachments/1467765239398269111/1469770318791966740/giphy-2.gif?ex=6988ddc7&is=69878c47&hm=84353cea86c3aaf40e6e7de28b02c4edfabbd0ea04c62dda5358fdb0cc132dd7&=");

    // 🔥 AHORA SON 2 BOTONES
    const buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tutorial_btn_p")
        .setLabel("ᴛᴜᴛᴏʀɪᴀʟ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<:Diamond:1468161035650207774>"),

      new ButtonBuilder()
        .setCustomId("cookie_btn_p")
        .setLabel("ᴄᴏᴏᴋɪᴇ ᴇᴅɪᴛᴏʀ")
        .setStyle(ButtonStyle.Secondary)
        .setEmoji("<a:Starshy:1468508438484222076>")
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
            .setImage("https://media.discordapp.net/attachments/1467765239398269111/1468340016379068629/MOSHED-2025-11-28-21-33-5_2.gif?ex=698846f4&is=6986f574&hm=d55139a0216c0c4a7141e3e3de39ed2460c72d494744edb44ccaf8a908968963&="); 
            // ← Reemplaza este link con tu banner glitch


        // -------------------------------------------
        // EMBED 2 — Info, thumbnail y banner
        // -------------------------------------------
        const embedInfo = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setTitle("**───<a:Crossblin:1468301257864380562>ᴀɢᴇ ᴄʜᴀɴɢᴇʀ ───**")
            .setThumbnail("https://media.discordapp.net/attachments/1467765239398269111/1469772382234349870/a_56e10ea4fd44a9ef520835bb1f8861f5.gif?ex=6988dfb2&is=69878e32&hm=4f298323b2d875053077f7ee042ebbb335f96d50bf4102482a738d100e965839&=") 
            .setDescription(`
            <a:Arrowblack:1468301199416754177> **ᴛʜɪꜱ ꜱᴇᴛᴛɪɴɢ ᴄʜᴀɴɢᴇꜱ ᴛʜᴇ ᴀᴄᴄᴏᴜɴᴛ ᴀɢᴇ ꜰʀᴏᴍ 13+ ᴛᴏ ᴜɴᴅᴇʀ 13. ᴀꜰᴛᴇʀ ᴛʜɪꜱ, ʏᴏᴜ ᴀʀᴇ ᴀʙʟᴇ ᴛᴏ ᴄʜᴀɴɢᴇ ᴛʜᴇ ᴇᴍᴀɪʟ ᴀɴᴅ ᴘᴀꜱꜱᴡᴏʀᴅ. ᴡᴀᴛᴄʜ ᴛʜᴇ ᴛᴜᴛᴏʀɪᴀʟ ʙᴇʟᴏᴡ ꜰᴏʀ ᴛʜᴇ ꜱᴛᴇᴘꜱ.**

            <a:Arrowblack:1468301199416754177> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1468337005091094668> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
`)
            .setImage("https://media.discordapp.net/attachments/1467765239398269111/1469772430519308339/a_54b4ce47e3f37e2012ce023a9ddba69f.gif?ex=6988dfbe&is=69878e3e&hm=1e1a47c4dfdda0166b2e561bd998c6f7b931d2962ca7dcee204ae588a962f216&="); 
            // ← Reemplaza con tu banner inferior


        // -------------------------------------------
        // BOTÓN — TUTORIAL
        // -------------------------------------------
        const botones = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("tutorial_agechanger")
                .setLabel("ᴛᴜᴛᴏʀɪᴀʟ")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:Diamond:1468161035650207774>")
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
            .setImage("https://media.discordapp.net/attachments/1467765239398269111/1468340016379068629/MOSHED-2025-11-28-21-33-5_2.gif?ex=698846f4&is=6986f574&hm=d55139a0216c0c4a7141e3e3de39ed2460c72d494744edb44ccaf8a908968963&="); 
            // ← Reemplaza este link con tu banner glitch


        // -------------------------------------------
        // EMBED 2 — Info, thumbnail y banner
        // -------------------------------------------
        const embedInfo = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setTitle("**───<a:Crossblin:1468301257864380562>ꜱᴇꜱꜱɪᴏɴ ꜱᴇᴄᴜʀᴇ ───**")
            .setThumbnail("https://media.discordapp.net/attachments/1467765239398269111/1469772382234349870/a_56e10ea4fd44a9ef520835bb1f8861f5.gif?ex=6988dfb2&is=69878e32&hm=4f298323b2d875053077f7ee042ebbb335f96d50bf4102482a738d100e965839&=") 
            .setDescription(`
            <a:Arrowblack:1468301199416754177> **ᴛʜɪꜱ ꜱᴇᴛᴛɪɴɢ ꜰᴏʀᴄᴇꜱ ᴀᴜᴛʜᴇɴᴛɪᴄᴀᴛɪᴏɴ ᴀɴᴅ ɢɪᴠᴇꜱ ʏᴏᴜ ꜰᴜʟʟ ᴀᴄᴄᴏᴜɴᴛ ᴀᴄᴄᴇꜱꜱ ʙʏ ꜱᴇɴᴅɪɴɢ ᴛʜᴇ ꜱᴇꜱꜱɪᴏɴ ᴜʀʟ ᴀɴᴅ ꜱᴇꜱꜱɪᴏɴ ᴋᴇʏ (ᴀᴜᴛʜᴇɴᴛɪᴄᴀᴛᴏʀ ꜱᴇᴄʀᴇᴛ). ᴡᴀᴛᴄʜ ᴛʜᴇ ᴛᴜᴛᴏʀɪᴀʟ ʙᴇʟᴏᴡ ꜰᴏʀ ᴛʜᴇ ꜱᴛᴇᴘꜱ.**

            <a:Arrowblack:1468301199416754177> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1468337005091094668> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
`)
            .setImage("https://cdn.discordapp.com/attachments/1467765239398269111/1469772430519308339/a_54b4ce47e3f37e2012ce023a9ddba69f.gif?ex=6988dfbe&is=69878e3e&hm=1e1a47c4dfdda0166b2e561bd998c6f7b931d2962ca7dcee204ae588a962f216"); 
            // ← Reemplaza con tu banner inferior


        // -------------------------------------------
        // BOTÓN — TUTORIAL
        // -------------------------------------------
        const botones = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("tutorial_session")
                .setLabel("ᴛᴜᴛᴏʀɪᴀʟ")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:Diamond:1468161035650207774>")
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
            .setImage("https://media.discordapp.net/attachments/1467765239398269111/1468340016379068629/MOSHED-2025-11-28-21-33-5_2.gif?ex=698846f4&is=6986f574&hm=d55139a0216c0c4a7141e3e3de39ed2460c72d494744edb44ccaf8a908968963&=");

        // EMBED 2 — Info
        const embedInfo = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setTitle("**───<a:Crossblin:1468301257864380562>ꜱᴇʀᴠᴇʀꜱ ───**")
            .setDescription(`
            <a:Arrowblack:1468301199416754177> **ᴄʟɪᴄᴋ ᴛʜᴇ ʙᴜᴛᴛᴏɴꜱ ʙᴇʟᴏᴡ ꜰᴏʀ ꜱᴇʀᴠᴇʀ ɪɴᴠɪᴛᴇ ʟɪɴᴋꜱ**

            <a:Arrowblack:1468301199416754177> **ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1468337005091094668> ɪꜰ ᴜ ꜱᴛɪʟʟ ɴᴇᴇᴅ ʜᴇʟᴘ**
            `)
            .setThumbnail("https://media.discordapp.net/attachments/1467765239398269111/1469773620220788899/a_4589025142faaffc6ca797fb3cf74165_1.gif?ex=6988e0da&is=69878f5a&hm=aaa5b8dd5ddc489fa3e6eb409241471f5cd1ad7e6ae0b4efd08da68bd06d0bea&=")
            .setImage("https://media.discordapp.net/attachments/1467765239398269111/1469773653909573766/a_ebd8cdcc0f9e7b19aea2d9ffaf63f1d7_1.gif?ex=6988e0e2&is=69878f62&hm=4730a70147ef329c3cbbb63d3ce8ca7953b10002ec1402b84cb9ee2a2866918f&=");

        // FILA 1
        const row1 = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId("adoptme").setLabel("ᴀᴅᴏᴘᴛ ᴍᴇ").setEmoji("<:Diamond:1468161035650207774>").setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId("mm2").setLabel("ᴍᴍ2").setEmoji("<a:Crossblin:1468301257864380562>").setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId("gag").setLabel("ɢᴀɢ").setEmoji("<a:Starshy:1468508438484222076>").setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId("sab").setLabel("ꜱᴀʙ").setEmoji("<a:Butterflyes:1468491366139957442>").setStyle(ButtonStyle.Secondary)
        );

        // FILA 2
        const row2 = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId("99nights").setLabel("99 ɴɪɢʜᴛꜱ").setEmoji("<a:Skullguy:1469549025236750386>").setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId("bloxfruits").setLabel("ʙʟᴏx ꜰʀᴜɪᴛꜱ").setEmoji("<:Cruz:1468160956675657818>").setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId("fisch").setLabel("ꜰɪꜱᴄʜ").setEmoji("<a:Gunlove:1468491275870146675>").setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId("ps99").setLabel("ᴘꜱ99").setEmoji("<a:Gunshit:1469549567174377662>").setStyle(ButtonStyle.Secondary)
        );

        // FILA 3
        const row3 = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId("dahood").setLabel("ᴅᴀʜᴏᴏᴅ").setEmoji("<:Starnin:1468160343091056771>").setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId("bladeball").setLabel("ʙʟᴀᴅᴇʙᴀʟʟ").setEmoji("<a:Batty:1469549317424681067>").setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId("jailbreak").setLabel("ᴊᴀɪʟʙʀᴇᴀᴋ").setEmoji("<a:Blackworld:1469548940830445649>").setStyle(ButtonStyle.Secondary)
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

        const topImage = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setImage("https://media.discordapp.net/attachments/1467765239398269111/1469776199067631637/a_e4703171585577d63e74d4284c4123cf.gif?ex=6988e340&is=698791c0&hm=2d3b8bab491f969b0dac15abdb169e162ae2bcc64ce19f7bbaf579036d9f80fa&=");

        const panelEmbed = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setTitle("**─── <:Starnin:1468160343091056771> SUPPORT ───**")
            .setDescription("**<:Cruz:1468160956675657818> ᴘʟᴇᴀꜱᴇ ᴄʜᴏᴏꜱᴇ ᴀ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ ᴏɴ ᴡʜᴀᴛ ꜱᴜᴘᴘᴏʀᴛ ʏᴏᴜ ɴᴇᴇᴅ**")
            .setImage("https://cdn.discordapp.com/attachments/1467765239398269111/1468353882311884933/monchrome.gif?ex=698853de&is=6987025e&hm=77fa6c7fcf81a4152c7daf47688e78e90acadb349c172a9cbd6adbf0101e45e8&");

        const button = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("open_ticket_options")
                .setLabel("ᴏᴘᴇɴ ᴛɪᴄᴋᴇᴛ")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:Diamond:1468161035650207774>")
        );

        await message.channel.send({
            embeds: [topImage, panelEmbed],
            components: [button]
        });
    }
});

// 🔥 VIDEOS MP4 DIFERENTES
const HYPERLINK_VIDEO = "https://cdn.discordapp.com/attachments/1467765239398269111/1469755391633129543/Link_hider_tutorial.mp4?ex=6988cfe0&is=69877e60&hm=662cc6f8c482bc125eae7cd7c5bca68af4bd92ecc239f0499a6fc56f96f91215&";
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

    // BOTÓN OPEN TICKET
    if (interaction.isButton() && interaction.customId === "open_ticket_options") {

        const embed = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setImage("https://media.discordapp.net/attachments/1467765239398269111/1469777116689207458/IMG_4793.gif?ex=6988e41b&is=6987929b&hm=7e4d9b94e7d58f22c9a6e8d1ee5f099ade8dcffb49aaf0558f260b9a85b46247&=");

        const menu = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId("ticket_type_select")
                .setPlaceholder("ꜱᴇʟᴇᴄᴛ ᴛɪᴄᴋᴇᴛ ᴛʏᴘᴇ...")
                .addOptions([
                    { label: "ʟɪɴᴋꜱ", value: "links", description: "ᴏᴘᴇɴ ᴛɪᴄᴋᴇᴛ ꜰᴏʀ ʜᴇʟᴘ ᴡɪᴛʜ ʟɪɴᴋꜱ", emoji:"<a:Crossblin:1468301257864380562>" },
                    { label: "ᴍᴇᴛʜᴏᴅꜱ", value: "methods", description: "ᴏᴘᴇɴ ᴛɪᴄᴋᴇᴛ ꜰᴏʀ ʜᴇʟᴘ ᴡɪᴛʜ ᴍᴇᴛʜᴏᴅꜱ", emoji:"<a:Butterflyes:1468491366139957442>" },
                    { label: "ᴏᴛʜᴇʀꜱ", value: "others", description: "ᴏᴘᴇɴ ᴛɪᴄᴋᴇᴛ ꜰᴏʀ ᴏᴛʜᴇʀ ʜᴇʟᴘ", emoji:"<a:Starshy:1468508438484222076>" }
                ])
        );

        await interaction.reply({
            embeds: [embed],
            components: [menu],
            ephemeral: true
        });
    }

    // SELECT MENU
    if (interaction.isStringSelectMenu() && interaction.customId === "ticket_type_select") {

        const user = interaction.user;
        const type = interaction.values[0];

        const supportChannel = interaction.guild.channels.cache.get(SUPPORT_CHANNEL_ID);
        const categoryId = supportChannel.parentId;

        const channel = await interaction.guild.channels.create({
            name: `${user.username}-${type}`,
            type: ChannelType.GuildText,
            parent: categoryId,
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

        await interaction.reply({
            content: `Your ticket is open: <#${channel.id}>`,
            ephemeral: true
        });

        const ticketEmbed = new EmbedBuilder()
            .setColor(0x1e1f22)
            .setTitle("**<:Cruz:1468160956675657818> Welcome to Vorvex**")
            .setDescription(`Welcome <@${user.id}>\nPlease describe what you need help with and wait for a support member to assist you.`)
            .setImage("https://cdn.discordapp.com/attachments/1467765239398269111/1468353882311884933/monchrome.gif?ex=698853de&is=6987025e&hm=77fa6c7fcf81a4152c7daf47688e78e90acadb349c172a9cbd6adbf0101e45e8&") // 👈 línea animada
            .setFooter({
  text: `Ticket opened by ${user.username}`, // Texto que aparece
  iconURL: client.user.displayAvatarURL({ dynamic: true, size: 64 }) // Imagen del bot
});

        const closeBtn = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("close_ticket")
                .setLabel("ᴄʟᴏꜱᴇ ᴛɪᴄᴋᴇᴛ")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:Diamond:1468161035650207774>")
        );

        await channel.send({
            content: `<@&${SUPPORT_ROLE}>`,
            embeds: [ticketEmbed],
            components: [closeBtn]
        });
    }

    // CLOSE TICKET
    if (interaction.isButton() && interaction.customId === "close_ticket") {
        await interaction.reply({ content: "Closing ticket...", ephemeral: true });
        setTimeout(() => interaction.channel.delete().catch(() => {}), 3000);
    }
});

client.login(process.env.TOKEN);
