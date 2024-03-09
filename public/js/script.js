// Battle of Beer Chart 

const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
  };


  function numbers(config) {
    var cfg = config || {};
    var min = 0; 
    var max = 100; 
    var from = []; 
    var count = 8; 
    var decimals = 8; 
    var continuity = 1; 
    var dfactor = Math.pow(10, decimals) || 0;
    var data = [];
    var i, value;
  
    for (i = 0; i < count; ++i) {
      value = (from[i] || 0) + this.rand(min, max);
      if (this.rand() <= continuity) {
        data.push(Math.round(dfactor * value) / dfactor);
      } else {
        data.push(null);
      }
    }
  
    return data;
  }

const data = {
  labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  datasets: [
    {
      label: 'Dataset 1',
      data: numbers(NUMBER_CFG),
      backgroundColor: Object.values(CHART_COLORS),
    }
  ]
};


const beerGraph = new Chart("beerGraph", {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Pie Chart'
        }
      }
    },
  }); 