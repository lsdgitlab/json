import BigPicture from 'bigpicture'
import brandData from './brand-data.json'

// console.log('Brand NEw', brandData)

function showdata() {
  brandData.forEach(function (el) {
    updateBrandName(el.brandTitle)
    // updateAward(el.award)
    // brandLogoImg(el.brandLogo)
    el.Film.forEach((film) => {
      filmCategory(film)
    })
  })
  var brandNameDrpDwn = document.getElementById('brandName')
  brandNameDrpDwn.addEventListener('change', () => {
    // console.log(indexOf)
    var selectedBrand = brandNameDrpDwn.value
    var selectedBrandData = brandData.find(function (el) {
      return el.brandTitle === selectedBrand
    })
    if (selectedBrand) {
      updateAward(selectedBrandData.award)
      updateBrandLogoImg(selectedBrandData.brandLogo)
      updateFilmCategory(selectedBrandData.film)
    }
  })
}
function updateAward(award) {
  var awd = document.querySelector('.awd')
  awd.innerHTML = award + 'Awards'
}

function updateBrandName(brandNames) {
  var brandNameDrpDwn = document.getElementById('brandName')
  var branNameOption = document.createElement('option')
  branNameOption.innerText = brandNames
  branNameOption.setAttribute('value', brandNames)
  brandNameDrpDwn.appendChild(branNameOption)
  var titleDiv = document.querySelector('.item-title')
  titleDiv.innerHTML = brandNames
}

function updateBrandLogoImg(brandImg) {
  let branImgDiv = document.querySelector('.media-logo img')
  branImgDiv.setAttribute('src', brandImg)
}

function updateFilmCategory(film) {
  var filmContainer = document.getElementById('filmCont')
  var filmList = filmContainer.innerHTML
  filmList += `
  <div class="filmes-card">
            <div class="image-content">
            <img src="
            ${film.filmTumb}
            " class="tumb" alt="">
            <div class="top-row">
            <div class="dimond">
            <img src="./img/king.png" alt="">
            </div>
            <div class="play-btn">
            <img src="./img/play-btn-small.png" alt="" class="youtube" ytSrc="
            ${film.filmBig}">
            </div>
            </div>
            </div>
            <div class="title">
            ${film.filmHashTag}
            </div>
            </div>`
  filmContainer.innerHTML = filmList
}

showdata()

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
