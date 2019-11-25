import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../Service/training.service';
import { Training } from '../models/training';
import { Router } from '@angular/router';
import { MentorObj } from '../models/mentor-obj';
import { Payment } from '../models/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
list3:Training[]
msg:any
trI :Training
fees:number
men:MentorObj
pay :Payment
  constructor(private trainingSer:TrainingService,private router:Router) { }
  Training(){
    this.trainingSer.Add().subscribe(data=>{this.list3=data;console.log(data)})
  }
  payment(){
    this.trainingSer.paymentAdd(this.pay).subscribe(k=>this.msg=k)
    alert("Payment Successful!!!")
    this.router.navigate(['/utCurrent'])
  }
cancel(){
  this.router.navigate(['/sResult'])
}
  ngOnInit() {
    this.trI = this.trainingSer.tr
    this.men = this.trainingSer.men
    this.fees = this.trainingSer.fees
    this.pay=new Payment()
    this.pay.Amount = this.fees;
    this.pay.AmountMentor = this.fees-this.trI.commissionFee
    this.pay.Mid = this.men.mid;
    this.pay.TId=this.trI.tId
    this.pay.Uid=localStorage.getItem("ID")
}
}
