document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('analyticsChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('trafficChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Organic Search', 'Direct Traffic', 'Referral', 'Social Media'],
            datasets: [{
                label: 'Website Traffic',
                data: [300, 200, 150, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Website Traffic Distribution'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });
});
