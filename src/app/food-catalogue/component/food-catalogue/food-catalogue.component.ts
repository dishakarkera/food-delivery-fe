import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FoodItemService } from '../../service/food-item.service';
import { FoodCataloguePage } from '../../../Shared/model/FoodCataloguePage';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodItem } from '../../../Shared/model/FoodItem';

@Component({
  selector: 'app-food-catalogue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-catalogue.component.html',
  styleUrl: './food-catalogue.component.css'
})
export class FoodCatalogueComponent {
  public foodItemResponse!: FoodCataloguePage;
  restaurantId!: number;
  foodItemCart:FoodItem[]=[];
  orderSummary!: FoodCataloguePage;
  constructor(private route:ActivatedRoute,private router:Router,private foodCatalogueService: FoodItemService){}


ngOnInit(): void {
 this.route.paramMap.subscribe(params=>{
  var id=params.get('id');
  this.restaurantId=id?+id:0;
 });
 this.getFoodItemByRestaurant(this.restaurantId);
}


  getFoodItemByRestaurant(restId: number) {
   this.foodCatalogueService.getFoodItemByRestaurant(restId).subscribe(
    data=>{
      this.foodItemResponse =data;
   })
  }

 

increment(food: any) {
  food.quantity++;
  const index=this.foodItemCart.findIndex(item=>item.id===food.id);
  if(index===-1){
    this.foodItemCart.push(food);
  }else{
    this.foodItemCart[index]=food;
  }
}
decrement(food: any) {
  if(food.quantity>0){
    food.quantity--;
    const index=this.foodItemCart.findIndex(item=>item.id===food.id);
  if(this.foodItemCart[index].quantity==0){
    this.foodItemCart.splice(index,1);
  }else{
    this.foodItemCart[index]=food;
  }
  }
}
onCheckOut() {
//this.foodItemCart;
this.orderSummary={
  foodItemList:[],
  restaurant:{}
}
this.orderSummary.foodItemList=this.foodItemCart;
this.orderSummary.restaurant=this.foodItemResponse.restaurant;
this.router.navigate(['/orderSummary'],{queryParams:{data: JSON.stringify(this.orderSummary)}});

}

}
