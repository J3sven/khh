var translator = require('papago-translator-j3').init({
    client_id: process.env.PAPAGO_CLIENT_ID, 
    client_secret: process.env.PAPAGO_CLIENT_SECRET  
});

function translateKorean(message) {
    return new Promise(resolve => {
        console.log('translating');
        resolve(
            translator.translate(message, process.env.PAPAGO_CLIENT_ID, process.env.PAPAGO_CLIENT_SECRET, 'ko', 'en', function(err, res) {
                console.log("result from bot:" + res.translatedText);
                return res.translatedText
            })
        );
    });

    
    
}

module.exports = { translateKorean };