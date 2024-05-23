
const sampleData = {
  labels: ['LtWOO A3', 'LTWOO A5', 'LTWOO A7', 'LTWOO AX', 'SHIMANO TOURNEY', 'SHIMANO ALTUS', 'SHIMANO ACERA', 'SHIMANO DEORE', 'SRAM', 'SHIMANO GXR', 'SHIMANO SLX', 'SHIMANO DEORE XT'],
  datasets: [{
    label: 'Money Savings For Parts in Bicycle Parts in  Rear Derailleur',
    data: [300, 400, 500, 600, 700, 300, 450, 450, 350,2000, 1800, 2500],
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