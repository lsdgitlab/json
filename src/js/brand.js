// import request from 'request';
// console.log(BigPicture);
import BigPicture from 'bigpicture'
import brandData from './brand-data.json'
console.log('Brand Data =>', brandData);
// import galdata from './wikipedia.js'

window.addEventListener('DOMContentLoaded', () => {
  topheader(0)
  bdrpDwnVal(brandData)
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
  filmSec.innerHTML = filcard;
  // Load more
  // let loadMbtn = document.querySelector('.loadMoreSec button')
  // let currItem = 3
  // loadMbtn.addEventListener('click', () => {
  //   // let boxes = filcard
  //   let boxes = [...document.querySelectorAll('.filmes-card')]
  //   for (var i = currItem; i < currItem + 3; i++) {
  //     // filmSec.innerHTML = boxes
  //     console.log(boxes[i])
  //     filmSec.innerHTML = boxes[i]

  //     // console.log((filmSec.innerHTML = boxes[i]))
  //     boxes[i].style.display = 'inline-block'
  //   }
  //   // currItem += 3

  //   if (currItem >= boxes.length) {
  //     loadMbtn.style.display = 'none'
  //   }
  // })

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

// use for search result
const searchBtn = document.querySelector('#search button')
const output = document.querySelector('.output')
let brDrpdwn = document.getElementById('brandName')

// searchBtn.addEventListener('click', (e) => {
//   bdrpDwnVal(brandData)
//   // console.log('click', brandData)
// })

function bdrpDwnVal(brandData) {
  brandData.forEach((el) => {
    var optn = document.createElement('option')
    // optn.value = el.brandTitle;
    optn.value = `${el.brandTitle}`
    optn.text = `${el.brandTitle}`
    // let option = <option value=' + '${el.brandTitle}' + >' + '${el.brandTitle}' + '</option>'
    brDrpdwn.append(optn)

    // output serach
    // output.innerHTML += `
    // <ul>
    // <li> ${el.brandTitle}</li>
    // <li> ${el.campaign}</li>
    // <li> ${el.award}</li>
    // <li> ${el.status}</li>
    // </ul>`
  })
}

brDrpdwn.onchange = function (){
  console.log("Select Test");
}



// used for video popup
(function () {

  function setClickHandler(id, fn) {
    document.getElementById(id).onclick = fn

  }
  setClickHandler('filmCont', function (e) {
    var className = e.target.className
    if (~className.indexOf('htmlvid')) {
      BigPicture({
        el: e.target,
        vidSrc: e.target.getAttribute('vidSrc'),
      })
    } else if (~className.indexOf('vimeo')) {
      BigPicture({
        el: e.target,
        vimeoSrc: e.target.getAttribute('vimeoSrc'),
      })
    } else if (~className.indexOf('twin-peaks')) {
      BigPicture({
        el: e.target,
        ytSrc: e.target.getAttribute('ytSrc'),
        dimensions: [1226, 900],
      })
    } else if (~className.indexOf('youtube')) {
      console.log("click check");
      BigPicture({
        el: e.target,
        ytSrc: e.target.getAttribute('ytSrc'),
      })
    }
  })
})();

var Youtube = (function () {
  'use strict';

  var video, results;

  var getThumb = function (url, size) {
      if (url === null) {
          return '';
      }
      size    = (size === null) ? 'big' : size;
      results = url.match('[\\?&]v=([^&#]*)');
      video   = (results === null) ? url : results[1];

      if (size === 'small') {
          return 'http://img.youtube.com/vi/' + video + '/2.jpg';
      }
      return 'http://img.youtube.com/vi/' + video + '/0.jpg';
  };

  return {
      thumb: getThumb
  };
}());

//Example of usage:

var thumb = Youtube.thumb('http://www.youtube.com/watch?v=sjWmky2EAkU', 'big');

console.log(thumb);
