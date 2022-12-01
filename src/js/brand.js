import brandData from './brand-data.json'
// const thumb = brandData["brandLogo"]
// console.log(brandData)

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
  const campaign = document.querySelector('.item-logo span b')
  campaign.textContent = brandData[ele].campaign
  const awd = document.querySelector('.awd')
  awd.textContent = brandData[ele].award + ' Awads'

  const filmSec = document.getElementById('filmCont')
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

function headerData(elem) {
  // console.log(brdLogoImg)
  const brdLogoImg = document.querySelector('.media-logo img')
  brdLogoImg.setAttribute('src', elem.brandLogo)
  const brdTitle = document.querySelector('.item-title')
  brdTitle.textContent = elem.brandName
  let campCountEl = document.querySelector('.item-logo span b')
  // let campCount = document.createElement('b')
  // campCountEl.appendChild(campCount).innerHTML = elem.campaign
  campCountEl.innerHTML = elem.campaign

  // $('.item-logo span').appendChild(campCount)
}

function filmSec(e) {
  const uniqueCat = [...new Set(brandData.map((item) => item.Film.filmTumb))]
  console.log(uniqueCat)
  let filmContain = document.getElementsByClassName('films-contain')
  filmContain.innerHTML = 'txxxx'
  // console.log(e.Film.filmTumb)
  //   filmContain.innerHTML = `
  //   <div class="filmes-card">
  //   <div class="image-content">
  //     <img src="./img/banner1.jpg" class="tumb" alt="">
  //     <div class="top-row">
  //       <div class="dimond">
  //         <img src="./img/king.png" alt="">
  //       </div>
  //       <div class="play-btn">
  //         <img src="./img/play-btn-small.png" alt="">
  //       </div>
  //     </div>
  //   </div>
  //   <div class="title">#Take Off</div>
  // </div>
  //   `
}

let bradInfo = document.getElementById('brandInfo')
// console.log(brdLgo);

const vals = Object.values(brandData)
vals.forEach((value) => {
  // console.log("Value",value.brandLogo);
})


// for (const pro in contentData.contentData) {
//   // console.log(pro);
// }
// const keys = Object.keys(contentData.contentData)
// console.log(keys);

// keys.forEach((kk) => {
//   console.log(kk);
// })

// const vals = Object.values(contentData.contentData)
// vals.forEach((value) => {
//   console.log("Value",value.imageThumb);
// })

// const entries = Object.entries(contentData)
// entries.forEach((ent) => {
//   console.log(ent);
//   // console.log(ent[0]);
//   // console.log(ent[1]);
// })
// ra -- end
