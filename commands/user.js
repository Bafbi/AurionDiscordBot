const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info!'),
	async execute(interaction) {
        await interaction.reply(`Nom de l'utilisateur : ${interaction.user.username}\nNombre de membre : ${interaction.user.createdAt}`);
	},
};