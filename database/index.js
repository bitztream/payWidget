const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost/widget';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MOngo connection error:'));

db.once('open', () => {
  console.log('server using mongoose has connected to database!');
});

const widgetSchema = new mongoose.Schema({
  streamerID: String,
  streamerName: String,
  price: Number,
  itemNames: Array,
  designerName: String,
  imgs: Array,
});

//create collection 'Repo'
const Repo = mongoose.model('Repo', widgetSchema);

const save = (document) => {
  const newDoc = new Repo(document);
  newDoc.save((err) => {
    if (err) {
			console.log('error in saving to database');
		}
		console.log('documents were saved');
	});
};

module.exports.save = save;
