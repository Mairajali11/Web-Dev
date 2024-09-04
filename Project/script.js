// script.js

// Real-time clock
function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('time').innerText = timeString;
  }
  setInterval(updateTime, 1000);
  
  // Students Pie Chart
const studentsCtx = document.getElementById('studentsChart').getContext('2d');
const studentsChart = new Chart(studentsCtx, {
  type: 'pie',
  data: {
    labels: ['Boys', 'Girls'],
    datasets: [{
      data: [700, 500], // Example data
      backgroundColor: ['#3498db', '#e74c3c'],
      borderColor: ['#2980b9', '#c0392b'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} students`;
          }
        }
      },
      legend: {
        position: 'bottom',
      },
    },
  }
});

// Update the pie chart data
function updatePieChartData(chart, newData) {
  chart.data.datasets[0].data = newData;
  chart.update();
}

// Example usage:
updatePieChartData(studentsChart, [800, 600]); // Update the students pie chart data
  
  // Teachers Pie Chart
  const teachersCtx = document.getElementById('teachersChart').getContext('2d');
  const teachersChart = new Chart(teachersCtx, {
    type: 'pie',
    data: {
      labels: ['Permanent', 'Temporary'],
      datasets: [{
        data: [60, 15], // Example data
        backgroundColor: ['#2ecc71', '#f1c40f'],
        borderColor: ['#27ae60', '#f39c12'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return `${tooltipItem.label}: ${tooltipItem.raw} teachers`;
            }
          }
        },
        legend: {
          position: 'bottom',
        },
      },
    }
  });
  
  // Income & Expenses Pie Chart
  const financeCtx = document.getElementById('financeChart').getContext('2d');
  const financeChart = new Chart(financeCtx, {
    type: 'pie',
    data: {
      labels: ['Income', 'Expenses'],
      datasets: [{
        data: [50000, 20000], // Example data
        backgroundColor: ['#2ecc71', '#e74c3c'],
        borderColor: ['#27ae60', '#c0392b'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return `${tooltipItem.label}: $${tooltipItem.raw}`;
            }
          }
        },
        legend: {
          position: 'bottom',
        },
      },
    }
  });
  
  // Dynamic Counters
  const totalStudents = document.getElementById('totalStudents');
  const totalTeachers = document.getElementById('totalTeachers');
  const totalIncome = document.getElementById('totalIncome');
  const totalExpenses = document.getElementById('totalExpenses');
  
  const animateValue = (element, start, end, duration) => {
    let startTime = null;
    const step = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      element.innerText = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };
  
  animateValue(totalStudents, 0, 1200, 2000);
  animateValue(totalTeachers, 0, 75, 2000);
  animateValue(totalIncome, 0, 50000, 2000);
  animateValue(totalExpenses, 0, 20000, 2000);
  
  // FullCalendar Setup
  document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
        // Example events
        { title: 'Exam Week', start: '2024-09-15', end: '2024-09-20' },
        { title: 'Teacher\'s Meeting', start: '2024-09-25' },
        { title: 'Sports Day', start: '2024-10-05' }
      ]
    });
    calendar.render();
  });
  // Toggle dropdown on click
document.querySelectorAll('.sidebar > ul > li > a').forEach(menu => {
    menu.addEventListener('click', function(event) {
        event.preventDefault();
        let dropdown = this.nextElementSibling;
        if (dropdown) {
            dropdown.classList.toggle('show');
        }
    });
});