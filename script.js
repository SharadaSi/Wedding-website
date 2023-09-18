//Hamburger menu

let isMenuOpen = false //výchozí stav menu
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const menuBtn = document.querySelector(".menu-btn")


 
function toggleMenu() {
    isMenuOpen = true
    isMenuOpen = !isMenuOpen
}

// Funkce která na kliknutí jinde než na hamburger nebo dropdown menu schová dropdown menu
const handleClickOutside = (event) => {
    if (!navMenu.contains(event.target) && event.target !== menuBtn) {
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
      toggleMenu()
    } else {}
}

menuBtn.addEventListener("click", () => {
    //Výchozí hodnota - menu není otevrene se na kliknutí změní na opačnou boolean hodnotu
    isMenuOpen = !isMenuOpen
    //V tuto chvíli je isMenuOpen true a provede se podmínka
    if(isMenuOpen){
        menuBtn.classList.add("open")
        navMenu.classList.add("open")
        
        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => { 
            navMenu.classList.remove("open")
            //Zpozdeni druhe akce, aby se stihla provest pred removnutim classy open
            setTimeout(() => {
                menuBtn.classList.remove("open");
                }, 10)

            menuBtn.classList.remove("open")
            toggleMenu()
        }))

        //Nefunguje :( Ví někdo proč? :D =>
        // const body = document.querySelector("body")
        // body.addEventListener("click", handleClickOutside)

    } else{
        navMenu.classList.remove("open")
        menuBtn.classList.remove("open")
    }
})



//Program


const accordions = document.querySelectorAll(".accordion")

  accordions.forEach((item) => {
      let accoHeader = item.querySelector(".accordion-header")
      accoHeader.addEventListener("click", () => {
          item.classList.toggle("active")
  
          let accoContent = item.querySelector(".accordion-content")
          if(item.classList.contains("active")){
              accoContent.style.height = "auto"
          } else{
              accoContent.style.height = "0px"
          }
      })
  
  })


// Ubytování 

const apartmanH = document.querySelector(".apartman-heading")
const hotelH = document.querySelector(".hotel-heading")
const chatkyH = document.querySelector(".chatky-heading")
const stanH = document.querySelector(".stan-heading")


const apartmanC = document.querySelector(".apartman")
const hotelC = document.querySelector(".hotel")
const chatkyC = document.querySelector(".chatky")
const stanC = document.querySelector(".stan")

const removeAll = () => {
    apartmanC.classList.remove("active")
    hotelC.classList.remove("active")
    chatkyC.classList.remove("active")
    stanC.classList.remove("active")
}

const removeUndrL = () => {
    apartmanH.style.textDecoration = "none"
    hotelH.style.textDecoration = "none"
    chatkyH.style.textDecoration = "none"
    stanH.style.textDecoration = "none"
}

// const removeUnderline = () => {
//     apartmanH.style.textDecoration = "none"
//     hotelH.style.textDecoration = "none"
//     penzionH.style.textDecoration = "none"
//     chatkyH.style.textDecoration = "none"
//     stanH.style.textDecoration = "none"
// }

// const addUnderline = () => {
//     apartmanH.style.textDecoration = "underline"
//     apartmanH.style.textDecorationColor = "#282828"
//     apartmanH.style.textUnderlineOffset = "4px"
// }




apartmanH.addEventListener("click", () => {
    removeAll()
    apartmanC.classList.add("active")
    removeUndrL()
    apartmanH.style.textDecoration = "underline"
    
    if (!apartmanH.classList.contains("active")){
        apartmanC.style.display = "block"
    }
})

hotelH.addEventListener("click", () => {
    removeAll()
    hotelC.classList.add("active")
    removeUndrL()
    hotelH.style.textDecoration = "underline"
    
    if (!apartmanH.classList.contains("active")){
        apartmanC.style.display = "none"
    }
})



chatkyH.addEventListener("click", () => {
    removeAll()
    chatkyC.classList.add("active")
    removeUndrL()
    chatkyH.style.textDecoration = "underline"
    
    if (!apartmanH.classList.contains("active")){
        apartmanC.style.display = "none"
    }
})

stanH.addEventListener("click", () => {
    removeAll()
    stanC.classList.add("active")
    removeUndrL()
    stanH.style.textDecoration = "underline"

    if (!apartmanH.classList.contains("active")){
        apartmanC.style.display = "none"
    }
})


// NAS TYM

const name1 = document.querySelector(".name1")
const name2 = document.querySelector(".name2")
const name3 = document.querySelector(".name3")
const name4 = document.querySelector(".name4")

const detailP1 = document.querySelector(".team-detail1")
const detailP2 = document.querySelector(".team-detail2")
const detailP3 = document.querySelector(".team-detail3")
const detailP4 = document.querySelector(".team-detail4")

name1.addEventListener("click", () => {
    detailP1.classList.toggle("active")
})

name2.addEventListener("click", () => {
    detailP2.classList.toggle("active")
})

name3.addEventListener("click", () => {
    detailP3.classList.toggle("active")
})

name4.addEventListener("click", () => {
    detailP4.classList.toggle("active")
})

