let planetExploreBtn = document.querySelector('#planetExploreBtn');
let firstPage = document.querySelector('.first-page');
let secondPage = document.querySelector('.second-page');
let backToFirstPageBtn = document.querySelector('.backToFirstPage');

// let websiteIntro = document.querySelector('.website-intro');

let allPlanetNames = document.querySelector('.allPlanetNames');

let prevBtn = document.querySelector('#prevBtn');
let nextBtn = document.querySelector('#nextBtn');

original_url = `https://swapi.dev/api/planets/?format=json`;

planetExploreBtn.addEventListener('click', () => {
    firstPage.classList.add('closeOpenFrstPage');
    // websiteIntro.classList.add('closeOpenWebsiteIntro');
    secondPage.classList.add('openCloseScndPage');
    allPlanetNames.innerHTML='';
    planetsNames(original_url);

});


backToFirstPageBtn.addEventListener('click', () => {
    firstPage.classList.remove('closeOpenFrstPage');
    // websiteIntro.classList.remove('closeOpenWebsiteIntro');
    secondPage.classList.remove('openCloseScndPage');
});


nextBtn.addEventListener('click', () => {
    // allPlanetNames.removeChild();
    // console.log(allPlanetNames.removeChild)
    nextUrl();
    console.log(original_url);
});

prevBtn.addEventListener('click', () => {
    // allPlanetNames.removeChild();
    // console.log(allPlanetNames.removeChild)
    prevUrl();
    // console.log(original_url);
});


async function nextUrl()
{
    const nextData = await fetch (original_url);
    const nextPlanetsData = await nextData.json();

    let nextUrlData = nextPlanetsData.next;

    if(nextUrlData != null)
    {
        allPlanetNames.innerHTML='';
        original_url = nextUrlData;
        planetsNames(original_url);
    }
    else
    {
        alert('this much planets information we have till now')
    }
}
async function prevUrl()
{
    const nextData = await fetch (original_url);
    const nextPlanetsData = await nextData.json();

    let prevUrlData = nextPlanetsData.previous;

    if(prevUrlData != null)
    {
        allPlanetNames.innerHTML='';
        original_url = prevUrlData;
        planetsNames(original_url);
    }
    else
    {
        alert('this much planets information we have till now')
    }
}

async function planetsNames(original_url)
{
    const data = await fetch(original_url);
    const planetsData = await data.json();

    var planetLength = planetsData.results.length;

    let listCreator;

    for(let i = 0 ; i<planetLength; i++)
    {
       listCreator = document.createElement('li');
       listCreator.classList.add('planetUrl');
       listCreator.innerText=`${planetsData.results[i].name}`;

    //    allAnchorTag = document.createElement('a');
    //    allAnchorTag.classList.add('planetUrl');
    //    allAnchorTag.innerText=`${planetsData.results[i].name}`;
    //    allAnchorTag.href=`${planetsData.results[i].url}`;
    //    allAnchorTag.href=`rakesh`;

    //    listCreator.appendChild(allAnchorTag);
       allPlanetNames.appendChild(listCreator);
    }

    let allPlanetUrl = document.querySelectorAll('.planetUrl');
    // console.log(allPlanetUrl);
      
    for(let j=0;j<allPlanetUrl.length;j++)
    {
        allPlanetUrl[j].addEventListener("click",function(press){
            // console.log(press.target.style.color='red');

            // thirdPage(press.target, planetsData.results[j].url);
            thirdPageDetails(planetsData.results[j].url)

        });
    }
    
 
}


//***********************[[[[[[[[[[[[[[[[[[[[[[[[[[ third Page Section  *************************]]]]]]]]]]]]]]]]]]]]
let thirdPageSection = document.querySelector('.third-page');
let currentPlanetName = document.querySelector('#currentPlanetName');

let rotationDetails = document.querySelector('#rotation');
let orbitDetails = document.querySelector('#orbit');
let diameterDetails = document.querySelector('#diameter');
let climateDetails = document.querySelector('#climate');
let gravityDetails = document.querySelector('#gravity');
let terrainDetails = document.querySelector('#terrain');
let waterDetails = document.querySelector('#water');
let populationDetails = document.querySelector('#population');

let backpagebtn = document.querySelector('.backpagebtn');

async function thirdPageDetails(currentPlanetUrl)
{
     thirdPageSection.classList.add('OpenClosetrdPage');
     secondPage.classList.remove('openCloseScndPage');

     const thrdPageCntData = await fetch (currentPlanetUrl);
     const thrdCurrentPlanetDtls = await thrdPageCntData.json();

    currentPlanetName.innerText = thrdCurrentPlanetDtls.name;
    rotationDetails.innerText = thrdCurrentPlanetDtls.rotation_period;
    orbitDetails.innerText = thrdCurrentPlanetDtls.orbital_period;
    diameterDetails.innerText = thrdCurrentPlanetDtls.diameter;
    climateDetails.innerText = thrdCurrentPlanetDtls.climate;
    gravityDetails.innerText = thrdCurrentPlanetDtls.gravity;
    terrainDetails.innerText = thrdCurrentPlanetDtls.terrain;
    waterDetails.innerText = thrdCurrentPlanetDtls.surface_water;
    populationDetails.innerText = thrdCurrentPlanetDtls.population;
}




backpagebtn.addEventListener('click', () => {
    
    thirdPageSection.classList.remove('OpenClosetrdPage');
    secondPage.classList.add('openCloseScndPage');

})
