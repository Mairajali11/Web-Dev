
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
            type: 'doughnut',
            data: {
                labels: ['Class A', 'Class B', 'Class C'],
                datasets: [{
                    data: [300, 500, 400],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }]
            }
        });

        new Chart(ctxTeachers, {
            type: 'doughnut',
            data: {
                labels: ['Grade 1', 'Grade 2', 'Grade 3'],
                datasets: [{
                    data: [50, 25, 35],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }]
            }
        });

        new Chart(ctxFinance, {
            type: 'doughnut',
            data: {
                labels: ['Income', 'Expenses'],
                datasets: [{
                    label: 'Financial Overview',
                    data: [50000, 20000],
                    backgroundColor: ['#36A2EB', '#FF6384']
                }]
            }
        });
    }

    // Search Feature
    $('#studentSearch, #studentSearchDashboard').on('input', function () {
        var searchTerm = $(this).val().toLowerCase();
        // Assuming you have a function to filter student entries
        filterStudentEntries(searchTerm);
    });

    function filterStudentEntries(searchTerm) {
        // Implement the logic to filter student entries based on the searchTerm
        console.log("Search term:", searchTerm); // Replace this with actual filtering logic
    }
});

