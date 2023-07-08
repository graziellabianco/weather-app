import { WeatherDatas } from 'src/app/models/interfaces/weatherDatas.interface';
import { WeatherService } from './../../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy{
  private readonly destroy$: Subject<void> = new Subject;

  public initialCityName:string = 'Ribeirão Preto';
  public watherDatas!:WeatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService){}

ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
}


getWeatherDatas(cityName: string): void {
  this.weatherService.getWeatherData(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        this.watherDatas = response;
        console.log(this.watherDatas.main.temp);
      },
      error: (error) => {
        console.log('Erro');
      }
    });
}


onSubmit(){
  this.getWeatherDatas(this.initialCityName);
  this.initialCityName='';
}

ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
}

}
