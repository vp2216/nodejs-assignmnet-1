const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName, fileContent, (err) => {
		console.log(err);
	});
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.readFile(fileName, "utf-8").then((data) => {
		console.log(data);
	}).catch((err) => {
		console.log(err);
	});
}

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName, fileContent, (err) => {
		console.log(err);
	});
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName, (err) => {
		console.log(err);
	});
}


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }