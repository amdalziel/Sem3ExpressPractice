
// Displaying Battle of the Beer data 

// Colors for different parts of the pie chart (match website colors)
const background_colors = {
    brightYellow: '#F2A007',
    brightOrange: '#F28F16',
    darkOrange: '#BF5B04',
    brown: '#592202', 
    beige: '#D9B07E',
}; 


// Communicate with server-side code - fetch GET request made in index.js 
const fetchBeerData = async () => {
    try {
        const response = await fetch('/api/beer');
        if (!response.ok) {
            throw new Error('Failed to fetch beer data');
        }
        const beerData = await response.json();
        console.log(beerData);
        return beerData;
    } catch (error) {
        console.error('Error fetching beer data:', error);
        return [];
    }
};


async function getTopBeer() {
  const data = await fetchBeerData(); 
 const topBeer = data[data.length - 1].beer_name; 
 return topBeer; 
}

async function displayTopBeer() {
  const topBeer = await getTopBeer();
  const topBeerh3 = document.getElementById("topBeer-h3");
  topBeerh3.innerHTML = `<h3>Current Leader: ${topBeer}</h3>`;
}

displayTopBeer();



(async function() {
  const data = await fetchBeerData(); 
  

  new Chart(
    document.getElementById('beerGraph'),
    {
      type: 'pie',
      data: {
        labels: data.map(row => row.beer_name),
        datasets: [
          {
            label: 'Beers!',
            data: data.map(row => row.num_votes),
            backgroundColor: Object.values(background_colors),
          }
        ]
      },
      options: { 
        legend: {
            labels: {
                fontColor: 'white',
                fontSize: 13
            }
        }
    },
      title: {
        display: true,
        text: 'Chart.js Pie Chart'
      }
    }
  );
})();


// Background Banner 

let bannerImg = [
    { id: 1, url: "images/slide1.jpg" },
    // { id: 2, url: "images/slide2.jpg" },
    // { id: 3, url: "images/slide3.jpg" },
    { id: 4, url: "images/slide4.jpg" },
    { id: 5, url: "images/slide5.jpg" },
    { id: 6, url: "images/slide6.jpg" },
    { id: 7, url: "images/slide7.jpg" },
    { id: 8, url: "images/slide8.jpg" },
];

let currBannerImg = 0; 

let beerBanner = document.getElementById("rotating-banner"); 

beerBanner.src = bannerImg[currBannerImg].url; 

setInterval(nextBannerUrl, 6000); 

function nextBannerUrl() {

}; 

function nextBannerUrl() {
    currBannerImg++;
    // console.log(currBannerImg); 
    if (currBannerImg === bannerImg.length) {
        currBannerImg = 0;
    }
    beerBanner.src = bannerImg[currBannerImg].url; 
}


// Alternate brown gradient overlay 

var banner = document.getElementById("battleBeer-banner");
    var isBanner1 = true;

    setInterval(function() {
        if (isBanner1) {
            banner.classList.remove("banner1-settings");
            banner.classList.add("banner2-settings");
        } else {
            banner.classList.remove("banner2-settings");
            banner.classList.add("banner1-settings");
        }
        isBanner1 = !isBanner1; 
    }, 6000); 