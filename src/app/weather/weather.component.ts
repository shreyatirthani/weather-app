import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WetService} from '../wet.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
public city;
public temp;
  constructor(private activatedroute: ActivatedRoute, private service: WetService) { }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(arg => {
     this.city = arg.city1 ;
     this.service.getwet(this.city).subscribe(data => {
       this.temp = data;
       console.log(this.temp);
     });
     });

  }

}
