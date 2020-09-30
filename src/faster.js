/* Ecrivez un programme qui determine lequel de ces 4 sites répond le plus rapidement aux rêquetes http

https://www.facebook.com
https://www.amazon.com
https://www.apple.com
https://www.google.com*/

import axios from 'axios'

let data = await Promise.race([
  axios.get('https://www.facebook.com').then(() => 'facebook'),
  axios.get('https://www.amazon.com').then(() => 'amazon'),
  axios.get('https://www.apple.com').then(() => 'apple'),
  axios.get('https://www.google.com').then(() => 'google'),
]).catch((err) => {
  console.error(err)
})
console.log(data) //Checking

//Autre solution alternative :

/* import axios from 'axios'
import chalk from 'chalk'

let response = async (url) => {
    await axios.get(url)
    return new Promise((resolve, reject) => {
        console.log(chalk.green(`Promise résolue pour ${url}`))
        resolve(chalk.red(`${url} chargée en premier`))
    })
}

let data = await Promise.race([
    response('https://www.amazon.com'),
    response('https://www.facebook.com'),
    response('https://www.apple.com'),
    response('https://www.google.com'),
    response('https://soundswitch.com/#buy'),
]).catch((err) => {
    console.error(err)
})
console.log(data)*/