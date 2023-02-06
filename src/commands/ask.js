const { SlashCommandBuilder } = require("discord.js");
const gpt = require("../api/gpt");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ask")
    .setDescription("Ask anything to ChatGPT")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("Sua pergunta para o gepeto")
        .setRequired(true)
    ),
  async execute(interaction) {
    await interaction.reply("Deixa eu ve e ja te conto");
    const input = interaction.options.getString("input");
    const response = await gpt.generateText(input);
    const formattedResponse = `\`${input}\`${response}`;
    await interaction.editReply(formattedResponse);
  },
};
