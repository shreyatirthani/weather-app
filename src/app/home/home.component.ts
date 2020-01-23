import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public city1;
  constructor(private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
  }
  onsub()
  {
    this.router.navigate(['/weather'] , {queryParams: { city1 : this.city1}});
  }

}
