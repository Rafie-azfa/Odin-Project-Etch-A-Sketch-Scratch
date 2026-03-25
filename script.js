//constant
const SCREEN_SIZE_16_x_16 = 256;

function generateBox(size=SCREEN_SIZE_16_x_16){
    const screenEl = document.querySelector("#screen");
    for(let i = 0; i < size;i++){
        let box = document.createElement("div");
        box.setAttribute(
            `style`,
            `background: blue;
            user-select:none;
            height: 24px;
            width: 24px;
            border:1px solid black;` 
        )
        screenEl.appendChild(box);
    }
}

generateBox();