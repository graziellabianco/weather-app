import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  private apiKey = 'c93d285dc0facd8f27de09c8c1d1fbca';

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<any> {
    return this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`);
  }
}
