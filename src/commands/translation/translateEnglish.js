const { translateEnglish } = require('../../utils/translator');

module.exports = {
    run: async(client, message, args) => {

        async function translationResults() {
            resultText = await translateEnglish(args);
            message.channel.send(":flag_kr: " + resultText.text);
        }
        translationResults()
    },
    aliases: ['tlen', 'ten'],
    description: 'Translates Korean to English'
}