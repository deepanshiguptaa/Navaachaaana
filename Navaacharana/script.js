// Radar chart configuration for student performance
const radarCtx = document.getElementById('radarChart').getContext('2d');

const radarData = {
    labels: ['Assignments', 'Coding Languages', 'Projects', 'Non-Technical Skills', 'Attendance'],
    datasets: [{
        label: 'Student Performance',
        data: [85, 75, 90, 80, 95], // Sample performance data
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
    }]
};

const radarConfig = {
    type: 'radar',
    data: radarData,
    options: {
        scale: {
            ticks: {
                beginAtZero: true,
                max: 100
            }
        }
    }
};

// Line chart configuration for student ranking among the class
const lineCtx = document.getElementById('lineChart').getContext('2d');

const lineData = {
    labels: ['Sessional 1', 'Sessional 2', 'End Semester'],
    datasets: [{
        label: 'Student Ranking',
        data: [4,6,3], // Sample rankings, where 1 is the best rank
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: true,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
    }]
};

const lineConfig = {
    type: 'line',
    data: lineData,
    options: {
        scales: {
            y: {
                reverse: true, // Reverse to make rank 1 appear on top
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                    min: 1,
                    max: 10 // Maximum rank of the class (adjust as needed)
                }
            }
        }
    }
};

// Create radar chart
new Chart(radarCtx, radarConfig);

// Create line chart
new Chart(lineCtx, lineConfig);