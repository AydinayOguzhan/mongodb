var mongoose = require('mongoose').mongo.MongoClient
mongoose.connect('mongodb+srv://dbUser:12345@cluster0-hx765.mongodb.net/buDatabase',
    { useUnifiedTopology: true, useNewUrlParser: true },
    function (eer, cli) {
        if (!eer) {
            console.log("bağlantı başarılı");

            var dib = cli.db('buDatabase');
            var buCol= dib.collection('buCollection');
            
           // buCol.insertOne( { ad: "murat", soyad:"veli", no:2222 } );
           // buCol.deleteOne({ad:"ali"});
           // buCol.updateOne({no:1525, $set:{ad:"veli",soyad:"meli"}})

            buCol.find({}).toArray(function (er, result) {
                if (er) throw er;
                console.log(result);
            });
        }
        if (eer) {
            throw eer;
        }
    });