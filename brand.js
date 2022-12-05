// import request from 'request';
// console.log(BigPicture);

import brandData from './brand-data.json'
console.log('Brand Data =>', brandData)

window.addEventListener('DOMContentLoaded', () => {
  topheader(0)
  brdrpdwn(0)
  // console.log('The DOM Is Loaded');
  brandData.forEach((el, idx) => {
    // headerData(el)
    // topheader(el)
  })

  // let loadMoreBtn = document.querySelector('.loadMoreSec')
  // let currentItem = 3

  // load more
  // let loadMbtn = document.querySelector('.loadMoreSec button')
  // let currItem = 3
  // loadMbtn.addEventListener('click', () => {
  //   let boxes = [...document.querySelectorAll('.filmes-card')]

  //   for (var i = currItem; i < currItem + 3; i++) {
  //     console.log(boxes[i])
  //     // boxes[i].style.display = 'inline-block'
  //   }

  //   // currItem += 3
  //   if (currItem >= boxes.length) {
  //     loadMbtn.style.display = 'none'
  //   }
  // })
})

function topheader(ele) {
  const brdLogoImg = document.querySelector('.media-logo img')
  brdLogoImg.setAttribute('src', brandData[ele].brandLogo)
  const bradTtl = document.querySelector('.item-title')
  bradTtl.textContent = brandData[ele].brandTitle
  const campaigns = document.querySelector('.item-logo span b')
  campaigns.textContent = brandData[ele].campaign
  const awd = document.querySelector('.awd')
  awd.textContent = brandData[ele].award + ' Awads'

  const filmSec = document.getElementById('filmCont')
  // console.log(filmSec)
  const flmCnt = document.querySelector('#filmSec .second-title span')
  flmCnt.textContent = '(' + brandData[ele].Film.length + ')'
  const smcCatcnt = document.querySelector('#smcSect .second-title span')
  smcCatcnt.innerHTML = '(' + brandData[ele].Category.length + ')'

  let filcard = ''
  brandData[ele].Film.forEach((item, indx) => {
    filcard +=
      '<div class="filmes-card">' +
      '<div class="image-content">' +
      '<img src="' +
      item.filmTumb +
      '" class="tumb" alt="">' +
      '<div class="top-row">' +
      '<div class="dimond">' +
      '<img src="./img/king.png" alt="">' +
      '</div>' +
      '<div class="play-btn">' +
      '<img src="./img/play-btn-small.png" alt="" class="youtube" ytSrc="' +
      item.filmBig +
      '">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="title">' +
      item.filmHashTag +
      '</div>' +
      '</div>'
  })
  // filmSec.innerHTML = filcard

  // Load more
  let loadMbtn = document.querySelector('.loadMoreSec button')
  let currItem = 3
  loadMbtn.addEventListener('click', () => {
    // let boxes = filcard
    let boxes = [...document.querySelectorAll('.filmes-card')]
    for (var i = currItem; i < currItem + 3; i++) {
      // filmSec.innerHTML = boxes
      console.log(boxes[i])
      filmSec.innerHTML = boxes[i]

      // console.log((filmSec.innerHTML = boxes[i]))
      boxes[i].style.display = 'inline-block'
    }
    // currItem += 3

    if (currItem >= boxes.length) {
      loadMbtn.style.display = 'none'
    }
  })

  const smcat = document.getElementById('cateOne')
  let smc = ''
  brandData[ele].Category.forEach((item) => {
    smc +=
      '<div class="filmes-card">' +
      '<div class="image-content">' +
      '<img src="' +
      item.filmTumb +
      '" class="tumb" alt="">' +
      '<div class="top-row">' +
      '<div class="dimond">' +
      '<img src="./img/king.png" alt=""></div>' +
      '<div class="play-btn"><img src="./img/play-btn-small.png" alt=""></div>' +
      '</div>' +
      '</div>' +
      '<div class="title">' +
      item.catHashTag +
      '</div>' +
      '</div>'
  })
  smcat.innerHTML = smc
}
// console.log()

function brdrpdwn(oplist) {
  let listDrpdwn = document.getElementById('brandName')
  var listData = brandData[oplist].brandTitle
  // listData.forEach((el, idx) => {
  //   console.log(listData)
  // })

  for (var i = 0; i > listData.length; i++) {}
}

// let bradInfo = document.getElementById('brandInfo');

// console.log('Search', brandData.brandTitle)
// use for search
const searchBtn = document.querySelector('#search button')
const output = document.querySelector('.output')
let brDrpdwn = document.getElementById('brandName')
// var optn = document.createElement('option')
// optn.value = ''
// optn.text = 'asas'
// brDrpdwn.append(optn)

searchBtn.addEventListener('click', (e) => {
  maker(brandData)
  // console.log('click', brandData)
})

function maker(brandData) {
  brandData.forEach((el) => {
    // optn.value = el.brandTitle
    let option = `'<option value=' + '${el.brandTitle}' + '>' + '${el.brandTitle}' + '</option>'`
    brDrpdwn.append(option)
    console.log(option)
    // for (var i = 0; i < brDrpdwn.length; i++) {
    //   console.log(brDrpdwn[i])
    //   // var optn = '<option>' + `${el.brandTitle}` + '</option>'
    //   // brDrpdwn[i].append(optn)
    // }
    // brDrpdwn.value = `${el.brandTitle}`
    // console.log(brDrpdwn.value = `${el.brandTitle}`);
  })
}
