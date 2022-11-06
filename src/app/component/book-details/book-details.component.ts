import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/Service/bookService/book.service';
import { DataService } from 'src/app/Service/dataService/data.service';
import { UserService } from 'src/app/Service/userService/user.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  bookDetails:any
  message:any;
  Book:any;
  subscription !: Subscription;
  constructor(private user: UserService,private dataService: DataService,private bookService: BookService) { }

  ngOnInit(): void {
    // this.subscription = this.dataService.currentMessage.subscribe(message => this.message = message)
    //this.getallBooks()
    this.Book = localStorage.getItem('bookid')
    console.log(this.Book);
    this.bookService.currentDetails.subscribe((details:any)=>{
      console.log(details.bookName)
      this.bookDetails=details
      console.log(this.bookDetails)
      //this.BookList=details
    })
  }

  // getallBooks()
  // {
  //   this.user.getallBooks().subscribe((result:any) => {
  //     console.log(result);
  //     this.BookList = result.result
  //     //console.log(this.BookList);
  //     //this.BookList.reverse();
  //     console.log("Book List", this.BookList);
      
  //   });

  // }
}
 