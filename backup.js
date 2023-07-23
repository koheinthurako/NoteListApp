// const showBtn = document.querySelector(".showBtn");
// const cardBox = document.querySelector(".cardBox");
// const closeBtn = document.querySelector(".closeBtn");
// const input = document.querySelector("input");
// const text = document.querySelector(".text");
// const addBtn = document.querySelector(".addBtn");
// const noteBox = document.querySelector(".noteBox");

// function showCard() {
//     cardBox.classList.remove("d-none");
//     cardBox.classList.add("d-block");
// }

// function hideCard() {
//     cardBox.classList.remove("d-block");
//     cardBox.classList.add("d-none");
// }

// function showNote() {
//     noteBox.classList.add("d-block");
//     noteBox.classList.remove("d-none")
// }

// function hideNote() {
//     noteBox.classList.add("d-none");
//     noteBox.classList.remove("d-block")
// }

// function noteBoxVisibility() {
//     let notes = noteBox.querySelectorAll(".note");
//     if(notes.length === 0) {
//         hideNote();
//     } else {
//         showNote();
//     }
// }

// function delNote() {
//     console.log("delNote");
//     if(window.confirm("Are you sure to delete this note?")){
//         this.parentElement.parentElement.remove();
//         noteBoxVisibility();
//     }
// }

// function createCard() {
//     let box = document.createElement("div");
//     let content = document.createElement("p");
//     let span = document.createElement("span");
//     let i = document.createElement("i");

//     box.classList.add("px-4", "py-2", "bg-primary", "rounded-3", "text-white", "note", "d-flex", "align-items-center", "justify-content-center", "gap-2");

//     content.innerText = input.value;
//     content.classList.add("m-0", "ps-2");

//     i.classList.add("bi", "bi-x");
//     i.style.fontSize = "1.5rem";

//     span.append(i);

//     box.append(content);
//     box.append(span);
//     noteBox.append(box);

//     noteBox.classList.remove("d-none")
//     noteBox.classList.add("d-block")

//     input.value = null;

//     i.addEventListener('click', delNote);
    
// }

// showBtn.addEventListener('click', _ => {
//    showCard(); 
// });

// closeBtn.addEventListener('click', _ => {
//     hideCard();
//     input.value = null;
// })

// input.addEventListener('keyup', e => {
//     if(e.key == "Enter") {
//         if(input.value) {
//             createCard();
//             hideCard();
//         }
//     }
// });

// addBtn.addEventListener('click', _ => {
//     if(input.value) {
//         createCard();
//         hideCard();
//     }
// });

