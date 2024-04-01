import { FoodItem } from "./FoodItem";
import { Restaurant } from "./Restaurant";

export interface Order{
    foodItemList:FoodItem[];
    userId:number;
    restaurant:Restaurant;


}