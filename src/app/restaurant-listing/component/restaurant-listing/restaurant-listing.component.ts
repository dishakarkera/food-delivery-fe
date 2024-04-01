import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Restaurant } from '../../../Shared/model/Restaurant';
import { Router } from '@angular/router';
import { RestaurantService } from '../../service/restaurant.service';

@Component({
  selector: 'app-restaurant-listing',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './restaurant-listing.component.html',
  styleUrl: './restaurant-listing.component.css'
})
export class RestaurantListingComponent {
  public restaurantList: Restaurant[] = [];

constructor(private router:Router,private restaurantservice:RestaurantService){}
  ngOnInit(): void {
    this.getAllRestaurant();
  }
  getAllRestaurant() {
    this.restaurantservice.getAllRestaurant().subscribe(
      data=>{
        this.restaurantList=data;
      }
    )
  }

onButtonClick(id: number|undefined): void {
this.router.navigate(['/food-catalogue',id]);
}
 
getRandomImage() {
const imageCount=8;
const randomIndex=this.getRandomNumber(1,imageCount);
return `${randomIndex}.jpg`;
}
  getRandomNumber(min: number, max: number):number {
    return Math.floor(Math.random()*(max-min+1))+min;
  }

}
