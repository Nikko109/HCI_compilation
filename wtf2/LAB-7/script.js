const bikeWeightData = {
  labels: ['Frame', 'Handlebar', 'Saddle', 'Pedals', 'Wheels', 'Tires', 'Chain', 'Brakes', 'Gears', 'Fork', 'Grips', 'Seatpost'],
  datasets: [{
      label: 'Bike Parts Weight (grams)',
      data: [1800, 300, 250, 400, 2500, 800, 300, 400, 700, 1200, 100, 200],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
  }]
};

const weightCtx = document.getElementById('bikeWeightChart').getContext('2d');
let currentWeightChart;

function renderWeightChart(type) {
  if (currentWeightChart) {
      currentWeightChart.destroy();
  }
  
  currentWeightChart = new Chart(weightCtx, {
      type: type,
      data: bikeWeightData,
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          },
          plugins: {
              tooltip: {
                  callbacks: {
                      label: function(context) {
                          let label = context.dataset.label || '';
                          if (label) {
                              label += ': ';
                          }
                          if (context.parsed.y !== null) {
                              label += context.parsed.y + ' grams';
                          }
                          return label;
                      }
                  }
              }
          }
      }
  });
}

function changeWeightChartType(type) {
  renderWeightChart(type);
}

// Initially render the chart as a bar chart
renderWeightChart('bar');
