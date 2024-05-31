
const bikePartsData = {
  labels: ['Frame', 'Handlebar', 'Saddle', 'Pedals', 'Wheels', 'Tires', 'Chain', 'Brakes', 'Gears', 'Fork', 'Grips', 'Seatpost'],
  datasets: [{
    label: 'Bike Parts Pricing',
    data: [150, 40, 60, 30, 200, 50, 25, 70, 90, 130, 15, 40],
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }]
};

const ctx = document.getElementById('myChart').getContext('2d');
let currentChart;

function renderChart(type) {
  if (currentChart) {
    currentChart.destroy();
  }
  
  currentChart = new Chart(ctx, {
    type: type,
    data: bikePartsData,
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
                label += $$context.parsed.y;
              }
              return label;
            }
          }
        }
      }
    }
  });
}

function changeChartType(type) {
  renderChart(type);
}

// Initially render the chart as a bar chart
renderChart('bar');
