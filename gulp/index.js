const fs        =require('fs')  /* file sistema bilan ishlaydi, Node.js ni ozida bor */

const path      = './gulp/tasks'
const arrayPathFile  = fs.readdirSync(path)
                            .map(file => `${path}/${file}`)
// console.log(arrayPathFile)

module.exports = arrayPathFile


// fs.mkdirSync('gruppa')
// fs.rmdirSync('gruppa')


// fs.writeFile('index.html', '<h1>Salom</h1>', 'utf-8', (err) => {
//     if(err) return console.log(err)
//     console.log('file yasaldi')
// })