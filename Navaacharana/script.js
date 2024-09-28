class ChartManager {
    constructor(radarElementId, lineElementId) {
        this.radarCtx = document.getElementById(radarElementId).getContext('2d');
        this.lineCtx = document.getElementById(lineElementId).getContext('2d');
    }

    createRadarChart(labels, data) {
        const radarData = {
            labels: labels,
            datasets: [{
                label: 'Student Performance',
                data: data,
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

        new Chart(this.radarCtx, radarConfig);
    }

    createLineChart(labels, data) {
        // Combine labels and data, then sort by data in descending order
        const combined = labels.map((label, index) => ({ label, value: data[index] }));
        combined.sort((a, b) => b.value - a.value); // Sort in descending order

        // Extract sorted labels and values
        const sortedLabels = combined.map(item => item.label);
        const sortedData = combined.map(item => item.value);

        const lineData = {
            labels: sortedLabels,
            datasets: [{
                label: 'Student Ranking',
                data: sortedData,
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
                        beginAtZero: true,
                        reverse: true, // Reverse the y-axis to make rank 1 appear at the top
                        ticks: {
                            stepSize: 1,
                            min: 1,
                            max: 10 // Adjust this based on the maximum rank in your data
                        }
                    }
                }
            }
        };

        new Chart(this.lineCtx, lineConfig);
    }
}

// Example usage
const chartManager = new ChartManager('radarChart', 'lineChart');
chartManager.createRadarChart(['Assignments', 'Coding Languages', 'Projects', 'Non-Technical Skills', 'Attendance'], [85, 75, 90, 80, 95]);
chartManager.createLineChart(['Student A', 'Student B', 'Student C', 'Student D'], [4, 6, 3, 1]);

