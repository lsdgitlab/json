import testData from './showDateTest.json'
// import 'http://onlinereviews.org.uk/logicservegallery/js/data.json'


const searchBtn = document.querySelector('#search button')
const output = document.querySelector('.output')
let brDrpdwn = document.getElementById('brandName')
let inptVal = document.getElementsByName('val')

searchBtn.addEventListener('click', (e) => {
//   brandDrpDwn(brandData)
    
        let srachTerm = inptVal.value;
        let tempurl = testData + srachTerm;
        console.log(tempurl);
    output.innerHTML = "Json Result" + srachTerm;
    output.innerHTML += testData.entries.Category;
    maker(testData.entries.Category)
});

function maker(testData){
    // console.log('click', testData.entries[0].Category)
    
    testData.entries.forEach(el=>{
        // console.log(el.Category);
        
        const div = document.createElement('div')
        div.innerHTML += `
        <p>${el.Category}</p>
        `;
        output.append(div)
    });
}