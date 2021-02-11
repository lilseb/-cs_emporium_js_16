// LET : NAVBAR // 
let maNavbar = document.querySelector(`nav`)
let header = document.querySelector(`header`)

// LET :BOUTON CONNEXION+INSCRIPTION
let bouton = document.querySelectorAll(`.bouton-modal`)
let contenuModal = document.querySelectorAll(`.contenu-modal`)
let seConnecter = document.querySelector(`.bouton-modal-complet`)
let modalComplet = document.querySelector(`.modal-complet`)
let boutonFermeture = document.querySelector(`.bouton-fermeture`)
let sectionModal = document.getElementsByTagName(`section`)[0]

// LET : COULEUR //

let monBody = document.querySelector(`body`)
let boutonBlanc = document.querySelector(`.bouton-blanc`)
let boutonNoir = document.querySelector(`.bouton-dark`)
let couleurTextNavbar = document.querySelectorAll(`.class-changement-couleur`)
let couleurImageNavbar = document.querySelector(`.image-navbar`)

// -------------------------------------------------------------------------------------------------------------------------------------- //

// +++ NAVBAR SCROLL +++ //
window.addEventListener(`scroll` , () => {
    maNavbar.classList.add(`d-flex`,`justify-content-center`,`align-items-center`)

    if (window.scrollY == 0) {
        maNavbar.classList.remove(`d-flex`,`justify-content-center`,`align-items-center`)
    }
})

// -------------------------------------------------------------------------------------------------------------------------------------- //

// +++ COULEUR +++ //

let changementCouleurBlanc = () => {
    monBody.classList.remove(`bg-dark`)
    maNavbar.classList.remove(`bg-dark`)
    maNavbar.classList.add(`bg-white`)
    couleurTextNavbar.forEach(element => {
        element.classList.remove(`text-white`)
    })
}
boutonBlanc.addEventListener(`click`,changementCouleurBlanc)

let changementCouleurNoir = () => {
    monBody.classList.remove(`bg-white`)
    monBody.classList.add(`bg-dark`)
    maNavbar.classList.remove(`bg-white`)
    maNavbar.classList.add(`bg-dark`)
    couleurImageNavbar.classList.add(`bg-white`)
    couleurTextNavbar.forEach(element => {
        element.classList.add(`text-white`)
    });
    
}
boutonNoir.addEventListener(`click`,changementCouleurNoir)
// -------------------------------------------------------------------------------------------------------------------------------------- //

// +++ MODAL CONNEXION JS +++ //

// Variable utilitaire , Fermeture ecran
let modalOpen = false;

// Cacher le contenu
let cacheContenu = () => {
    contenuModal.forEach(element => {
        element.classList.add(`d-none`)
    });
}
cacheContenu()
// Bouton afficher
bouton.forEach(element => {
    element.addEventListener("click", () => {
        let div = element.getAttribute('href');  
        cacheContenu();
        document.querySelector(div).classList.remove(`d-none`)
    })
})
// Active 
contenuModal.forEach(element => {
    if (element.classList.contains("active")) {
        let div = element.getAttribute("id")
        cacheContenu()
        document.querySelector(`#` + div).classList.remove("d-none")
    }
})
// Fermeture
let fermetureModal = () => {
    sectionModal.style.visibility=`hidden`;
    sectionModal.style.opacity=`0`
    let divH = document.querySelector("div.hide");
    divH ? document.body.removeChild(divH) : null ; 
    modalOpen=false; 
    document.body.style.overflow='initial'    
}
// Ouverture
let openModal = () => {
    modalOpen=true; 

    let divHide = document.createElement("div"); 
    divHide.classList.add("hide"); 
    document.body.insertBefore(divHide, document.querySelector("header"));
    modalComplet.classList.remove("d-none")
    sectionModal.style.visibility=`visible`
    sectionModal.style.opacity="1";
    boutonFermeture.addEventListener("click",() => {
        fermetureModal();
    })
    document.body.style.overflow='hidden'
}
seConnecter.addEventListener(`click`, openModal )

// --------------------------------------------------------------------------------------------------------------------------------------- //

// CAROUSEL //
const affichageCarousel = document.querySelector(`.affichage-carousel`)
const boutonCarousel = document.querySelector(".div-bouton-carousel")

boutonCarousel.addEventListener('click', e => {

if (e.target.nodeName === "BUTTON") {

    Array.from(boutonCarousel.children).forEach(item => item.classList.remove("active"))
    
    if (e.target.classList.contains("bouton-carousel-un")) {
      affichageCarousel.style.transform = "translateX(0)"
      e.target.classList.add("active")
    } else if (e.target.classList.contains("bouton-carousel-deux")) {
      affichageCarousel.style.transform = "translateX(-16.7%)"
      e.target.classList.add("active")
    } else if (e.target.classList.contains("bouton-carousel-trois")) {
      affichageCarousel.style.transform = "translateX(-33.4%)"
      e.target.classList.add("active")
    } else if (e.target.classList.contains("bouton-carousel-quatre")) {
      affichageCarousel.style.transform = "translateX(-50.1%)"
      e.target.classList.add("active")
    }
  }
})