const fs = require('fs');

function writeDataToFile (filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if (err) throw err;
    });
}

function getPostData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk.toString();
            });

            req.on('end', () => {
                resolve(body);
            });
        } catch (error) {
            if (error) throw error;
            reject(error);
        }
    });
}

module.exports = {
    writeDataToFile,
    getPostData
}