import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
*≡ AB bot  SCRIPT*

 Wa bot group https://chat.whatsapp.com/H3rHrWP2s6oFKBnxbbUEG1

▢ Git : ${_package.homepage}
`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'git', 'script'] 

export default handler
