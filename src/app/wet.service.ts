import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WetService {
public key = 'ab6c4a6c38b48ebe27fce1996a5a50cb';
  constructor(private http: HttpClient) { }
  getwet(city) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + this.key + '&units=metric');
  }
}
