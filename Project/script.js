document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginPage = document.getElementById('loginPage');
    const mainContent = document.getElementById('mainContent');
    const themeSwitcher = document.getElementById('themeSwitcher');
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleBtn');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        loginPage.style.display = 'none';
        mainContent.style.display = 'block';
        initializeCharts();
        initializeCalendar();
        startClock();
    });

    themeSwitcher.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        themeSwitcher.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });

    // Sidebar Toggle
    toggleBtn.addEventListener('click', function () {
        if (sidebar.style.transform === 'translateX(-220px)') {
            sidebar.style.transform = 'translateX(0)';
            document.querySelector('.container').style.marginLeft = '220px';
        } else {
            sidebar.style.transform = 'translateX(-220px)';
            document.querySelector('.container').style.marginLeft = '0';
        }
    });

    // Initialize Charts
    function initializeCharts() {
        const ctxStudents = document.getElementById('studentsChart').getContext('2d');
        const ctxTeachers = document.getElementById('teachersChart').getContext('2d');
        const ctxFinance = document.getElementById('financeChart').getContext('2d');

        new Chart(ctxStudents, {
            type: 'pie',
            data: {
                labels: ['Class 1', 'Class 2', 'Class 3'],
                datasets: [{
                    data: [300, 150, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }]
            }
        });

        new Chart(ctxTeachers, {
            type: 'pie',
            data: {
                labels: ['Grade A', 'Grade B', 'Grade C'],
                datasets: [{
                    data: [25, 50, 25],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }]
            }
        });

        new Chart(ctxFinance, {
            type: 'bar',
            data: {
                labels: ['Income', 'Expenses'],
                datasets: [{
                    label: 'Financial Overview',
                    data: [50000, 20000],
                    backgroundColor: ['#4BC0C0', '#FF6384']
                }]
            }
        });
    }

    // Initialize Calendar
    function initializeCalendar() {
        const calendarEl = document.getElementById('calendar');
        new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            events: [
                { title: 'Event 1', start: '2024-09-01' },
                { title: 'Event 2', start: '2024-09-15' }
            ]
        }).render();
    }

    // Start Clock
    function startClock() {
        function updateClock() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
        }
        setInterval(updateClock, 1000);
        updateClock();
    }

    // Search Functionality
    document.getElementById('studentSearch').addEventListener('input', function () {
        const searchQuery = this.value.toLowerCase();
        // Filter students based on searchQuery
    });

    document.getElementById('searchButtonDashboard').addEventListener('click', function () {
        const searchQuery = document.getElementById('studentSearchDashboard').value.toLowerCase();
        // Perform search based on searchQuery
    });
});
