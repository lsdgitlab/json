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
  flmCnt.textContent = '(' + brandData[ele].Film.length + ')'

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
      '<img src="./img/play-btn-small.png" alt="">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="title">#Take Off</div>' +
      '</div>'
  })
  filmSec.innerHTML = filcard
}



