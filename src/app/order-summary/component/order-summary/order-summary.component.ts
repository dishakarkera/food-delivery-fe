import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../service/order.service';
import { Order } from '../../../Shared/model/Order';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {

  orderSummary!: Order;
  obj:any;
  total:any;
  showDialog:boolean=false;


  constructor(private route:ActivatedRoute,private orderService:OrderService,private router:Router){}
  ngOnInit(): void {
    const data=this.route.snapshot.queryParams['data'];
    console.log(data);
    this.obj=JSON.parse(data);
   // console.log(this.obj.foodItemList);
    this.obj.userId=1;
   console.log(this.obj);
    this.orderSummary=this.obj;
   
    console.log(this.orderSummary);
    this.total=this.orderSummary.foodItemList.reduce((accumulator,currentValue)=>{
      return accumulator+(currentValue.quantity * currentValue.price);
    },0);
  }


closeDialog() {
this.showDialog=false;
this.router.navigate(['/']);
}
saveOrder() {
this.orderService.saveOrder(this.orderSummary).subscribe(response=>{
  this.showDialog=true;
},
error=>{
  console.error('Failed to save data.',error);
}
);
}

}