// import testData from './showDateTest.json'
// console.log('mapApi')
// import 'http://onlinereviews.org.uk/logicservegallery/js/data.json'

const url =
  //   'http://api.wikimapia.org/?key=2B2B086C-804F267F-2DFC6CFB-79ACB72A-5938DC4B-E1A9458B-1C2C5C02-B5EB449F&function=place.getbyid&id=55&format=json'
  'http://api.wikimapia.org/?key=example&function=place.getbyarea&coordsby=bbox&bbox=2.292493%2C48.8590143%2C2.293493%2C&format=json'

const searchBtn = document.querySelector('#search button')
searchBtn.innerHTML = 'Load Json Data'
const output = document.querySelector('.output')
let inptVal = document.querySelector('.val')
inptVal.value = 'Search'
console.log(inptVal)

searchBtn.addEventListener('click', (e) => {
  //   console.log('clikbtn')
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      console.log(data)
      output.innerHTML = JSON.stringify(data)
    })
})

function maker(testData) {}

// Domain
// onlinereviews.org.uk/
// Key
// 2B2B086C-804F267F-2DFC6CFB-79ACB72A-5938DC4B-E1A9458B-1C2C5C02-B5EB449F not verified
// Key limits
// Up to 100 requests in 5 minutes.
