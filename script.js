const gridContainer = document.getElementById("grid-container");

function createGridItem() {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item", "gray"); // הוסף את הצבע האפור לכל ריבוע
    gridItem.addEventListener("click", handleGridItemClick);
    return gridItem;
}

function handleGridItemClick(event) {
    const gridItem = event.target;

    if (gridItem.classList.contains("gray")) { // תבדוק האם הריבוע בצבע אפור
        const isBomb = Math.random() < 0.2; // 20% chance of being a bomb
        gridItem.classList.remove("gray");

        if (isBomb) {
            gridItem.classList.add("red");
            gridItem.textContent = "💥";
            setTimeout(() => {
                alert("You hit a bomb! Game over.");
                location.reload(); // טען מחדש את הדף למשחק חדש
            }, 100);
        } else {
            gridItem.classList.add("green");
            setTimeout(() => {
                gridItem.style.backgroundColor = "green"; // שינוי הצבע לירוק
            }, 100);
        }
    }
}

function initGame() {
    for (let i = 0; i < 25; i++) {
        const gridItem = createGridItem();
        gridContainer.appendChild(gridItem);
    }
}

initGame();
