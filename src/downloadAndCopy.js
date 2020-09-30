/* Ecrivez un programme qui télécharge une page d'un site internet puis la copie dans un fichier. 
L'url du site ainsi que le nom du ficher où sera copié la page téléchargée devront être passés en 
arguments de la ligne de commande.*/

import fs from 'fs/promises'
import axios from 'axios'

if (process.argv.length !== 4) {
  console.log(`usage: node downloadAndCopy.js url file`)
  process.exit(1)
}

try {
  let url = process.argv[2]
  let file = process.argv[3]
  let response = await axios.get(url)
  let content = response.data
  await fs.writeFile(file, content)
} catch (e) {
  console.error(e)
}

// 2éme solution
/*import axios from 'axios'
import fs from 'fs/promises'

let htmlContent = (await axios.get(process.argv[3])).data //Récupere la data avec le process.argv[3]

await fs.writeFile(process.argv[2], htmlContent) // Créera un fichier avec les data HTML en SRC

console.log(
    `L'adresse ${process.argv[3]} à bien était copié dans un nouveau fichier.`
) // Checking*/