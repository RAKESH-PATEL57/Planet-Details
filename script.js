let planetExploreBtn = document.querySelector('#planetExploreBtn');
let firstPage = document.querySelector('.first-page');
let secondPage = document.querySelector('.second-page');
let backToFirstPageBtn = document.querySelector('.backToFirstPage');

let allPlanetNames = document.querySelector('.allPlanetNames');

let prevBtn = document.querySelector('#prevBtn');
let nextBtn = document.querySelector('#nextBtn');

planetExploreBtn.addEventListener('click', () => {
    firstPage.classList.add('closeOpenFrstPage');
    secondPage.classList.add('openCloseScndPage');

    planetsNames(original_url);
});

original_url = `https://swapi.dev/api/planets/?format=json`;

backToFirstPageBtn.addEventListener('click', () => {
    firstPage.classList.remove('closeOpenFrstPage');
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
    console.log(original_url);
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
    let allAnchorTag;

    for(let i = 0 ; i<planetLength; i++)
    {
       listCreator = document.createElement('li');
       allAnchorTag = document.createElement('a');
       allAnchorTag.innerText=`${planetsData.results[i].name}`;
       allAnchorTag.href=`${planetsData.results[i].url}`;
       listCreator.appendChild(allAnchorTag);
       allPlanetNames.appendChild(listCreator);
    }

    console.log(planetLength);
    
}