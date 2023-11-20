document.addEventListener('DOMContentLoaded', () => {
    const gameArea = document.getElementById('gameArea');
    let playerPosition = { x: 0, y: 0 };

    // Emojis for the grid
    const emojis = ['🌲', '🌳', '🌴', '🌵', '🌾', '🌿', '🍀', '🍁', '🍂', '🍃'];
    const playerEmoji = '😀';

    // Generate the grid
    function generateGrid() {
        gameArea.innerHTML = ''; // Clear the game area
        for (let i = 0; i < 100; i++) {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            gameArea.appendChild(emoji);
        }
        // Place the player
        placePlayer();
    }

    // Place the player on the grid
    function placePlayer() {
        const index = playerPosition.y * 10 + playerPosition.x;
        gameArea.children[index].textContent = playerEmoji;
    }

    // Handle keyboard controls
    function movePlayer(event) {
        const { x, y } = playerPosition;
        switch (event.key) {
            case 'ArrowUp':    if (y > 0) playerPosition.y--; break;
            case 'ArrowDown':  if (y < 9) playerPosition.y++; break;
            case 'ArrowLeft':  if (x > 0) playerPosition.x--; break;
            case 'ArrowRight': if (x < 9) playerPosition.x++; break;
        }
        generateGrid();
    }

    // Initialize the game
    generateGrid();

    // Event listener for keyboard controls
    document.addEventListener('keydown', movePlayer);
});
