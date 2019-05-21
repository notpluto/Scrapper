const axios = require('axios');
const cheerio = require('cheerio');
var fs = require('fs');
var path = require('path');
var userPath = path.join(__dirname, 'data')

const url = 'https://news.ycombinator.com/'


axios.get(url).then(res => {
	getData(res.data)
}).catch(err => console.log(err))

let getData = html => {
	data = [];
	const $ = cheerio.load(html);
	$('table.itemlist tr td:nth-child(3)').each((i, ele) => {
		data.push({
			title: $(ele).text(),
		})
	})
	fs.open(userPath + '/title.js', 'r+', (err, fd) => {
	if(err) return console.log(err);
	fs.ftruncate(fd, 0 , (err) => {
		if(err) return console.log(err);
		fs.writeFile(fd, JSON.stringify(data), (err) => {
			if(err) return console.log(err)
				fs.close(fd, (err) => {
					if(err) return console.log(err)
				})
			})
		})
	})
	console.log(data);
}

