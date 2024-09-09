$(document).ready(function () {
    // Debounce function
    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

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
    let sidebarVisible = true;

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

    // Toggle Theme
    $('#themeSwitcher').click(function () {
        $('body').toggleClass('light-mode dark-mode');
        $(this).text($(this).text() === 'Switch to Dark Mode' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
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

    // Debounced Search Feature
    const debouncedFilterStudentEntries = debounce(function (searchTerm) {
        // Implement the logic to filter student entries based on the searchTerm
        console.log("Search term:", searchTerm); // Replace this with actual filtering logic
    }, 300); // 300ms debounce delay

    $('#studentSearch, #studentSearchDashboard').on('input', function () {
        const searchTerm = $(this).val().toLowerCase();
        debouncedFilterStudentEntries(searchTerm);
    });
});