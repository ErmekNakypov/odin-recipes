function generate(r = 16, c = 16, clear = false) {
    const container = document.querySelector('.container')
    const containerWidth = 600 - 6; //6px border size
    const containerHeight = 600 - 6;

    if (clear) {
       container.innerHTML = "";
    }

    const blockWidth = containerWidth / c;
    const blockHeight = containerHeight / c

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            const newDiv = document.createElement('div')
            newDiv.classList.add('block')
            newDiv.style.width = `${blockWidth}px`;
            newDiv.style.height = `${blockHeight}px`;
            container.appendChild(newDiv)
            newDiv.addEventListener('mouseenter', () => {
                newDiv.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
            })
        }
    }
}

function randomNum() {
    return Math.floor(Math.random() * 256);
}

function initButtonHandler() {
  const button = document.querySelector(".create-new-grid");
  button.addEventListener("click", handleClick);
}

function handleClick() {
   let num = prompt("Enter the number of squares per side for the new grid:")
   
   if (num > 100 || num < 1) {
    alert("Invalid input")
    return
   }

   generate(num, num, true)
}

function startGame() {
    generate()
}

startGame()
initButtonHandler()