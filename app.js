const showBtn = document.querySelector(".showBtn");
const cardBox = document.querySelector(".cardBox");
const closeBtn = document.querySelector(".closeBtn");
const input = document.querySelector("input");
const text = document.querySelector(".text");
const addBtn = document.querySelector(".addBtn");
const noteBox = document.querySelector(".noteBox");

// showBtn.addEventListener('click', showCard);

// function showCard() {
//     createCard();
// };

// function createCard() {
//     let title = document.createElement("h1");
//     let closeBtn = document.createElement("button");

//     title.classList.add("p-5")
//     title.innerText = "Hello World";

//     closeBtn.classList.add("btn", "btn-light", "mb-3");
//     closeBtn.innerText = "Close";

//     // title.classList.add("")

//     cardBox.append(title, closeBtn);
//     closeBtn.addEventListener('click', closeCardBox);
// }

// function closeCardBox() {
//    this.parentElement.remove();
// };

function showCard() {
    cardBox.classList.remove("d-none");
    cardBox.classList.add("d-block");
}

function hideCard() {
    cardBox.classList.remove("d-block");
    cardBox.classList.add("d-none");
}

function createCard() {
    let box = document.createElement("div");
    let content = document.createElement("p");

    box.classList.add("px-4", "py-2", "bg-primary", "rounded-3", "text-white", "note")

    content.innerText = input.value;
    content.classList.add("m-0")

    box.append(content);
    noteBox.append(box);
    input.value = null;
    
}

showBtn.addEventListener('click', _ => {
   showCard(); 
});

closeBtn.addEventListener('click', _ => {
    hideCard();
    input.value = null;
})

input.addEventListener('keyup', e => {
    if(e.key == "Enter") {
        if(input.value) {
            createCard();
            noteBox.classList.remove("d-none")
            noteBox.classList.add("d-block")
            hideCard();
        }
    }
});

addBtn.addEventListener('click', _ => {
    if(input.value) {
        createCard();
        noteBox.classList.remove("d-none")
        noteBox.classList.add("d-block")
        hideCard();
    }
});

