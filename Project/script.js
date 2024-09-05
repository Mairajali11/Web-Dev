$(document).ready(function () {
    // Login Form Submission
    $('#loginForm').submit(function (event) {
        event.preventDefault();
        $('#loginPage').hide();
        $('#mainContent').show();
        updateClock();
        initializeCalendar();
        initializeCharts();
    });

    // Toggle Sidebar
    var sidebarVisible = true;

$('#toggleBtn').click(function () {
    if (sidebarVisible) {
        $('#sidebar').css('transform', 'translateX(-100%)');
        $('#mainContent').addClass('sidebar-hidden');
        sidebarVisible = false;
    } else {
        $('#sidebar').css('transform', 'translateX(0)');
        $('#mainContent').removeClass('sidebar-hidden');
        sidebarVisible = true;
    }
});

$('#themeSwitcher').click(function () {
    $('body').toggleClass('light-mode dark-mode');
    if ($(this).text() === 'Switch to Dark Mode') {
        $(this).text('Switch to Light Mode');
    } else {
        $(this).text('Switch to Dark Mode');
    }
});


    // Update Clock
    function updateClock() {
        function formatTime(date) {
            return date.toTimeString().split(' ')[0];
        }
        setInterval(function () {
            $('#clock').text(formatTime(new Date()));
        }, 1000);
    }

    // Initialize Calendar
    function initializeCalendar() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth'
        });
        calendar.render();
    }

    // Initialize Charts
    function initializeCharts() {
        var ctxStudents = document.getElementById('studentsChart').getContext('2d');
        var ctxTeachers = document.getElementById('teachersChart').getContext('2d');
        var ctxFinance = document.getElementById('financeChart').getContext('2d');

        new Chart(ctxStudents, {
            type: 'pie',
            data: {
                labels: ['Class A', 'Class B', 'Class C'],
                datasets: [{
                    data: [300, 500, 400],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }]
            },
            options: {
                responsive: true
            }
        });

        new Chart(ctxTeachers, {
            type: 'pie',
            data: {
                labels: ['Math', 'Science', 'English'],
                datasets: [{
                    data: [50, 30, 20],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }]
            },
            options: {
                responsive: true
            }
        });

        new Chart(ctxFinance, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets: [{
                    label: 'Income',
                    data: [10000, 12000, 11000, 13000, 15000],
                    borderColor: '#36A2EB',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)'
                }, {
                    label: 'Expenses',
                    data: [8000, 9000, 8500, 9000, 9500],
                    borderColor: '#FF6384',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)'
                }]
            },
            options: {
                responsive: true
            }
        });
    }
});
