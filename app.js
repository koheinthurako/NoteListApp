const showBtn = document.querySelector(".showBtn");
const formCard = document.querySelector(".formCard");
const formBox = document.querySelector(".formBox");
const card = document.querySelector(".card");
const title = document.querySelector(".title");
const text = document.querySelector(".text");
const cardBox = document.querySelector(".container .cardBox");
const confirmDelBtn = document.querySelector(".confirmDelBtn");
const container = document.querySelector(".container");

let target;

function createForm() {
    let formCard = document.createElement("div");

    formCard.classList.add("formCard", "bg-dark", "text-center", "border-0", "rounded-4", "animateIn");

    formCard.innerHTML = `
        <div class="card-body">
            <input type="text" placeholder="Title" class="form-control mb-4 title">
            <textarea rows="3" class="form-control mb-4 text" placeholder="Write something..."></textarea>
            <button class="btn btn-primary w-100 addBtn mb-2">Add</button>
            <button class="btn btn-light w-100 closeBtn">Close</button>
        </div>
    `;

    container.classList.add("blur");
    // formCard.classList.add("animateIn");
    
    formBox.append(formCard);

    let addBtn = document.querySelector(".addBtn");
    let closeBtn = document.querySelector(".closeBtn");
    let title = document.querySelector(".title");
    let text = document.querySelector(".text");

    function deleteForm() {
        let deleteForm = addBtn.parentNode.parentElement;
        formCard.classList.remove("animateIn");
        formCard.classList.add("animateOut");
        setTimeout(() => {
            deleteForm.remove();
            container.classList.remove("blur");
        }, 100);
    };

    addBtn.addEventListener('click', _ => {
        if(title.value || text.value) {
            createCard(title.value, text.value);
            deleteForm();
        }
    });
    
    closeBtn.addEventListener('click', _ => {
        deleteForm();
    });

    title.addEventListener('keyup', e => {
        if(e.key == "Enter") {
            if(title.value) {
                createCard(title.value, text.value);
                title.value = null;
                text.value = null;
                deleteForm();
            }
        }
    });
    
    text.addEventListener('keyup', e => {
        if(e.key == "Enter") {
            if(title.value) {
                createCard(title.value, text.value);
                title.value = null;
                text.value = null;
                deleteForm();
            }
        }
    });

    title.focus();
};

function handleDelete() {
    target.remove();
    saveNotesToLocalStorage();
}

function createCard(title, text) {
    let div = document.createElement("div");
    div.classList.add("card", "inputCard", "text-start", "p-2", "border-0", "rounded-4", "overflow-auto", "m-lg-0");
    div.style.height = "200px";
    div.style.width = "300px";

    div.innerHTML = `
        <div class="card-body d-flex flex-column overflow-auto mb-3">
            <h4 class="card-title mb-2 fw-bold">${title}</h4>
            <p class="card-text small text-muted">${text}</p>
        </div>
        <div class="card-footer bg-white">
            <button class="btn btn-sm btn-danger w-100 mt-1 delBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
        </div>
        `;

        cardBox.prepend(div);
        cardBox.classList.add("animate__bounceIn");

    let delBtn = document.querySelectorAll(".delBtn");
    delBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            target = e.target.parentElement.parentElement;
            confirmDelBtn.addEventListener('click', handleDelete);
        })
        
    });

    saveNotesToLocalStorage();

}

function saveNotesToLocalStorage() {
    const notes = [];
    const inputCards = document.querySelectorAll(".inputCard");

    inputCards.forEach(card => {
        const titleElement = card.querySelector(".card-title");
        const textElement = card.querySelector(".card-text");
        const note = {
            title: titleElement.innerText,
            text: textElement.innerText,
        };
        notes.push(note);
    });

    // Save the notes array as a JSON string in localStorage
    localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotesFromLocalStorage() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        const notes = JSON.parse(savedNotes);
        notes.reverse().forEach(note => {
            createCard(note.title, note.text);
        });
    }
}

// Load saved notes from localStorage when the page loads
loadNotesFromLocalStorage();

showBtn.addEventListener('click', _ => {
    createForm();
});
