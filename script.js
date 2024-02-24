let planetExploreBtn = document.querySelector('#planetExploreBtn');
let firstPage = document.querySelector('.first-page');
let secondPage = document.querySelector('.second-page');
let backToFirstPageBtn = document.querySelector('.backToFirstPage');


let residentHalfDetails = document.querySelector('.resident-half-details');

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

//**********************[[[[[[[[[[[[[[[[[[[[[[ Second Page section [*Start*]   ]]]]]]]]]]]]]]]]]]]]]]*********************************

backToFirstPageBtn.addEventListener('click', () => {
    firstPage.classList.remove('closeOpenFrstPage');
    secondPage.classList.remove('openCloseScndPage');
});


nextBtn.addEventListener('click', () => {
    nextUrl();
});

prevBtn.addEventListener('click', () => {
    prevUrl();
});

//**********[[ Next Url Open open start ]] *******
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

//**********[[ Next Url Open open End ]] *******

//**********[[ Previous Url Open start ]] *******
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

//**********[[ Previous Url Open end ]] *******

//*********[[ showing planets name in second Page [*Start*] ] ***********]]

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

       allPlanetNames.appendChild(listCreator);
    }

    let allPlanetUrl = document.querySelectorAll('.planetUrl');
      
    for(let j=0;j<allPlanetUrl.length;j++)
    {
        allPlanetUrl[j].addEventListener("click",function(){          
            thirdPageDetails(planetsData.results[j].url, planetsData.results[j].residents);
        });
    }
    
}

//*********[[ showing planets name in second Page [*End*] ] ***********]]

//**********************[[[[[[[[[[[[[[[[[[[[[[ Second Page section [*End*]   ]]]]]]]]]]]]]]]]]]]]]]*********************************



//***********************[[[[[[[[[[[[[[[[[[[[[[[[[[ third Page Section [*Start*]  ]]]]]]]]]]]]]]]]]]]]******************************
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

// residents Details [*start*]  
let currentResidentName = document.querySelector('#current-resident-name');
let currentResidentHeight = document.querySelector('#height');
let currentResidentMass = document.querySelector('#mass');
let currentResidentGender = document.querySelector('#gender');



//****** Third page details [*Start*]  *********
async function thirdPageDetails(currentPlanetUrl, AllResidents)
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
    
    
    residentHalfDetails.innerHTML = '';
    currentResidentName.innerHTML = '';
    currentResidentHeight.innerHTML = '';
    currentResidentMass.innerHTML = '';
    currentResidentGender.innerHTML = '';
    
    // console.log(AllResidents);
    
    // resident details 
    for(let i = 0 ; i<AllResidents.length; i++)
    {
       residentName(AllResidents[i]);
    }
     
    setTimeout(() => {
        let allresbtn = document.querySelectorAll('.allResbtna');
        // console.log(AllResidents[2]);  

    
        for(let i = 0 ;i<allresbtn.length; i++)
        {
            allresbtn[i].addEventListener('click',() => {
                    fullResData(AllResidents[i]);
            });
        }
    }, 3000);

}


async function residentName(residentUrl)
{
    const reseidentUrlData = await fetch (residentUrl);
    const residentUrlDetails = await reseidentUrlData.json();

    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const btn = document.createElement('button');
    div.classList.add('box');
    h1.classList.add('residentName');
    btn.classList.add('btn');
    btn.classList.add('allResbtna');
    btn.innerText="EXPLORE"
    h1.innerText = residentUrlDetails.name;
    div.appendChild(h1);
    div.appendChild(btn);
    residentHalfDetails.appendChild(div);
 
}

async function fullResData(fullResUrl)
{
    // console.log(rkp);
    const changeFullResData = await fetch(fullResUrl)
    const changeFullResDataDetails = await changeFullResData.json();

    // console.log(changeFullResDataDetails);
    currentResidentName.innerText = changeFullResDataDetails.name;
    currentResidentHeight.innerText = changeFullResDataDetails.height;
    currentResidentMass.innerText = changeFullResDataDetails.mass;
    currentResidentGender.innerText = changeFullResDataDetails.gender;
}

//****** Third page details [*End*]  *********



//****** back to second page button Start  *********
let backpagebtn = document.querySelector('.backpagebtn');

backpagebtn.addEventListener('click', () => {
    
    thirdPageSection.classList.remove('OpenClosetrdPage');
    secondPage.classList.add('openCloseScndPage');
    
});

//****** back to second page button End  *********

//***********************[[[[[[[[[[[[[[[[[[[[[[[[[[ third Page Section [*End*]  ]]]]]]]]]]]]]]]]]]]]******************************