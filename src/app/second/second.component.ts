import { routes } from '../app.routes';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent implements OnInit{

  id:string | null = null;

  constructor(private route: ActivatedRoute){

  }

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');

      })


    }

}
