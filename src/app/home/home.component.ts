import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchText: string;
  searchType: string = 'all';
  isError = false;
  images: any;
  isLoading = false;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  search(){

    if(this.searchText == undefined || this.searchText == ''){
      this.isError = true;
      return;
    }

    this.isLoading = true;
    this.isError = false;

    let el = document.getElementById('imagesWrapper') as HTMLElement;
    el.scrollIntoView({behavior: 'smooth'});

    this.appService.getImages(this.searchText).subscribe((res) => {
      this.isLoading = false;
      console.log('data', res);
      if(res){
        this.images = res['data'];
      }
    },
    error => {
      this.isLoading = false;
      console.log('error', error);
    })
  }

}
