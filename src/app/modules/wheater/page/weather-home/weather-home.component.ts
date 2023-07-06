import { WeatherDatas } from 'src/app/models/interfaces/weatherDatas.interface';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit{

  public initialCityName:string = 'Ribeirão Preto';
  public watherDatas!:WeatherDatas;

  constructor(private weatherService: WeatherService){}

ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
}

getWeatherDatas(cityName: string): void {
  this.weatherService.getWeatherData(cityName).subscribe(
    (response: any) => {
      response && (this.watherDatas = response);
      console.log(this.watherDatas.main.temp);

    },
    (error: any) => {
      console.log('Erro');
    }
  );
}


}
