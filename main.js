class Book{
    constructor(title,author,publicationYear){
       this.title=title
       this.author=author
       this.publicationYear=publicationYear
    }
    bookdetails(){
        document.write("Title : "+this.title+"<br>");
        document.write("Author : "+this.author+"<br>");
        document.write("This book is published in the year of "+this.publicationYear+"<br>");
    }
}
let book=new Book("Harry Potter","J.K. Rowling",1997)

class Ebook extends Book{
    constructor(title,author,publicationYear,bookprice){
        super(title,author,publicationYear)
        this.bookprice=bookprice
    }
    books(){
        document.write("Book price : Rs "+this.bookprice);
    }
}
let ebook=new Ebook("Harry Potter","J.K. Rowling",1997,500)
ebook.bookdetails()
ebook.books()