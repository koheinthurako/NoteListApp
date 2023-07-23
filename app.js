const showBtn = document.querySelector(".showBtn");
const formCard = document.querySelector(".formCard");
const addBtn = document.querySelector(".addBtn");
const closeBtn = document.querySelector(".closeBtn");
const card = document.querySelector(".card");
const title = document.querySelector(".title");
const text = document.querySelector(".text");
const cardBox = document.querySelector(".container .cardBox");
const confirmDelBtn = document.querySelector(".confirmDelBtn");

let target;

function showCard() {
    formCard.classList.remove("d-none");
    formCard.classList.add("d-block");
}

function hideCard() {
    formCard.classList.remove("d-block");
    formCard.classList.add("d-none");
}

function showNote() {
    card.classList.add("d-block");
    card.classList.remove("d-none")
}

function hideNote() {
    card.classList.add("d-none");
    card.classList.remove("d-block")
}

function handleDelete() {
    target.remove();
}

function createCard() {
    let div = document.createElement("div");
    div.classList.add("card", "inputCard", "text-start", "p-2", "border-0", "rounded-4", "overflow-auto", "m-lg-0");
    div.style.height = "200px";
    div.style.width = "300px";

    div.innerHTML = `
        <div class="card-body d-flex flex-column overflow-auto mb-3">
            <h4 class="card-title mb-2 fw-bold">${title.value}</h4>
            <p class="card-text small text-muted">${text.value}</p>
        </div>
        <div class="card-footer bg-white">
            <button class="btn btn-sm btn-danger w-100 mt-1 delBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
        </div>
        `;

    cardBox.append(div);

    let delBtn = document.querySelectorAll(".delBtn");
    delBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            target = e.target.parentElement.parentElement;
            confirmDelBtn.addEventListener('click', handleDelete);
        })
        
    });

}

showBtn.addEventListener('click', _ => {
   showCard(); 
});

addBtn.addEventListener('click', _ => {
    if(title.value || text.value) {
        createCard();
        hideCard();
        title.value = null;
        text.value = null;
    }
});

closeBtn.addEventListener('click', _ => {
    hideCard();
    title.value = null;
})

title.addEventListener('keyup', e => {
    if(e.key == "Enter") {
        if(title.value) {
            createCard();
            hideCard();
            title.value = null;
            text.value = null;
        }
    }
});

text.addEventListener('keyup', e => {
    if(e.key == "Enter") {
        if(title.value) {
            createCard();
            hideCard();
            title.value = null;
            text.value = null;
        }
    }
});
