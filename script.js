const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const clearBtn = document.getElementById("clear");
const countDiv = document.getElementById("count");
const errorMsg = document.getElementById("error");

let count = 0;

// Increment
incrementBtn.addEventListener("click", () => {
    count++;
    countDiv.innerHTML = count;
    errorMsg.style.display = "none";

    if (count > 0) {
        clearBtn.style.display = "block";
    }
});

// Decrement
decrementBtn.addEventListener("click", () => {
    if (count === 0) {
        errorMsg.style.display = "block";
        return;
    }

    count--;
    countDiv.innerHTML = count;
    errorMsg.style.display = "none";

    if (count === 0) {
        clearBtn.style.display = "none";
    }
});

// Clear
clearBtn.addEventListener("click", () => {
    count = 0;
    countDiv.innerHTML = count;
    clearBtn.style.display = "none";
    errorMsg.style.display = "none";
});
