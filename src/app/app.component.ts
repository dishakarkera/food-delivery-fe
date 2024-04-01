import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './headers/component/header/header.component';
import { RestaurantListingComponent } from './restaurant-listing/component/restaurant-listing/restaurant-listing.component';
import {  HttpClientModule } from '@angular/common/http';
import { FoodCatalogueComponent } from './food-catalogue/component/food-catalogue/food-catalogue.component';
import { OrderSummaryComponent } from './order-summary/component/order-summary/order-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,RestaurantListingComponent,HttpClientModule,FoodCatalogueComponent,OrderSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food-delivery-app';
}
