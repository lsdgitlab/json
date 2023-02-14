import BigPicture from 'bigpicture'
import brandData from './brand-data.json'

// console.log('Brand NEw', brandData)

function showdata() {
  brandData.forEach(function (el) {
    updateBrandName(el.brandTitle)
  })

  // Show default data

  loadDefault(brandData[0])

  // var defaultBrandData = brandData[0]
  // updateAward(defaultBrandData.award)

  // updateBrandLogoImg(defaultBrandData.brandLogo)
  // defaultBrandData.Film.forEach((films) => {
  //   updateFilmCategory(films)
  // })

  var brandNameDrpDwn = document.getElementById('brandName')
  brandNameDrpDwn.addEventListener('change', () => {
    var selectedBrand = brandNameDrpDwn.value
    var selectedBrandData = brandData.find(function (el) {
      return el.brandTitle === selectedBrand
    })

    // if (selectedBrand) {
    updateAward(selectedBrandData.award)
    updateBrandLogoImg(selectedBrandData.brandLogo)
    updateFilmCategory(selectedBrandData.Film)

    // selectedBrandData.Film.forEach((films) => {
    //   updateFilmCategory(films)
    //   console.log(films)
    // })

    updateBrandTitle(selectedBrandData.brandTitle)
    // }
  })
}

function loadDefault(defaultData) {
  // var defaultData = brandData[0]
  updateBrandLogoImg(defaultData.brandLogo)
  updateAward(defaultData.award)
  updateBrandLogoImg(defaultData.brandLogo)
  updateFilmCategory(defaultData.Film)
  defaultData.Film.forEach((films) => {
    updateFilmCategory(films)
    console.log(films)
  })

  updateBrandTitle(selectedBrandData.brandTitle)
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
}

function updateBrandTitle(brandname) {
  var titleDiv = document.querySelector('.item-title')
  titleDiv.innerHTML = brandname
}

function updateBrandLogoImg(brandImg) {
  let branImgDiv = document.querySelector('.media-logo img')
  branImgDiv.setAttribute('src', brandImg)
}

// var filmContainer = document.getElementById('filmCont')
// function updateFilmCategory(film) {
//   var filmList = filmContainer.innerHTML
//   filmList += `
//   <div class="filmes-card">
//             <div class="image-content">
//             <img src="
//             ${film.filmTumb}
//             " class="tumb" alt="">
//             <div class="top-row">
//             <div class="dimond">
//             <img src="./img/king.png" alt="">
//             </div>
//             <div class="play-btn">
//             <img src="./img/play-btn-small.png" alt="" class="youtube" ytSrc="
//             ${film.filmBig}">
//             </div>
//             </div>
//             </div>
//             <div class="title">
//             ${film.filmHashTag}
//             </div>
//             </div>`
//   filmContainer.innerHTML = filmList
// }

function updateFilmCategory(film) {
  var filmContainer = document.getElementById('filmContent')
  filmContainer.innerHTML = ''
  var filmList = filmContainer.innerHTML
  // for (var i = 0; i < film.length; i++) {
  var flimCount = document.querySelector('.second-title span')

  film.forEach((filmItem) => {
    filmList += `
    <div class="filmes-card">
    <div class="image-content">
    <img src="
    ${filmItem.filmTumb}
    " class="tumb" alt="">
    <div class="top-row">
    <div class="dimond">
    <img src="./img/king.png" alt="">
    </div>
    <div class="play-btn">
    <img src="./img/play-btn-small.png" alt="" class="youtube" ytSrc="
    ${filmItem.filmBig}">
    </div>
    </div>
    </div>
    <div class="title">
    ${filmItem.filmHashTag}
    </div>
    </div>`
  })

  flimCount.innerText = film.length
  filmContainer.innerHTML = filmList
  // }
}
showdata()

// used for video popup
;(function () {
  function setClickHandler(id, fn) {
    document.getElementById(id).onclick = fn
  }
  setClickHandler('filmContent', function (e) {
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
