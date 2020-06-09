const { translateKorean } = require('../../utils/translator');

module.exports = {
    run: async(client, message, args) => {

        async function translationResults() {
            message.channel.send("I am trying ok?");
            resultText = await translateKorean(args);
            message.channel.send(":flag_gb: " + resultText.text);
        }
        translationResults()
    },
    aliases: ['t', 'tl', 'tkr', 'tlkr'],
    description: 'Translates Korean to English'
}