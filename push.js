var shell = require('shelljs')

shell.exec(`git add .`)
shell.exec(`git commit -m 'update'`)
shell.exec(`git push origin master`)