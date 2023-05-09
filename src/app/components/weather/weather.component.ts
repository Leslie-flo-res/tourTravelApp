import { Component } from '@angular/core';
import { Iweather } from 'src/app/interfaces/iweather';
import { GetweatherService } from 'src/app/services/getweather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})  
export class WeatherComponent {
weather:Iweather[];


  constructor( private weatherService:GetweatherService ,){
    this.weather=weatherService.weather
    }




}
