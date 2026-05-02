import { joinVoiceChannel, getVoiceConnection } from "@discordjs/voice";

export function keepVC(client) {
  const guildId = process.env.VC_GUILD_ID;
  const channelId = process.env.VC_CHANNEL_ID;

  if (!guildId || !channelId) return;

  const guild = client.guilds.cache.get(guildId);
  if (!guild) return;

  const channel = guild.channels.cache.get(channelId);
  if (!channel) return;

  // already joinedனா skip
  const existing = getVoiceConnection(guildId);
  if (existing) return;

  joinVoiceChannel({
    channelId: channelId,
    guildId: guildId,
    adapterCreator: guild.voiceAdapterCreator,
  });

  console.log("✅ Bot joined VC");
}
