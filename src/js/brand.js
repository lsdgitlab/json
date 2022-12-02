import BigPicture from 'bigpicture'
// import request from 'request';
// console.log(BigPicture);

import brandData from './brand-data.json'
console.log('Brand Data =>', brandData)

window.addEventListener('DOMContentLoaded', () => {
  topheader(0)
  // console.log('The DOM Is Loaded');
  brandData.forEach((el, idx) => {
    // headerData(el)
    // topheader(el)
  })
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

  const filmSec = document.getElementById('filmCont');
  console.log(filmSec);
  const flmCnt = document.querySelector('#filmSec .second-title span')
  flmCnt.textContent = '(' + brandData[ele].Film.length + ')';

  // load more
  let loadMbtn = document.createElement('button');
  loadMbtn.textContent = "Load More";
  // loadMbtn.appendChild(filmSec)
loadMbtn.addEventListener('click', ()=>{
  console.log(loadMbtn);
})

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
      '<img src="./img/play-btn-small.png" alt="" class="youtube" ytSrc="'+ item.filmBig + '">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="title">#Take Off</div>' +
      '</div>'
  })
  filmSec.innerHTML = filcard
}

// use for load more





// use for Bigpicture
(function () {

  function setClickHandler(id, fn) {
    document.getElementById(id).onclick = fn

  }
  setClickHandler('filmCont', function (e) {
    console.log("click");
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
    } else if (~className.indexOf('youtube')) {
      console.log("youtube ==>");
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

