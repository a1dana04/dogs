const btn1 = document.querySelector(".btn1")
const user = document.querySelector(".user")
const body = document.querySelector("body")
const input = document.querySelector(".cou")
const btnSearch = document.querySelector(".search")
const select = document.querySelector(".area")
const region = document.querySelector(".region")
const clk = document.querySelector(".clk")
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const modal1 = document.querySelector(".modal1")



let n = true
clk.addEventListener("click", ()=>{
    if(n) {
        clk.style.marginLeft = "35px"
        body.style.background = "black"
        clk.style. transition = ".5s"
        n = false
        console.log(n);
    } else {
        clk.style.marginLeft = "0px"
        body.style.background = "rgb(180, 231, 223)"
        n = true
        console.log(n); 
    }
  
  
})
let all= null
function getData(API) {
    // https://restcountries.com/v3.1/name/{KG}
    axios(`https://restcountries.com/v3.1/${API}`).then((res)=>{
        read(res.data)
        all=res.data
        console.log(res.data);
  

})  
} 
getData("all")
    

        // let arr2 = document.querySelectorAll(".block")
        // arr2.forEach((el, idx)=>{
        //     if(idx%2===0){
        //         el.style.background = "yellow"
        //     }else{
        //         el.style.background = "red"
        //     }

        // })
         
   getData()

    function read(main) {
        user.innerHTML = ""
        main.map((el,idx)=>{
            user.innerHTML += `
        <div class = "block" style = "background:${idx%2===0 ? "red":"yellow"};"> 
          <img src="${el.flags.png}" alt="img"/>
        <h2>Area:${el.area} </h2>
        <p> ${el.name.
            common
            }</p>
        <h3>Population:${el.population} </h3>
        <h4>Capital: ${el.capital}</h4>
      
        <h5 > Region:${el.region} </h5>
        <h5 >  <a href="${el.maps.googleMaps}" target="_blank">maps</a></h5>

        </div>
        `
        })  
    }

    btnSearch.addEventListener('click',()=>{
        getData(`name/${input.value}`)
    })

    input.addEventListener("input", (e)=>{
getData(`name/${e.target.value}`)
    })

    select.addEventListener("change", (e)=>{
        if(e.target.value === "population"){
            let res = all.sort((a,b)=>b.population - a.population)
            read(res)
        }else if(e.target.value === "area"){
            let res = all.sort((a,b)=>b.area-a.area)
            read(res)
        }else if(e.target.value ==="A-Z"){
            let res = all.sort((a,b)=>a.name.common.localeCompare(b.name.common))
            read(res)
        }else if(e.target.value ==="Z-A"){
            let res = all.sort((a,b)=>b.name.common.localeCompare(a.name.common))
            read(res)
        }

    })

    region.addEventListener("change",(e)=>{
        if(e.target.value === "africa"){
            let res = all.filter((el)=>el.region === "Africa")
            read(res)
        }else if(e.target.value === "europe"){
            let res = all.filter((el)=> el.region === "Europe")
            read(res)
        }else if(e.target.value === "americas"){
            let res = all.filter((el)=> el.region === "Americas")
            read(res)
        }else if(e.target.value === "asia"){
            let res = all.filter((el)=>el.region === "Asia")
            read(res)
        }
    })


let arr1 = docurment.querySelector(".block")
arr1.forEach(el => {
    el.addEventListener("click",() =>{
        modal.style.display = "block"
        //  `<h2>Area:${el.area} </h2>
        //  <h3>Population:${el.population} </h3>
        //  <h4>Capital: ${el.capital}</h4>
       
        //  <h5 > Region:${el.region} </h5>`
     
     
     }) 
})


closeBtn.addEventListener("click", ()=>{
    modal.style.display = "none"
  
})






    








    
































