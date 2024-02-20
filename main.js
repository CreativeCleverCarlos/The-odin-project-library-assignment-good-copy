

//causes the add book entry to pop up
let newBookButton = document.querySelector("#add-Book-Button");
newBookButton.addEventListener("click", function(){
    let newBookForm = document.querySelector(".form-slip-container");
    newBookForm.style.display = "block"
})

//cancells the add a book pop-up box
let cancelAddBook = document.querySelector("#cancel-Button");
cancelAddBook.addEventListener("click", function (){
    let newBookForm = document.querySelector(".form-slip-container");
    newBookForm.style.display = "none";
})


const myLibrary = []

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages
}

//example of inputs for the user
let exampleBook1 = new Book("One Piece", "Eiichiro Oda", 107);
let exampleBook2 = new Book("One Punch Man", "One", 29);
let exampleBook3 = new Book("Hunter X Hunter", "Yoshihiro Togashi", 37)


function exampleOfBooks(){
    myLibrary.push(exampleBook1);
    myLibrary.push(exampleBook2);
    myLibrary.push(exampleBook3);
    render();
}

exampleOfBooks();



function addBookToLibrary(){
    let title = document.querySelector("#title").value; //this is selecting the variable of "title" from the inputed user and placing it into the title
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
    render();
}


//this is an event listener for the addbook button in the form, so when the information is given, it pops up

document.querySelector(".form-slip").addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary()
})


let testing = new Book("Sonic The Hedgehog", "i dunno the author", 50)

//to show the inputted values from the user which we take from javascrript, and place them unto html, a render function will be created. It's purpose is literally to take website code and place it into interactive pages that users can see. It renders code :).



function render(){ //this is the code that I don't really fully understand but I'll do my best to explain it
    let libraryBookAddition = document.querySelector(".books-container");

        libraryBookAddition.innerHTML=""; //to make it so that when a book is added, there isn't a bunch of duplicates of the previous

    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "books-container") /** For style purposes, to choose what class I want the chosen element (class in this class) to be like**/

        bookEl.innerHTML = /** Below will show the classes that are being targetted on CSS for the style, and then displaying them in the newly library for the div**/
                            `
                            <div class="card-form-printed">
                                <div class="for-the-image">
                                    <img src="jujutsu-kaisen-aoi-todo.jpg">
                                </div>
                                <div class="text-for-card">
                                
                                    <h3 class="title">${book.title}</h3> 
                                    <h5 class="author">Written by: ${book.author}</h5>
                                    <p>No. of Pages: ${book.pages}</p>
                                    <p class="read-status">${book.completion ? "📖" : "📕"} </p>
                                        <div class="bottom-buttons"> 
                                        <button class="remove-button" onclick="removeBook(${i})">Remove</button>
                                        <button class="toggle-read-button" onclick="toggleRead(${i})">Toggle Read</button>
                                        </div>
                            </div>
                            `;
        libraryBookAddition.appendChild(bookEl);
    }
}

//to remove a book from the list

function removeBook(index){
    myLibrary.splice(index, 1);
    render();
}

    //to make sure every card slip that comes out has the toggling of the book
    Book.prototype.toggleRead = function(){
        this.completion = !this.completion;
    }

//to toggle the book from being open to closed

    function toggleRead(index){
        myLibrary[index].toggleRead();
        render();
    }

