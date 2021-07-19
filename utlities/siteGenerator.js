const fs = require('fs');
const { resolve } = require('path');


const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dir/index.html', fileContent, err => {
            if (err){
                reject(err);
                return; 
            }
            resolve({
                ok:true, 
                message: 'Your file has been successfully generated!'
            });
        });
    });    
};

const copyFile = () => {
    return new Promise((resolve,reject) => {
        fs.copyFile('./src/style.css', './dir/style.css', err => {
            if (err){
                reject(err);
                return; 
            }
            resolve({
                ok: true, 
                message: 'Your style sheet has been successfully copied!'
            });
        });
    });
};

module.exports = {writeFile, copyFile}; 