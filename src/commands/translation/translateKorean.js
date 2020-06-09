const { translateKorean } = require('../../utils/translator');

module.exports = {
    run: async(client, message, args) => {
        message.channel.send("I am trying ok?");
        async function translationResults() {
            resultText = await translateKorean(args);
            message.channel.send(":flag_gb: " + resultText.text);
        }
        translationResults()
    },
    aliases: ['t', 'tl', 'tkr', 'tlkr'],
    description: 'Translates Korean to English'
}