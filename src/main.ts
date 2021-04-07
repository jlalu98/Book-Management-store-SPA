import {Book,BookManager} from "./bookManager.js"
let manager: BookManager;
manager = new BookManager();
// let book1=new Book("12D","The Devil and Miss Prym","Paulo Coelho",4.5,"https://www.goodreads.com/book/show/4008.The_Devil_and_Miss_Prym",350);
// manager.addBook(book1);
// let book2=new Book("12B","Wings of Fire","APJ Abdul KAlam",5,"https://en.wikipedia.org/wiki/Wings_of_Fire_(autobiography)",250);
// manager.addBook(book2);

window.onload = () => {
    manager.displayBooks();
};

document.querySelector("#btn1")?.addEventListener('click',(e:Event)=>{
    var hide=document.getElementById("add-book") as HTMLDivElement;
    var view=document.getElementById("search-book") as HTMLDivElement;
    view.style.display="inline"
    hide.style.display="none";
    // manager.deleteRowFn();
    manager.displayBooks();

});
document.querySelector("#btn2")?.addEventListener('click',(e:Event)=>{
    var hide=document.getElementById("search-book") as HTMLDivElement;
    var view=document.getElementById("add-book") as HTMLDivElement;
    view.style.display = "inline"
    hide.style.display="none";
    // manager.displayBooks();

});


document.querySelector('#search-area')?.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const input = document.querySelector('#search-bar') as HTMLInputElement;
    const id = document.querySelector('#one') as HTMLOptionElement;
    const title = document.querySelector('#two') as HTMLOptionElement;
    const author = document.querySelector('#three') as HTMLOptionElement;
    const price = document.querySelector('#four') as HTMLOptionElement;
    const rating = document.querySelector('#five') as HTMLOptionElement;
    let result: Book[] = [];
    if (id.selected) {
        result = manager.getBookById(input.value);
        manager.deleteRowFn();
        debugger
        for (let j = 0; j < result.length; j++) {
            manager.addBookToTable(result[j],j);
        }
    }
    else if (title.selected) {
        result = manager.getBookByTitle(input.value);
        manager.deleteRowFn();
        for (let j = 0; j < result.length; j++) {
            manager.addBookToTable(result[j],j);
        }
    }
    else if (author.selected) {

        result = manager.getBookByAuthor(input.value);
        manager.deleteRowFn();
        for (let j = 0; j < result.length; j++) {
            manager.addBookToTable(result[j],j);
        }
    }
    else if (price.selected) {

        result = manager.getBookByPrice(Number(input.value));
        manager.deleteRowFn();
        for (let j = 0; j < result.length; j++) {
            manager.addBookToTable(result[j],j);
        }
    }
    else if (rating.selected) {
        //
        result = manager.getBookByRating(Number(input.value));
        manager.deleteRowFn();
        for (let j = 0; j < result.length; j++) {
            manager.addBookToTable(result[j],j);
        }
    }
});

document.querySelector('#add-details')?.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    // manager.displayBooks();
    var view=document.getElementById("search-book") as HTMLDivElement;
    view.style.display="inline"
    var hide=document.getElementById("add-book") as HTMLDivElement;
    hide.style.display="none";
    let id = document.querySelector('#id') as HTMLInputElement;
    let title = document.querySelector('#title') as HTMLInputElement;
    let author = document.querySelector('#author') as HTMLInputElement;
    let rating = document.querySelector('#rating') as HTMLInputElement;
    let price = document.querySelector('#price') as HTMLInputElement;
    let url = "xtyz.com";

    const book = new Book(id.value, title.value, author.value, Number(rating.value), url, Number(price.value));
    // manager.addBookToTable(book);
    manager.addBook(book);
    manager.displayBooks();

});
