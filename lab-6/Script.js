
const sampleData = {
  labels: ['January', 'February', 'March', 'April',  'June', 'July',  'September', 'October', 'November', 'December'],
  datasets: [{
    label: 'Sample Data',
    data: [15, 30, 45, 60, 75, 90, 105, 120, 135, 150],
    backgroundColor: 'rgba(245, 64, 145)',
    borderColor: 'rgba(95, 43, 0)',
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
    data: sampleData,
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
                label += context.parsed.y;
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

renderChart('bar');
