export class Book {
    constructor(id, title, author, rating, url, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.rating = rating;
        this.url = url;
        this.price = price;
    }
}
export class BookManager {
    constructor() {
        this.books = [];
        for (let i = 0; i < localStorage.length; i++) {
            let data;
            let key = localStorage.key(i);
            if (key != null) {
                data = localStorage.getItem(key);
            }
            data = JSON.parse(data);
            let newBook = new Book(data.id, data.title, data.author, Number(data.rating), data.url, Number(data.price));
            this.books.push(newBook);
        }
    }
    getBookById(id) {
        let searchList = [];
        for (let b of this.books) {
            if (b.id === id) {
                searchList.push(b);
            }
        }
        return searchList;
    }
    getBookByTitle(title) {
        let searchList = [];
        for (let b of this.books) {
            if (b.title.toLowerCase().indexOf(title.toLowerCase()) != -1) {
                searchList.push(b);
            }
        }
        return searchList;
    }
    getBookByAuthor(author) {
        let searchList = [];
        for (let b of this.books) {
            if (b.author.toLowerCase().indexOf(author.toLowerCase()) != -1) {
                searchList.push(b);
            }
        }
        return searchList;
    }
    getBookByPrice(price) {
        let searchList = [];
        for (let b of this.books) {
            if (b.price === price) {
                searchList.push(b);
            }
        }
        return searchList;
    }
    getBookByRating(rating) {
        let searchList = [];
        for (let b of this.books) {
            if (b.rating === rating) {
                searchList.push(b);
            }
        }
        return searchList;
    }
    addBookToTable(book, i) {
        let table = document.getElementById("table");
        // let row;
        // if (table?.innerHTML != null) {
        //     row = `<tr id='${book.id}'>
        //         <td>${book["id"]}</td>
        //         <td>${book["title"]}</td>
        //         <td>${book["author"]}</td>
        //         <td>${book["rating"]}</td>
        //         <td>${book["price"]}</td>
        //         <td><button id='del-button'><i class="fa fa-trash-o"style="color:blue;"></button></td>
        //     </tr>`
        //     table.innerHTML += row;
        // }
        //const table=document.querySelector('#bookstable') as HTMLTableElement;
        const tr = document.createElement('tr');
        tr.classList.add(book.id);
        const link = document.createElement('a');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');
        link.textContent = book.title;
        link.href = book.url;
        const auth = document.createTextNode(book.author);
        const button = document.createElement("button");
        button.setAttribute('id', 'del-button');
        const icon = document.createElement('i');
        const id = document.createTextNode(book.id);
        icon.classList.add("material-icons");
        icon.innerText = 'delete';
        button.appendChild(icon);
        const ratng = document.createTextNode(book.rating.toString());
        const price = document.createTextNode(book.price.toString());
        td2.appendChild(link);
        td3.appendChild(auth);
        td4.appendChild(ratng);
        td5.appendChild(price);
        td6.appendChild(button);
        td1.appendChild(id);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        table.appendChild(tr);
        //let delButton= document.querySelector('#del-button') as HTMLButtonElement;
        // delButton.addEventListener('click',(e:Event)=>{
        //     //let row=document.querySelector('tableRow') as HTMLTableRowElement; 
        //     
        //     delButton.parentNode
        //let tr=table?.innerHTML[0];
        button.addEventListener('click', (e) => {
            let key = book.id;
            this.books.splice(i, 1);
            if (localStorage.getItem(key) != null) {
                localStorage.removeItem(key);
            }
            this.deleteRowFn();
            this.displayBooks();
        });
        // this.books.splice(i,1);
        // let key=book.id;
        // if(localStorage.getItem(key)!=null){
        //     localStorage.removeItem(key);
        // }
        //});
    }
    deleteRowFn() {
        let table = document.getElementById("table");
        let rowSize = table.rows.length;
        for (let i = 1; i <= rowSize; i++) {
            rowSize = table.rows.length;
            table.deleteRow(0);
        }
    }
    // deleteBook(id: string){
    //     let i: number;
    //     for (i = 0; i < this.books.length; i++) {
    //         if (this.books[i].id == id) {
    //             localStorage.removeItem(`${this.books[i].id}`)
    //             this.books.splice(i, 1);
    //         }
    //     }
    //     this.displayBooks();
    // }
    displayBooks() {
        this.deleteRowFn();
        for (let i = 0; i < this.books.length; i++) {
            this.addBookToTable(this.books[i], i);
        }
    }
    addBook(book) {
        localStorage.setItem(`${book.id}`, JSON.stringify({ id: book.id, title: book.title, author: book.author, price: book.price, rating: book.rating, description: book.url }));
        this.books.push(book);
    }
}
