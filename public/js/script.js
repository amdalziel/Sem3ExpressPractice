
const background_colors = {
    brightYellow: '#F2A007',
    brightOrange: '#F28F16',
    darkOrange: '#BF5B04',
    brown: '#592202', 
    beige: '#D9B07E',
}; 

(async function() {
  const data = [
    { product: 'Happy Ale', count: 10 },
    { product: 'Smooth Sailing', count: 20 },
    { product: 'Bitter End', count: 50 },
    { product: 'Hoppy Heart', count: 5 },
    { product: 'Golden Times', count: 15 },
  ];

  new Chart(
    document.getElementById('beerGraph'),
    {
      type: 'pie',
      data: {
        labels: data.map(row => row.product),
        datasets: [
          {
            label: 'Beers!',
            data: data.map(row => row.count),
            backgroundColor: Object.values(background_colors),
          }
        ]
      },
      title: {
        display: true,
        text: 'Chart.js Pie Chart'
      }
    }
  );
})();