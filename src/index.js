const companyChildren = document.querySelector('.company-children');
const company = document.querySelector('.company');

const svgA = document.querySelector('.svg1');
const svgB = document.querySelector('.svg2');

const responsiveCompany = document.querySelector('.responsive-company');
const responsiveCompanyChildren = document.querySelector('.responsive-company-children');

const svgC = document.querySelector('.svg3');
const svgD = document.querySelector('.svg4');

const swapHamburger = document.querySelector('.swap-hamburger');
const hiddenComponent = document.querySelector('.hidden-component');
const swapClose = document.querySelector('.swap-close');

const driveButton = document.querySelector('.drive-button');
const eatButton = document.querySelector('.eat-button');
const rideButton = document.querySelector('.ride-button');


const driveWriteupButton = document.querySelector('.drive-writeup-button');
const eatWriteupButton = document.querySelector('.eat-writeup-button');
const rideWriteupButton = document.querySelector('.ride-writeup-button');





company.addEventListener('click', () => {
    if(companyChildren.classList.contains('hidden')) {
        companyChildren.classList.remove('hidden');
        company.classList.add('hidden');
    }else {
        company.classList.remove('hidden');
        companyChildren.classList.add('hidden');
    };

    if(svgB.classList.contains('hidden')) {
        svgA.classList.add('hidden');
        svgB.classList.remove('hidden');
    }else {
        svgB.classList.add('hidden');
        svgA.classList.remove('hidden');
    }
})

responsiveCompany.addEventListener('click', () => {
    if(responsiveCompanyChildren.classList.contains('hidden')) {
        responsiveCompanyChildren.classList.remove('hidden'); 
    } else {
      responsiveCompanyChildren.classList.add('hidden');
    }
    
    if(svgD.classList.contains('hidden')) {
      svgC.classList.add('hidden');
      svgD.classList.remove('hidden');
  }else {
      svgD.classList.add('hidden');
      svgC.classList.remove('hidden');
  }
})

swapHamburger.addEventListener('click', () => {
  if(swapClose.classList.contains('hidden')) {
    swapHamburger.classList.add('hidden');
    swapClose.classList.remove('hidden');
    hiddenComponent.classList.remove('hidden');
  }  
})

swapClose.addEventListener('click', () => {
  swapHamburger.classList.remove('hidden');
  swapClose.classList.add('hidden');
  hiddenComponent.classList.add('hidden');
})


driveButton.addEventListener('click', () => {
  if(driveWriteupButton.classList.contains('hidden')) {
    driveWriteupButton.classList.remove('hidden');
    eatWriteupButton.classList.add('hidden');
    rideWriteupButton.classList.add('hidden');
  }
})

eatButton.addEventListener('click', ()=> {
  if(eatWriteupButton.classList.contains('hidden')) {
    eatWriteupButton.classList.remove('hidden');
    driveWriteupButton.classList.add('hidden');
    rideWriteupButton.classList.add('hidden');
  }
})

rideButton.addEventListener('click', () => {
  if(rideWriteupButton.classList.contains('hidden')) {
    rideWriteupButton.classList.remove('hidden');
    eatWriteupButton.classList.add('hidden');
    driveWriteupButton.classList.add('hidden');
  }
})


