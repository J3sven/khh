const { translateKorean } = require('../../utils/translator');

module.exports = {
    run: async(client, message, args) => {

        async function translationResults() {
            console.log('starting translation');
            resultText = await translateKorean(args);
            message.channel.send(":flag_gb: " + resultText.text);
        }
        translationResults()
    },
    aliases: ['t', 'tl', 'translator'],
    description: 'Translates Korean to English'
}