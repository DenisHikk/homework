//solution 1
const button_1_object = {
    button_1: document.getElementById("button_1"),
    step: 0,
    sentences: ["Кликни-ка еще разик", "Эта кнопка — самая замечательная кнопка в мире", "Ну чего раскликался тут?!"],
    getSentences() {
        return this.sentences[this.step];
    },
    next() {
        this.step = (this.step + 1) % this.sentences.length;  
    }
}
button_1_object.button_1.addEventListener("click", ()=> {
    alert(button_1_object.getSentences());
    button_1_object.next();    
})

//solution 2
document.getElementById("click_link").addEventListener("click", ()=> alert("И куда это вы собрались?"));

//solution 3
function changeImg() {
    document.querySelectorAll(".card-image img")[0].setAttribute("src", "img/"+randInt(0,4)+".jpg");
}

//solution 4
function getRandomInt() {
    alert("Ваша случайная цифра " + randInt(0,5));
}

//solution 5
function changeImgMouserover() {
    document.querySelectorAll(".card-image img")[1].setAttribute("src", "img/"+randInt(0,4)+".jpg");
}

//solution 6
const btnWithHiddenText = document.getElementById("btnWithHiddenText");
btnWithHiddenText.addEventListener("mouseover", (event) => {
    const mouseX = event.x;
    const mouseY = event.y;
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;
    const hiddentText = document.getElementById("hidden_text");
    hiddentText.style.display = "block"

    hiddentText.style.left = (mouseX) + "px"; 
    hiddentText.style.top = (mouseY) + "px";
})

btnWithHiddenText.addEventListener("mouseleave", (event) => {
    document.getElementById("hidden_text").style.display="none";
})

//solution 7
const toggleColorObject = {
    colorDefault: "#ffffff",
    toggle: false,
    getRandomColor() {
        return Math.floor(Math.random()*16777215).toString(16);
    }
}

const changeColor = (e) => {
    document.bgColor = toggleColorObject.getRandomColor();
}

function toggleColor() {
    const body = document.querySelector("body");
    if(!toggleColorObject.toggle) {
        document.getElementById("colorToggle").innerText="Выключить";
        toggleColorObject.toggle = true;
        body.addEventListener("mouseover", changeColor);       
    } else {
        document.getElementById("colorToggle").innerText="Включать";
        toggleColorObject.toggle = false;
        document.bgColor = toggleColorObject.colorDefault;
        document.body.removeEventListener("mouseover", changeColor);
    }
}

//solution 8 
const imgMouseout = document.getElementById("imgMouseout");
imgMouseout.addEventListener("mouseover", () => {
    imgMouseout.src = "img/2.jpg";
})
imgMouseout.addEventListener("mouseout", () => {
    imgMouseout.src = "img/0.jpg";
})

//solution 9, 11, 12
const radio = document.getElementsByName("radio-text");
radio[0].addEventListener("focus", ()=> {
    input_sol9.removeEventListener("change", output_change);
    input_sol9.addEventListener("blur", output_blur);
})
radio[1].addEventListener("focus", () => {
    input_sol9.removeEventListener("blur", output_blur);
    input_sol9.addEventListener("change", output_change);
})

const output_blur = function() {
    document.getElementById("sol9-output").innerText = "Уже ввели?";
}

const output_change = function() {
    document.getElementById("sol9-output").innerText = "Быстро сделай все, как было!";
}

const input_sol9 = document.getElementById("input_sol9");
input_sol9.addEventListener("focus", () => {
    document.getElementById("sol9-output").innerText = "Введите что-нибудь!!!";
})

//solution 12
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("focus", () => {
    document.getElementById("sol10-output").innerText = "Определитесь с выбором!";
})

//solution 13
const select = () => {
    alert("\"select\": Выделять-то можно, копировать нельзя");
}

const show = () => {
    if(window.getSelection().toString().length > 0) {
        alert("\"selectionchange\": Выделять-то можно, копировать нельзя");
    }
}

const selectionchange = () => {
    document.addEventListener("mouseup", show);
}

const off = () => {
    document.removeEventListener("select", select);
    document.removeEventListener("selectionchange", selectionchange);
    document.removeEventListener("mouseup", show)
}

const selects = document.getElementsByName("select");
selects[0].addEventListener("focus", ()=> {
    document.removeEventListener("selectionchange", selectionchange);
    document.removeEventListener("mouseup", show);
    document.addEventListener("select", select);
})
selects[1].addEventListener("focus", ()=> {
    document.removeEventListener("select", select);
    document.addEventListener("selectionchange", selectionchange);
})

//solution 14
const imgDblClick = document.getElementById("imgDblClick");
imgDblClick.addEventListener("dblclick", () => {
    if(imgDblClick.getBoundingClientRect().width > 900) {
        imgDblClick.style.width = 200 + "px";
        imgDblClick.style.height = 200 + "px";
        return;
    }
    let start = Date.now();
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        if (timePassed >= 2000) {
          clearInterval(timer);
          return;
        }
        draw(timePassed);
      
      }, 20);
      function draw(timePassed) {
        imgDblClick.style.width = imgDblClick.getBoundingClientRect().width + 2 + "px";
        imgDblClick.style.height = imgDblClick.getBoundingClientRect().height + 2 + "px";
      }
})

window.addEventListener("resize", ()=> {
    alert("Вы несете ответственность за изменение размера окна браузера. Если что удалим ваш Windows")
})

//there's utils
const randInt = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
