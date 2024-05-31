AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const sampleData = {
  labels: ['HTML', 'CSS', 'JS', 'JAVA', 'C++'],
  datasets: [{
      label: 'Learned Technologies',
      data: [70, 65, 50, 80, 68,],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: 1
  }]
};

let charts = {};

function renderChart(type, chartNumber) {
  const ctx = document.getElementById(`myChart${chartNumber}`).getContext('2d');

  if (charts[`myChart${chartNumber}`]) {
      charts[`myChart${chartNumber}`].destroy();
  }

  charts[`myChart${chartNumber}`] = new Chart(ctx, {
      type: type,
      data: sampleData,
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderChart('bar', 1);
  renderChart('pie', 2);
  renderChart('line', 3);
  renderChart('bar', 4);
});