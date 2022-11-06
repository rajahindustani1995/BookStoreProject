import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/Service/bookService/book.service';
import { DataService } from 'src/app/Service/dataService/data.service';
import { UserService } from 'src/app/Service/userService/user.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {

  BookList=[]
  message:any;
  subscription!: Subscription;
  constructor(private user: UserService, private route: Router,private dataService: DataService, private bookService: BookService) { }

  ngOnInit(): void {
    //this.subscription = this.dataService.currentMessage.subscribe(message => this.message = message)
    this.getallBooks()
  }
  
  getallBooks()
  {
    this.user.getallBooks().subscribe((result:any) => {
      console.log(result);
      this.BookList = result.result
      //console.log(this.BookList);
      //this.BookList.reverse();
      console.log("Book List", this.BookList);
      
    });

  }
  bookDetails(book: any) {
    this.route.navigateByUrl('/home/details')
    localStorage.setItem('bookid', book._id);
    console.log( book._id);
    this.bookService.quikView(book)
    console.log( book);

    
  }

}
