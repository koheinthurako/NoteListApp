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

function handleDelete() {
    target.remove();
}

function createForm() {
    let formCard = document.createElement("div");
    let div = document.createElement("div");

    formCard.classList.add("formCard", "bg-dark", "text-center", "border-0", "rounded-4");

    formCard.innerHTML = `
        <div class="card-body">
            <input type="text" placeholder="Title" class="form-control mb-4 title" autofocus>
            <textarea rows="3" class="form-control mb-4 text" placeholder="Write something..."></textarea>
            <button class="btn btn-primary w-100 addBtn mb-2">Add</button>
            <button class="btn btn-light w-100 closeBtn">Close</button>
        </div>
    `;

    container.classList.add("blur");
    formBox.append(formCard);

    let addBtn = document.querySelector(".addBtn");
    let closeBtn = document.querySelector(".closeBtn");
    let title = document.querySelector(".title");
    let text = document.querySelector(".text");

    function deleteForm() {
        let deleteForm = addBtn.parentNode.parentElement;
        deleteForm.remove();
        container.classList.remove("blur");
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
    createForm();
});
