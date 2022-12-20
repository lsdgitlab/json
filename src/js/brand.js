import BigPicture from 'bigpicture'
import brandData from './brand-data.json'
console.log('Brand Data =>', brandData)

window.addEventListener('DOMContentLoaded', () => {
  topheader(0)
  brandDrpDwn(brandData)
  uCat(0)

  brDrpdwn.addEventListener('change', function () {
    topheader(this.selectedIndex)
    uCat(this.selectedIndex)
    console.log('SELECTED iNDEX', this.selectedIndex)
  })
})

let brDrpdwn = document.getElementById('brandName')

function brandDrpDwn(brandData) {
  brandData.forEach((el) => {
    var optn = document.createElement('option')
    optn.value = `${el.brandTitle}`
    optn.text = `${el.brandTitle}`
    brDrpdwn.append(optn)
  })
}

function topheader(ele, idx) {
  const brdLogoImg = document.querySelector('.media-logo img')
  brdLogoImg.setAttribute('src', brandData[ele].brandLogo)
  const bradTtl = document.querySelector('.item-title')
  bradTtl.textContent = brandData[ele].brandTitle

  const campaigns = document.querySelector('.item-logo span b')
  campaigns.textContent = brandData[ele].campaign
  const awd = document.querySelector('.awd')
  awd.textContent = brandData[ele].award + ' Awads'
  // window.history.pushState(
  //   { pageTitle: brandData[ele].brandTitle },'',
  //   brandData[ele].alias
  // )
  const filmSec = document.getElementById('filmCont')
  // console.log(filmSec)
  const flmCnt = document.querySelector('#filmSec .second-title span')
  flmCnt.textContent = '(' + brandData[ele].Film.length + ')'
  const smcCatcnt = document.querySelector('#smcSect .second-title span')
  smcCatcnt.innerHTML = '(' + brandData[ele].Category.length + ')'
  const smcat = document.getElementById('cateOne')
 
  let loadMbtn = document.querySelector('.loadMoreSec button')
  loadMbtn.addEventListener('click', () => {
    filmItemInx()
  })

  filmItemInx()
  function filmItemInx() {
    let filcard = filmSec.innerHTML
    var filmIndx = document.querySelectorAll('#filmCont .filmes-card').length
    // console.log(filmIndx)

    for (var i = 0; i < 3; i++) {
      var item = brandData[ele].Film[filmIndx]

      filmIndx++
      // console.log(filmIndx)
      switch (item.type) {
        case 'youtube':
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
          break
        case 'htmlvid':
        default:
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
            '<img src="./img/play-btn-small.png" alt="" class="htmlvid" vidSrc="' +
            item.filmBig +
            '">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="title">' +
            item.filmHashTag +
            '</div>' +
            '</div>'
          break
      }

      if (filmIndx >= brandData[ele].Film.length) {
        loadMbtn.style.display = 'none'
      }
    }
    filmSec.innerHTML = filcard
  }

   // load more category
   const smcLoadM = document.querySelector('#catLoadmore button')
  smcLoadM.addEventListener('click', () => {
    smcItemIdx()
  })
console.log("Category =>",brandData[ele].Category.length);
  smcItemIdx()
  function smcItemIdx() {
    let smcCard = smcat.innerHTML
    var smcIndex = document.querySelectorAll('#smcSect .filmes-card').length
    for (var n = 0; n < 4; n++) {
      let item = brandData[ele].Category[smcIndex]
      // console.log(item);
      smcIndex++

      switch (item.type) {
        case 'youtube':
          smcCard +=
            '<div class="filmes-card">' +
            '<div class="image-content">' +
            '<img src="' +
            item.filmTumb +
            '" class="tumb" alt="">' +
            '<div class="top-row">' +
            '<div class="dimond">' +
            '<img src="./img/king.png" alt=""></div>' +
            '<div class="play-btn"><img src="./img/play-btn-small.png" class="youtube" ytSrc="' +
            item.filmBig +
            '"></div>' +
            '</div>' +
            '<div class="title">' +
            item.catHashTag +
            '</div>' +
            '</div>' +
            '</div>'
          break
        case 'htmlvid':
        default:
          smcCard +=
            '<div class="filmes-card">' +
            '<div class="image-content">' +
            '<img src="' +
            item.filmTumb +
            '" class="tumb" alt="">' +
            '<div class="top-row">' +
            '<div class="dimond">' +
            '<img src="./img/king.png" alt=""></div>' +
            '<div class="play-btn"><img src="./img/play-btn-small.png" class="htmlvid" vidSrc="' +
            item.filmBig +
            '">' +
            '</div>' +
            '</div>' +
            '<div class="title">' +
            item.catHashTag +
            '</div>' +
            '</div>' +
            '</div>'
          break
      }
      if (smcIndex >= brandData[ele].Category.length) {
        smcLoadM.style.display = 'none'
      }
    }
    smcat.innerHTML = smcCard
  }
}
// console.log()

function brdrpdwn(oplist) {
  let listDrpdwn = document.getElementById('brandName')
  var listData = brandData[oplist].brandTitle
  for (var i = 0; i > listData.length; i++) {}
}

// use for UCATE

const uCatSec = document.getElementById('uCategory')
const ucatCount = document.querySelector('.ui-ux-section .second-title span')
console.log(brandData[0].uCate.length)
ucatCount.textContent = '(' + brandData[0].uCate.length + ')'

function uCat(el) {
  let uCat = ''
  brandData[el].uCate.forEach((item, idx) => {
    // console.log('UCat =>', item.uCateMainTitle)
    uCat +=
      '<div class="item">' +
      '<div class="art-card">' +
      '<article class="info-web">' +
      '<p class="inf-title">' +
      item.uCateMainTitle +
      '</p>' +
      '<div class="sub-title">' +
      item.uCateDesc +
      '</div>' +
      '<div class="di-flex sub-title link-box" >' +
      '<a href="' +
      item.uCateCaseStUrl +
      '" class="red-text">Case study</a>| ' +
      '<a href="' +
      item.uCateWebUrl +
      '">Visit Website</a>' +
      '</div>' +
      '</article>' +
      '<div class="image-container">' +
      '<img class="web-thumb" src="' +
      item.uCateScreenshot +
      '" alt="">' +
      '</div>' +
      '</div>' +
      '</div>'
    // const
  })
  uCatSec.innerHTML = uCat
}

// used for video popup
;(function () {
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
      console.log('click check')
      BigPicture({
        el: e.target,
        ytSrc: e.target.getAttribute('ytSrc'),
      })
    }
  })
  setClickHandler('smcSect', function (e) {
    var className = e.target.className
    if (~className.indexOf('htmlvid')) {
      BigPicture({
        el: e.target,
        vidSrc: e.target.getAttribute('vidSrc'),
      })
    } else if (~className.indexOf('youtube')) {
      console.log('click check')
      BigPicture({
        el: e.target,
        ytSrc: e.target.getAttribute('ytSrc'),
      })
    }
  })
})()

var Youtube = (function () {
  'use strict'

  var video, results

  var getThumb = function (url, size) {
    if (url === null) {
      return ''
    }
    size = size === null ? 'big' : size
    results = url.match('[\\?&]v=([^&#]*)')
    video = results === null ? url : results[1]

    if (size === 'small') {
      return 'http://img.youtube.com/vi/' + video + '/2.jpg'
    }
    return 'http://img.youtube.com/vi/' + video + '/0.jpg'
  }

  return {
    thumb: getThumb,
  }
})()

//Example of usage:

var thumb = Youtube.thumb('http://www.youtube.com/watch?v=sjWmky2EAkU', 'big')

console.log(thumb)

// use for scroll nav
// get all section Id defined
const blocks = document.querySelectorAll('section[id]')
const headerTop = document.querySelector('.brand-info-section').offsetHeight
const navFx = document.querySelector('nav')
const winscroll = window.scrollTop
console.log('Height', headerTop)

window.addEventListener('scroll', navHighlight)

navHighlight()

function navHighlight() {
  // get cuurent scroll position
  let scrollY = window.pageYOffset

  if (scrollY > 300) {
    navFx.classList.add('fixed')
  } else {
    navFx.classList.remove('fixed')
  }

  blocks.forEach((current) => {
    const secHeight = current.offsetHeight
    const secTop = current.offsetTop - 276
    const secId = current.getAttribute('id')
    // console.log("Id =>",secId);

    if (scrollY > secTop && scrollY <= secTop + secHeight) {
      document
        .querySelector('.sticky-nav .container a[href*=' + secId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('.sticky-nav a[href*=' + secId + ']')
        .classList.remove('active')
    }
  })
}

// const block = document.querySelector('.sectn')

//history push in webpack, custom url in webpack es6
