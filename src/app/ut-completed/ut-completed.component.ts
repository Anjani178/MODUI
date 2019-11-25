import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../Service/training.service';
import { Training } from '../models/training';

@Component({
  selector: 'app-ut-completed',
  templateUrl: './ut-completed.component.html',
  styleUrls: ['./ut-completed.component.css']
})
export class UtCompletedComponent implements OnInit {

  rating=""
  list3:Training[]=[]
  constructor(private trainingServ: TrainingService) { 
  }
  Rating(id){
    this.trainingServ.Update(id,this.rating).subscribe(k=>console.log(k));
  }

  ngOnInit() {
    this.trainingServ.GetAll().subscribe(k=>{
      k.forEach(element => {
        if(element.status=="Completed"&& element.uid==localStorage.getItem("ID")){
          this.list3.push(element)
        }
      });
      })
  }

}
