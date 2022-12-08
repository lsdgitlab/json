import testData from './showDateTest.json';
import mapApi from 'http://api.wikimapia.org/?key=example&function=place.getbyid&id=55';
console.log("mapApi");
// import 'http://onlinereviews.org.uk/logicservegallery/js/data.json'


const searchBtn = document.querySelector('#search button')
const output = document.querySelector('.output')
let inptVal = document.getElementsByName('val')

searchBtn.addEventListener('click', (e) => {

});

function maker(testData){
  
}

// Domain
// onlinereviews.org.uk/
// Key
// 2B2B086C-804F267F-2DFC6CFB-79ACB72A-5938DC4B-E1A9458B-1C2C5C02-B5EB449F not verified
// Key limits
// Up to 100 requests in 5 minutes.