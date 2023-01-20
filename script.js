let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const biblioteca = document.querySelector('.biblioteca');

/*
function addBookToLibrary(title, author, pages, read){
    let div = document.createElement('div');
    let hijo = biblioteca.appendChild(div);
    hijo.classList.add('card');

    let p1 = document.createElement('p');
    p1.classList.add('textCard');
    p1.textContent = title;
    hijo.appendChild(p1);

    let p2 = document.createElement('p');
    p2.textContent = author;
    hijo.appendChild(p2);

    let p3 = document.createElement('p');
    p3.textContent = pages;
    hijo.appendChild(p3);

    let p4 = document.createElement('p');
    p4.textContent = read;
    hijo.appendChild(p4);

}*/

function showBooks(){

    for (let i = 0; i < myLibrary.length; i++){

        let div = document.createElement('div');
        let hijo = biblioteca.appendChild(div);
        hijo.classList.add('card');

        let p1 = document.createElement('p');
        p1.classList.add('textCard');
        p1.textContent = myLibrary[i].title;
        hijo.appendChild(p1);

        let p2 = document.createElement('p');
        p2.textContent = myLibrary[i].author;
        hijo.appendChild(p2);

        let p3 = document.createElement('p');
        p3.textContent = myLibrary[i].pages;
        hijo.appendChild(p3);

        let p4 = document.createElement('p');
        p4.textContent = myLibrary[i].read;
        hijo.appendChild(p4);

        let cont = document.createElement('div');
        cont.setAttribute('id', 'contenedorBasura');

        hijo.appendChild(cont);

        let basura = document.createElement('img');
        cont.appendChild(basura);
        basura.setAttribute('src', 'delete.png');
        basura.setAttribute('id', 'basura');
        basura.classList.add('botonBorrar');
        basura.setAttribute('title', 'Delete');

        let libro = document.createElement('img');
        cont.appendChild(libro);
        libro.setAttribute('src', 'book.png');
        libro.setAttribute('id', 'libro');
        libro.classList.add('botonLeido');
        libro.setAttribute('title', 'Read / Not read');
    }

    //funcion para eliminar la tarjeta al apretar el icono de la basura
    //tambien borra el libro de la lista de ojetos myLibrary

    let botonesBorrar = document.querySelectorAll('.botonBorrar');

    for (let i = 0; i < botonesBorrar.length; i++){
        botonesBorrar[i].addEventListener('click', function(){
            console.log(myLibrary);
            myLibrary.splice(i, 1);
            console.log(myLibrary);

            if ( biblioteca.hasChildNodes){
                while ( biblioteca.childNodes.length >= 1 ){
                    biblioteca.removeChild( biblioteca.firstChild );
                }
            }   
        
            showBooks();

        });
    }

    //funcion para cambiar el estatus de Leido o No leido
    //Si el contenido es distinto de "Read" entonces se va a cambiar por Read
    //Si el contenido es igual a "Read" entonces se va a cambiar por "Not read"

    let botonesLeido = document.querySelectorAll('.botonLeido');

    for (let i = 0; i < botonesLeido.length; i++){
        botonesLeido[i].addEventListener('click', function(){
            console.log("Funca");
            console.log(myLibrary[i].read);
            if (myLibrary[i].read == "Read" || myLibrary[i].read == "read"){
                myLibrary[i].read = "Unread";

                if ( biblioteca.hasChildNodes){
                    while ( biblioteca.childNodes.length >= 1 ){
                        biblioteca.removeChild( biblioteca.firstChild );
                    }
                }   
            
                showBooks();

            }
            else{
                myLibrary[i].read = "Read";

                if ( biblioteca.hasChildNodes){
                    while ( biblioteca.childNodes.length >= 1 ){
                        biblioteca.removeChild( biblioteca.firstChild );
                    }
                }   
            
                showBooks();

            }
        });
    }

}

function addBookToLibrary(objeto){
    myLibrary[myLibrary.length] = objeto;
}

const hobbit = new Book('The Hobbit', 'Tolkien', 300, 'Todavia no leido');
const biblia = new Book('Biblia', 'Iglesia', 1133, 'No');
const cien = new Book('Cien años de soledad', 'Gabriel Garcia Marquez', 102121, 'A medias');
const milNueve = new Book('1984', 'George Orwel', '23231', 1232 ,'A medias');
const mundo = new Book('Un mundo Feliz', 'Aldous Huxley', 7123, 'Read');

myLibrary[0] = hobbit;
myLibrary[1] = biblia;
myLibrary[2] = cien;
myLibrary[3] = milNueve;
myLibrary[4] = mundo;

for (let i = 0; i < myLibrary.length; i++){
    console.log(myLibrary[i].title);
}


showBooks();


const boton = document.querySelector('#boton');

boton.addEventListener('click', function(){

    let titulo = document.querySelector('#title');
    let autor = document.querySelector('#author');
    let paginas = document.querySelector('#pages');
    let leido = document.querySelector('#read');
    const nuevo = new Book(titulo.value, autor.value, paginas.value, leido.value);

    addBookToLibrary(nuevo);

    if ( biblioteca.hasChildNodes){
        while ( biblioteca.childNodes.length >= 1 ){
            biblioteca.removeChild( biblioteca.firstChild );
        }
    }   

    showBooks();
});


