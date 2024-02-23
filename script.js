let planetExploreBtn = document.querySelector('#planetExploreBtn');
let firstPage = document.querySelector('.first-page');
let secondPage = document.querySelector('.second-page');
let backToFirstPageBtn = document.querySelector('.backToFirstPage');


planetExploreBtn.addEventListener('click', () => {
    planetsNames();
    firstPage.classList.add('closeOpenFrstPage');
    secondPage.classList.add('openCloseScndPage');
});

backToFirstPageBtn.addEventListener('click', () => {
    planetsNames();
    firstPage.classList.remove('closeOpenFrstPage');
    secondPage.classList.remove('openCloseScndPage');
});

original_url = `https://swapi.dev/api/planets/?format=json`;

async function planetsNames()
{
    const data = await fetch(original_url);
    const planetsData = await data.json();

    console.log(planetsData.results.length);
    
}
