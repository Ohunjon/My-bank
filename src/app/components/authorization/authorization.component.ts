import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  /*  home -1
  about-2
  contact-3
  login-4
  */

  headerHeight = 70;
  page: number;
  currentUrl: string;
  flagSection=false;

  constructor(private router: Router) {
    this.currentUrl = String(this.router.url).replace('/', '');
    if (this.currentUrl === 'home') {
      this.page = 1;
      this.flagSection=true;
    }
    if (this.currentUrl === 'about') {
      this.page = 2;
      this.flagSection=true;
    }
    if (this.currentUrl === 'feedback') {
      this.page = 3;
      this.flagSection=true;
    }
    if (this.currentUrl === 'login') {
      this.page = 4;
      //console.log(this.page);
    }
  }


  ngOnInit() {

  }

  changePage(pageNumber: number) {
    if(pageNumber)
    {
      this.page=pageNumber;
      if(this.page==1 || this.page==2 || this.page==3)
      {this.flagSection=true;}
      else{this.flagSection=false;}
      //console.log(this.page);
    }
  }


  @ViewChild('header') header: ElementRef;

  @HostListener("window: scroll", [])
 onWindowScroll() {
    if(window.pageYOffset >= this.headerHeight)
    {
      //console.log('fixed');
      if(this.page===1 || this.page ===2 || this.page ===3) {
        this.header.nativeElement.classList.add('fixed');
        this.header.nativeElement.classList.add('box-sh');
      }
      else { this.header.nativeElement.classList.remove('fixed');
        this.header.nativeElement.classList.remove('box-sh');
      }
    }
    else {
      this.header.nativeElement.classList.remove('fixed');

    }
  }


}
