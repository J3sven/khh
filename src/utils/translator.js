var translator = require('papago-translator-j3').init({
    client_id: process.env.PAPAGO_CLIENT_ID, 
    client_secret: process.env.PAPAGO_CLIENT_SECRET  
});

function translateKorean(message) {
    return new Promise(resolve => {
        resolve(
            translator.translate(message, process.env.PAPAGO_CLIENT_ID, process.env.PAPAGO_CLIENT_SECRET, 'ko', 'en', function(err, res) {
                return res.translatedText
            })
        );
    }); 
}

function translateEnglish(message) {
    return new Promise(resolve => {
        resolve(
            translator.translate(message, process.env.PAPAGO_CLIENT_ID, process.env.PAPAGO_CLIENT_SECRET, 'en', 'ko', function(err, res) {
                return res.translatedText
            })
        );
    }); 
}

module.exports = { translateKorean, translateEnglish };