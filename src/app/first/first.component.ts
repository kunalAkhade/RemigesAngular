import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit{

  name: string | null = '';

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(param => {
         this.name = param.get('name');
    })
  }

}
