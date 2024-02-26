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
            labels: ['Ping Pong', 'Math', 'Dog', 'Money'],
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
document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('visitsChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Website Visits',
                data: [150, 220, 320, 280, 400, 360, 500],
                fill: false,
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Line Trend'
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Month'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Visits'
                    },
                    beginAtZero: true
                }
            }
        }
    });
});

document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const gridSize = 20;
    const tileSize = 20;
    const tileCount = gridSize;
    let snake = [{ x: 10, y: 10 }];
    let apple = { x: 15, y: 15 };
    let dx = 0;
    let dy = 0;
    let score = 0;
    let gameLoop;

    function drawSnakePart(snakePart) {
        ctx.fillStyle = "#008000";
        ctx.fillRect(snakePart.x * tileSize, snakePart.y * tileSize, tileSize, tileSize);
    }

    function drawApple() {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(apple.x * tileSize, apple.y * tileSize, tileSize, tileSize);
    }

    function drawSnake() {
        snake.forEach(drawSnakePart);
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawApple();
        drawSnake();
    }

    function moveSnake() {
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };
        snake.unshift(head);
        if (head.x === apple.x && head.y === apple.y) {
            score++;
            generateNewApple();
        } else {
            snake.pop();
        }
    }

    function generateNewApple() {
        apple = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };
        if (snake.some(part => part.x === apple.x && part.y === apple.y)) {
            generateNewApple();
        }
    }

    function isGameOver() {
        return (
            snake[0].x < 0 ||
            snake[0].x >= tileCount ||
            snake[0].y < 0 ||
            snake[0].y >= tileCount ||
            snake.slice(1).some(part => part.x === snake[0].x && part.y === snake[0].y)
        );
    }

    function main() {
        if (isGameOver()) {
            clearInterval(gameLoop);
            alert("Game Over! Your score: " + score);
            return;
        }

        moveSnake();
        draw();
    }

    function startGame() {
        snake = [{ x: 10, y: 10 }];
        score = 0;
        dx = 0;
        dy = 0;
        generateNewApple();
        gameLoop = setInterval(main, 100);
    }

    document.addEventListener("keydown", function onKeyDown(event) {
        const key = event.key;
        const goingUp = dy === -1;
        const goingDown = dy === 1;
        const goingRight = dx === 1;
        const goingLeft = dx === -1;

        if (key === "ArrowUp" && !goingDown) {
            dx = 0;
            dy = -1;
        } else if (key === "ArrowDown" && !goingUp) {
            dx = 0;
            dy = 1;
        } else if (key === "ArrowLeft" && !goingRight) {
            dx = -1;
            dy = 0;
        } else if (key === "ArrowRight" && !goingLeft) {
            dx = 1;
            dy = 0;
        }
    });

    document.getElementById("restartButton").addEventListener("click", startGame);

    startGame();
});
