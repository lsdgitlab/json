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

function maker(testData) {
  
}

// Domain
// onlinereviews.org.uk/
// Key
// 2B2B086C-804F267F-2DFC6CFB-79ACB72A-5938DC4B-E1A9458B-1C2C5C02-B5EB449F not verified
// Key limits
// Up to 100 requests in 5 minutes.

[
  {
     "brandTitle": "iffco-tokio-general",
     "alias":"iffco-tokio-general",
     "brandLogo": "../img/client-logo/EY.jpg",
     "Film": [
        {          
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "filmHashTag": "#iffco-tokio1",
           "type": "htmlvid"
        },
        {
           "filmTumb": "../img/test-thumb-2.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "filmHashTag": "#iffco-tokio-general",
           "type": "htmlvid"
        },
        {            
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "X31W_-26d-E",
           "filmHashTag": "#Take Off1",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "QpK0z2kGlRs",
           "filmHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "DESJSNxhq8k",
           "filmHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "zM3rDvfx7Pg",
           "filmHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "filmHashTag": "#Take Off2",
           "type": "htmlvid"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "QpK0z2kGlRs",
           "filmHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "DESJSNxhq8k",
           "filmHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "zM3rDvfx7Pg",
           "filmHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "filmHashTag": "#Take Off2",
           "type": "htmlvid"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "QpK0z2kGlRs",
           "filmHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "DESJSNxhq8k",
           "filmHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "zM3rDvfx7Pg",
           "filmHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "filmHashTag": "#Take Off2",
           "type": "htmlvid"
        }
     ],
     "Category": [
        {
           "filmTumb": "../img/banner1.jpg",
           "filmBig": "cjgaAnGCRuY",
           "catHashTag": "#iffco-tokio-general1",
           "type": "youtube"
        },
        {
           "filmTumb": "../img/banner1.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "catHashTag": "#Take Off2",
           "type": "htmlvid"
        },
        {            
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "X31W_-26d-E",
           "catHashTag": "#Take Off1",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "QpK0z2kGlRs",
           "catHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "DESJSNxhq8k",
           "catHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "catHashTag": "#Take Off2",
           "type": "htmlvid"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "catHashTag": "#Take Off2",
           "type": "htmlvid"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "DESJSNxhq8k",
           "catHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "catHashTag": "#Take Off2",
           "type": "htmlvid"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "DESJSNxhq8k",
           "catHashTag": "#Take Off2",
           "type": "youtube"
        }
     ],
     "uCate": [
        {
           "uCateMainTitle": "iffco-tokio-general",
           "uCateDesc": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...",
           "uCatesubTitle": "Canon",
           "uCateCaseStUrl": "aaa.com",
           "uCateWebUrl": "canon.com",
           "uCateScreenshot": "img/brand-images/shutterstock_1038849250.jpg"
        },
        {
           "uCateMainTitle": "Cate2",
           "uCateDesc": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...",
           "uCatesubTitle": "Canon",
           "uCateCaseStUrl": "aaa.com",
           "uCateWebUrl": "canon.com",
           "uCateScreenshot": "img/brand-images/shutterstock_1037565193.jpg"
        },
        {
           "uCateMainTitle": "Cate3",
           "uCateDesc": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...",
           "uCatesubTitle": "Canon",
           "uCateCaseStUrl": "aaa.com",
           "uCateWebUrl": "canon.com",
           "uCateScreenshot": "img/brand-images/shutterstock_1125178382.jpg"
        }
        
     ],
     "SMCtitle": "Cate4",
     "SMChashTag": "#Take Off",
     "uCateMainTitle": "UI & UX",
     "uCateCount": 2,      
     "status": true
  },
  {
     "brandTitle": "HDFC Life",
     "alias":"HDFC-Life",
     "brandLogo": "../img/client-logo/HDFC.jpg",
     "Film": [
        {            
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "X31W_-26d-E",
           "filmHashTag": "#HDFC Life1",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "QpK0z2kGlRs",
           "filmHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "DESJSNxhq8k",
           "filmHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "filmHashTag": "#Take Off2",
           "type": "htmlvid"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "filmHashTag": "#Take Off2",
           "type": "htmlvid"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "l5kpmVTPXFw",
           "filmHashTag": "#Take Off2",
           "type": "youtube"
        }
     ],
     "Category": [
        {
           "filmTumb": "../img/banner1.jpg",
           "filmBig": "cjgaAnGCRuY",
           "catHashTag": "#HDFC Life",
           "type": "youtube"
        },
        {
           "filmTumb": "../img/banner1.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "catHashTag": "#Take Off2",
           "type": "htmlvid"
        },
        {            
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "X31W_-26d-E",
           "catHashTag": "#Take Off1",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "QpK0z2kGlRs",
           "catHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "DESJSNxhq8k",
           "catHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "catHashTag": "#Take Off2",
           "type": "htmlvid"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "catHashTag": "#Take Off2",
           "type": "htmlvid"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "DESJSNxhq8k",
           "catHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "catHashTag": "#Take Off2",
           "type": "htmlvid"
        }
     ],
     "uCate": [
        {
           "uCateMainTitle": "HDFC Life",
           "uCateDesc": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...",
           "uCatesubTitle": "Canon",
           "uCateCaseStUrl": "aaa.com",
           "uCateWebUrl": "canon.com",
           "uCateScreenshot": "img/brand-images/shutterstock_1081719314.jpg"
        },
        {
           "uCateMainTitle": "Cate4",
           "uCateDesc": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...",
           "uCatesubTitle": "Canon",
           "uCateCaseStUrl": "aaa.com",
           "uCateWebUrl": "canon.com",
           "uCateScreenshot": "img/brand-images/shutterstock_1125178382.jpg"
        }
        
     ],
     "SMCtitle": "Cate4",
     "SMChashTag": "#Take Off",
     "uCateMainTitle": "UI & UX",
     "uCateCount": 2,      
     "status": true
  },
  {
     "brandTitle": "Canon India",
     "alias":"Canon-India",
     "brandLogo": "../img/client-logo/kpmg.jpg",
     "Film": [
        {            
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "X31W_-26d-E",
           "filmHashTag": "#Canon India",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "QpK0z2kGlRs",
           "filmHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "DESJSNxhq8k",
           "filmHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "filmHashTag": "#Take Off2",
           "type": "htmlvid"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "filmHashTag": "#Take Off2",
           "type": "htmlvid"
        },
        {
           "filmTumb": "./img/test-thumb-2.jpg",
           "filmBig": "l5kpmVTPXFw",
           "filmHashTag": "#Take Off2",
           "type": "youtube"
        }
     ],
     "Category": [
        {
           "filmTumb": "../img/banner1.jpg",
           "filmBig": "cjgaAnGCRuY",
           "catHashTag": "#Canon India",
           "type": "youtube"
        },
        {
           "filmTumb": "../img/banner1.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "catHashTag": "#Take Off2",
           "type": "htmlvid"
        },
        {            
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "X31W_-26d-E",
           "catHashTag": "#Take Off1",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "QpK0z2kGlRs",
           "catHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "DESJSNxhq8k",
           "catHashTag": "#Take Off2",
           "type": "youtube"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "catHashTag": "#Take Off2",
           "type": "htmlvid"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "./video/mov_bbb.mp4",
           "catHashTag": "#Take Off2",
           "type": "htmlvid"
        },
        {
           "filmTumb": "./img/banner1.jpg",
           "filmBig": "DESJSNxhq8k",
           "catHashTag": "#Take Off2",
           "type": "youtube"
        }
     ],
     "uCate": [
        {
           "uCateMainTitle": "Canon India",
           "uCateDesc": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...",
           "uCatesubTitle": "Canon",
           "uCateCaseStUrl": "aaa.com",
           "uCateWebUrl": "canon.com",
           "uCateScreenshot": "img/brand-images/shutterstock_1014796606.jpg"
        },
        {
           "uCateMainTitle": "Cate6",
           "uCateDesc": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...",
           "uCatesubTitle": "Canon",
           "uCateCaseStUrl": "aaa.com",
           "uCateWebUrl": "canon.com",
           "uCateScreenshot": "img/brand-images/shutterstock_1049691002.jpg"
        }
        
     ],
     "SMCtitle": "Cate4",
     "SMChashTag": "#Take Off",
     "uCateMainTitle": "UI & UX",
     "uCateCount": 2,      
     "status": true
  }
  ]