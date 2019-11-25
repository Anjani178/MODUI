import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../Service/training.service';
import { Training } from '../models/training';

@Component({
  selector: 'app-mt-completed',
  templateUrl: './mt-completed.component.html',
  styleUrls: ['./mt-completed.component.css']
})
export class MtCompletedComponent implements OnInit {

  list3:Training[]=[]
  constructor(private trainingServ: TrainingService) { }

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
