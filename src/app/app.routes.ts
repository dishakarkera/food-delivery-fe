import { Routes } from '@angular/router';
import { RestaurantListingComponent } from './restaurant-listing/component/restaurant-listing/restaurant-listing.component';
import { FoodCatalogueComponent } from './food-catalogue/component/food-catalogue/food-catalogue.component';
import { OrderSummaryComponent } from './order-summary/component/order-summary/order-summary.component';

export const routes: Routes = [
    
    {
        path:'', component:RestaurantListingComponent
    }
    , {
        path:'food-catalogue/:id', component:FoodCatalogueComponent
    }
    ,{
        path:'orderSummary', component:OrderSummaryComponent
    }
];
