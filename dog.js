const breeds = document.querySelector(".breeds");
const breedsImg = document.querySelector(".breedsImg");
const breeds_select = document.querySelector(".breeds-select");
const input = document.querySelector(".cou")
const search = document.querySelector(".search")

function getAll() {
    axios(`https://dog.ceo/api/breeds/list/all`).then((res)=>{
        // console.log(Object.keys(res.data.massage));
        Object.keys(res.data.message).map((el)=>{
            breeds_select.innerHTML += `<option class ="option" value="${el}">${el}</option>`
            breeds.innerHTML += `<button class="btn-breeds">${el}</button>`
        })
        getValue()
        getBreedsImg()
    })
}

search.addEventListener('click',  () => {
    let val = input.value
    axios(`https://dog.ceo/api/breeds/list/all`).then((res)=>{
        let arr  = Object.keys(res.data.message).find(el => el === val)
        if(arr === undefined){
            alert ("мындай ит жок")
        }
        getImg(arr)
    })
    input.value = '';
})
getAll();
 function getValue(params){
    breeds_select.addEventListener("change", (e)=>{
      console.log(e.target.value); 
      getImg(e.target.value)
    })
 }

 function getImg(params) {
    axios(`https://dog.ceo/api/breed/${params}/images/random`).then((res) => {
        breedsImg.innerHTML = `<img src="${res.data.message}" alt="img"/>`
    });
 }

 function getBreedsImg(){
    let btn= document.querySelectorAll(".btn-breeds")
    btn.forEach(el=>{
        console.log(el);
        el.addEventListener("click",() => {
            getImg(el.innerHTML)
        })
    })
 }