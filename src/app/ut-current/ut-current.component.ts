import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../Service/training.service';
import { Training } from '../models/training';

@Component({
  selector: 'app-ut-current',
  templateUrl: './ut-current.component.html',
  styleUrls: ['./ut-current.component.css']
})
export class UtCurrentComponent implements OnInit {

  list3:Training[]=[]
  constructor(private trainingServ: TrainingService) { }

  ngOnInit() {
    this.trainingServ.GetAll().subscribe(k=>{
      k.forEach(element => {
        if(element.status=="Ongoing"&& element.uid==localStorage.getItem("ID")){
          this.list3.push(element)
        }
      });
      })
  }

}
