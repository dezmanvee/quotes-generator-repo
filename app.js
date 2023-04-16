//Import data from module

import {quotes} from './quoteData.js'

const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author');
const btnElement = document.getElementById('quote-btn');

const quotesGenerator = () => {
    //Generate random numbers from array of quotedata
    let i = Math.floor(Math.random() * quotes.length)
    quoteElement.innerText = quotes[i].quote
    authorElement.innerText = quotes[i].author
}
btnElement.onclick = quotesGenerator