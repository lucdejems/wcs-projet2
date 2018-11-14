// 1 - Import de puppeteer
const puppeteer = require('puppeteer')

/*
// 2 - Récupération des URLs de toutes les pages à visiter
- waitFor("body"): met le script en pause le temps que la page se charge
- document.querySelectorAll(selector): renvoie tous les noeuds qui vérifient le selecteur
- [...document.querySelectorAll(selector)]: caste les réponses en tableau
- Array.map(link => link.href): récupère les attributs href de tous les liens
*/
const getAllUrl = async browser => {
  const page = await browser.newPage()
  await page.goto('http://books.toscrape.com/')
  await page.waitFor('body')
  const result = await page.evaluate(() =>
    [...document.querySelectorAll('.product_pod a')].map(link => link.href),
  )
  return result
}

// 3 - Récupération du prix et du tarif d'un livre à partir d'une url (voir exo #2)
const getDataFromUrl = async (browser, url) => {
  const page = await browser.newPage()
  await page.goto(url)
  await page.waitFor('body')
  return page.evaluate(() => {
    let title = document.querySelector('h1').innerText
    let price = document.querySelector('.price_color').innerText
    return { title, price }
  })
}

/*
// 4 - Fonction principale : instanciation d'un navigateur et renvoi des résultats
- urlList.map(url => getDataFromUrl(browser, url)):
appelle la fonction getDataFromUrl sur chaque URL de `urlList` et renvoi un tableau

- await Promise.all(promesse1, promesse2, promesse3):
bloque de programme tant que toutes les promesses ne sont pas résolues
*/
const scrap = async () => {
  const browser = await puppeteer.launch({ headless: false })
  const urlList = await getAllUrl(browser)
  const results = await Promise.all(
    urlList.map(url => getDataFromUrl(browser, url)),
  )
  browser.close()
  return results
}

// 5 - Appel la fonction `scrap()`, affichage les résulats et catch les erreurs
scrap()
  .then(value => {
    console.log(value)
  })
  .catch(e => console.log(`error: ${e}`))
