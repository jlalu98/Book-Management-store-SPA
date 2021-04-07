// class Book {
//     id: string;
//     title: string;
//     author: string;
//     rating: number;
//     price: number;
//     url: string;
//     constructor(id: string, title: string, author: string, rating: number, url: string, price: number) {
//         this.id = id;
//         this.title = title;
//         this.author = author;
//         this.rating = rating;
//         this.url = url;
//         this.price = price;
//     }
var _a, _b, _c, _d;
// }
// class BookManager {
//     books: Book[] = [];
//     constructor() {
//         for (let i = 0; i < localStorage.length; i++) {
//             let data;
//         let key = localStorage.key(i);
//             if(key!=null){
//                 data = localStorage.getItem(key);
//             }
//         data = JSON.parse(data);
//         let newBook: Book = new Book(data.id, data.title, data.author,  Number(data.rating), data.url, Number(data.price));
//             this.books.push(newBook);
//         }
//     }
//     getBookById(id: string): Book[] {
//         let searchList: Book[] = [];
//         for (let b of this.books) {
//             if (b.id === id) {
//                 searchList.push(b);
//             }
//         }
//         return searchList;
//     }
//     getBookByTitle(title: string): Book[] {
//         let searchList: Book[] = [];
//         for (let b of this.books) {
//             if (b.title.toLowerCase().indexOf(title.toLowerCase()) != -1) {
//                 searchList.push(b);
//             }
//         }
//         return searchList;
//     }
//     getBookByAuthor(author: string): Book[] {
//         let searchList: Book[] = [];
//         for (let b of this.books) {
//             if (b.author.toLowerCase().indexOf(author.toLowerCase()) != -1) {
//                 searchList.push(b);
//             }
//         }
//         return searchList;
//     }
//     getBookByPrice(price: number): Book[] {
//         let searchList: Book[] = [];
//         for (let b of this.books) {
//             if (b.price === price) {
//                 searchList.push(b);
//             }
//         }
//         return searchList;
//     }
//     getBookByRating(rating: number): Book[] {
//         let searchList: Book[] = [];
//         for (let b of this.books) {
//             if (b.rating === rating) {
//                 searchList.push(b);
//             }
//         }
//         return searchList;
//     }
//     addBookToTable(book: Book,i:number) {
//         let table = document.getElementById("table") as HTMLTableSectionElement;
//         // let row;
//         // if (table?.innerHTML != null) {
//         //     row = `<tr id='${book.id}'>
//         //         <td>${book["id"]}</td>
//         //         <td>${book["title"]}</td>
//         //         <td>${book["author"]}</td>
//         //         <td>${book["rating"]}</td>
//         //         <td>${book["price"]}</td>
//         //         <td><button id='del-button'><i class="fa fa-trash-o"style="color:blue;"></button></td>
//         //     </tr>`
//         //     table.innerHTML += row;
//         // }
//         //const table=document.querySelector('#bookstable') as HTMLTableElement;
//         const tr=document.createElement('tr');
//         tr.classList.add(book.id);
//         const link=document.createElement('a');
//                 const td1=document.createElement('td');
//                 const td2=document.createElement('td');
//                 const td3=document.createElement('td');
//                 const td4=document.createElement('td');
//                 const td5=document.createElement('td');
//                 const td6=document.createElement('td');
//                 link.textContent=book.title;
//                 link.href=book.url;
//                 const auth=document.createTextNode(book.author);
//                 const button=document.createElement("button");
//                 button.setAttribute('id','del-button');
//                 const icon=document.createElement('i');
//                 const id=document.createTextNode(book.id)
//                 icon.classList.add("material-icons");
//                 icon.innerText='delete';
//                 button.appendChild(icon);
//                 const ratng=document.createTextNode(book.rating.toString());
//                 const price=document.createTextNode(book.price.toString());
//                 td2.appendChild(link);
//                 td3.appendChild(auth);
//                 td4.appendChild(ratng);
//                 td5.appendChild(price);
//                 td6.appendChild(button);
//                 td1.appendChild(id);
//                 tr.appendChild(td1);
//                 tr.appendChild(td2);
//                 tr.appendChild(td3);
//                 tr.appendChild(td4);
//                 tr.appendChild(td5)
//                 tr.appendChild(td6);
//                 table.appendChild(tr);
//         //let delButton= document.querySelector('#del-button') as HTMLButtonElement;
//         // delButton.addEventListener('click',(e:Event)=>{
//         //     //let row=document.querySelector('tableRow') as HTMLTableRowElement; 
//         //     
//         //     delButton.parentNode
//             //let tr=table?.innerHTML[0];
//             button.addEventListener('click',(e:Event)=>{
//                 let key=book.id;
//                 this.books.splice(i,1);
//                 if(localStorage.getItem(key)!=null){
//                     localStorage.removeItem(key);
//                 }
//                 this.deleteRowFn()
//                 this.displayBooks();
//             });
//             // this.books.splice(i,1);
//             // let key=book.id;
//             // if(localStorage.getItem(key)!=null){
//             //     localStorage.removeItem(key);
//             // }
//         //});
//     }
//     deleteRowFn() {
//         let table = document.getElementById("table") as HTMLTableElement;
//         let rowSize=table.rows.length;
//              for (let i = 1; i <= rowSize; i++) {
//                 rowSize=table.rows.length;
//                 table.deleteRow(0);
//             }
//     }
//     // deleteBook(id: string){
//     //     let i: number;
//     //     for (i = 0; i < this.books.length; i++) {
//     //         if (this.books[i].id == id) {
//     //             localStorage.removeItem(`${this.books[i].id}`)
//     //             this.books.splice(i, 1);
//     //         }
//     //     }
//     //     this.displayBooks();
//     // }
//     displayBooks() {
//         manager.deleteRowFn();
//         for (let i = 0; i < this.books.length; i++) {
//             this.addBookToTable(this.books[i],i);
//         }
//     }
//     addBook(book: Book) {
//         localStorage.setItem(`${book.id}`, JSON.stringify({ id: book.id, title: book.title, author: book.author, price: book.price, rating: book.rating, description: book.url }));
//         this.books.push(book);
//     }
// }
import { Book, BookManager } from "./bookManager.js";
let manager;
manager = new BookManager();
// let book1=new Book("12D","The Devil and Miss Prym","Paulo Coelho",4.5,"https://www.goodreads.com/book/show/4008.The_Devil_and_Miss_Prym",350);
// manager.addBook(book1);
// let book2=new Book("12B","Wings of Fire","APJ Abdul KAlam",5,"https://en.wikipedia.org/wiki/Wings_of_Fire_(autobiography)",250);
// manager.addBook(book2);
window.onload = () => {
    manager.displayBooks();
};
(_a = document.querySelector("#btn1")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
    var hide = document.getElementById("add-book");
    var view = document.getElementById("search-book");
    view.style.display = "inline";
    hide.style.display = "none";
    // manager.deleteRowFn();
    manager.displayBooks();
});
(_b = document.querySelector("#btn2")) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (e) => {
    var hide = document.getElementById("search-book");
    var view = document.getElementById("add-book");
    view.style.display = "inline";
    hide.style.display = "none";
    // manager.displayBooks();
});
(_c = document.querySelector('#search-area')) === null || _c === void 0 ? void 0 : _c.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('#search-bar');
    const id = document.querySelector('#one');
    const title = document.querySelector('#two');
    const author = document.querySelector('#three');
    const price = document.querySelector('#four');
    const rating = document.querySelector('#five');
    let result = [];
    if (id.selected) {
        result = manager.getBookById(input.value);
        manager.deleteRowFn();
        debugger;
        for (let j = 0; j < result.length; j++) {
            manager.addBookToTable(result[j], j);
        }
    }
    else if (title.selected) {
        result = manager.getBookByTitle(input.value);
        manager.deleteRowFn();
        for (let j = 0; j < result.length; j++) {
            manager.addBookToTable(result[j], j);
        }
    }
    else if (author.selected) {
        result = manager.getBookByAuthor(input.value);
        manager.deleteRowFn();
        for (let j = 0; j < result.length; j++) {
            manager.addBookToTable(result[j], j);
        }
    }
    else if (price.selected) {
        result = manager.getBookByPrice(Number(input.value));
        manager.deleteRowFn();
        for (let j = 0; j < result.length; j++) {
            manager.addBookToTable(result[j], j);
        }
    }
    else if (rating.selected) {
        //
        result = manager.getBookByRating(Number(input.value));
        manager.deleteRowFn();
        for (let j = 0; j < result.length; j++) {
            manager.addBookToTable(result[j], j);
        }
    }
});
(_d = document.querySelector('#add-details')) === null || _d === void 0 ? void 0 : _d.addEventListener('submit', (e) => {
    e.preventDefault();
    // manager.displayBooks();
    var view = document.getElementById("search-book");
    view.style.display = "inline";
    var hide = document.getElementById("add-book");
    hide.style.display = "none";
    let id = document.querySelector('#id');
    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let rating = document.querySelector('#rating');
    let price = document.querySelector('#price');
    let url = "xtyz.com";
    const book = new Book(id.value, title.value, author.value, Number(rating.value), url, Number(price.value));
    // manager.addBookToTable(book);
    manager.addBook(book);
    manager.displayBooks();
});
// document.querySelector('#del-button')?.addEventListener('click',(e:Event)=>{
//     let row=document.querySelector('tableRow') as HTMLTableRowElement;
//    
//     row.remove();
//     // this.books.splice(i,1);
//     // let key=book.id;
//     // if(localStorage.getItem(key)!=null){
//     //     localStorage.removeItem(key);
//     // }
// });
//DEL FUNCTIONALITY
// button.addEventListener('click',()=>{
//     //tr.remove();
//     
//     // this.books.splice(i,1);
//     // let key=book.id;
//     //  if(localStorage.getItem(key)!=null){
//     //             localStorage.removeItem(key);
//     //  }
//     //  tr.remove();
//     for(let j=0;j<this.books.length;j++){
//         if(button.id===this.books[j].id){
//             this.books.splice(j,1);
//             let key=this.books[j].id;
//             if(localStorage.getItem(key)!=null){
//                 localStorage.removeItem(key);
//             }
//         }
//         //tr.remove();
//     }
// });
