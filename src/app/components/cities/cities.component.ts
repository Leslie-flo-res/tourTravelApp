import { Component } from '@angular/core';
import { Icities } from 'src/app/interfaces/icities';
import { GetcitiesService } from 'src/app/services/getcities.service';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
cities:Icities[];




  constructor(private citiesService:GetcitiesService){
  this.cities=citiesService.cities;
 
 
 


}


//  colorIt (){
//   for (var i=0; i<this.cities.length;i++){
//     if (this.cities[i].attractionSites.length<3){
//       return false;
//     }
//   } 
//   return true
// }



}
  