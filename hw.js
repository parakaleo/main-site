const glob = require('glob')
const fs = require('fs')
const path = require('path')
const pretty = require('pretty')

glob("**/*.html", {
  ignore: [
    'node_modules/**',
    'www.parakaleo.org/**'
  ]
}, function (er, files) {
  console.log(files)
  files.forEach(file => {
    const pathname = path.join(__dirname, file)
    const html = fs.readFileSync(pathname, 'utf8')
    fs.writeFileSync(pathname, pretty(html, { ocd: true }))
  })
  console.log('done')
})

