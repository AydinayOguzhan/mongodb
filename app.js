var mongoose = require('mongoose').mongo.MongoClient
mongoose.connect('mongodb+srv://ahmttnstpe:123456at@cluster0-vnttg.mongodb.net/LiveChatDb',
    { useUnifiedTopology: true, useNewUrlParser: true },
    function (eer, cli) {
        if (!eer) {
            console.log("bağlantı başarılı");

            var dib = cli.db('LiveChatDb');
            dib.collection('users').find({ 'user-name': 'Ahmet Tınastepe' }).toArray(function (er, result) {
                if (er) throw er;

                console.log(result);
            });
        }
        if (eer) {
            throw eer;
        }
    });