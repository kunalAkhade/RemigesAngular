import { Component } from '@angular/core';
import { MapComponent } from "../map/map.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MapComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  firstName:any;
  lastName:any;
  city:any;
  state:any;
  address:any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log('Query Params:', params);

      // Access individual parameters
      this.firstName = params['firstName'];
      this.lastName = params['lastName'];
      this.address = params['address'];
      this.state = params['state'];
      this.city = params['city'];
    });
  }


}
