const express = require('express');
// const someData = require('seedData')

const app = express();
const port = 3000;

app.use(express.static('./client/dist'));

app.get('/getStarted', (req, res) => {
	/* ask for data from database
	data.getFiles((err, data) {
		//data is top ten users
		if (er) {
			console.log('got error from server)
		} else {
			res.send(data)
		}
	} )
	*/
});

// app.get('/getUser', (req, res) => {
// )

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
