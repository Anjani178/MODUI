import { Component, OnInit } from '@angular/core';
import { Training } from '../models/training';
import { TrainingService } from '../Service/training.service';

@Component({
  selector: 'app-mt-current',
  templateUrl: './mt-current.component.html',
  styleUrls: ['./mt-current.component.css']
})
export class MtCurrentComponent implements OnInit {

  list3:Training[]=[]
  constructor(private trainingServ: TrainingService) { }

  ngOnInit() {
    this.trainingServ.GetAll().subscribe(k=>{
      k.forEach(element => {
        if(element.status=="Ongoing"&& element.mid==localStorage.getItem("ID")){
          this.list3.push(element)
        }
      });
      })
  }

}
