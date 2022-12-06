import BigPicture from 'bigpicture'
// import request from 'request';
// console.log(BigPicture);

import brandData from './brand-data.json'
console.log('Brand Data =>', brandData)

window.addEventListener('DOMContentLoaded', () => {
  topheader(0);
  drpdwnTitle(0)
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
  const flmCnt = document.querySelector('#filmSec .second-title span');
  // console.log(flmCnt);
  flmCnt.textContent = '(' + brandData[ele].Film.length + ')';

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
  filmSec.innerHTML = filcard;


}

  // use for dropdown
  function drpdwnTitle(e){
    let brDrpdwn = document.getElementById('brandName');
    let brdName = brandData[e].brandTitle;
    // for(var i = 0; i< brdName.length; i++){
      
    //   // console.log(brdName[i]);
    // }
    // brDrpdwn.forEach((item)=>{
    //   // console.log(item.brdName);
    //   console.log("Options =>",brDrpdwn[item].value = brdName);
    // })
    for(var i =0; i < brDrpdwn.length; i++){
      console.log("Options =>");
      // console.log('<li>'+ brDrpdwn[i] +'</li>');
      // console.log(brDrpdwn[i]);

    }

  }



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
console.log("Search",brandData.brandTitle);
// use for search
const searchBtn = document.querySelector('#search button');
const output = document.querySelector('.output');
let brDrpdwn = document.getElementById('brandName');
searchBtn.addEventListener('click', (e)=>{
  maker(brandData)
});

function maker(brandData){
  
  brandData.forEach( el =>{
    for(var i = 0; i < brDrpdwn.length; i++ ){
      // console.log(brDrpdwn[i]);
      var optn = '<option>'+ `${el.brandTitle}`+'</option>';
      brDrpdwn[i].append(optn)
    }
    // brDrpdwn.value = `${el.brandTitle}`
    // console.log(brDrpdwn.value = `${el.brandTitle}`);
  })
}





