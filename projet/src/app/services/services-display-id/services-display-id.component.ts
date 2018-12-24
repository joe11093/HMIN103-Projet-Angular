import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router} from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-services-display-id',
  templateUrl: './services-display-id.component.html',
  styleUrls: ['./services-display-id.component.css']
})
export class ServicesDisplayIdComponent implements OnInit {

  constructor(private servicesService: ServicesService, private route: ActivatedRoute, private router : Router) { }

  service;

  ngOnInit() {
  	this.route.params.subscribe( (params: Params) => {
  		this.servicesService.getServiceWithId(params['id']).subscribe(
  			res=>{
  				if(res[0]){
  					console.log("res0 :"+res[0]._id);
  					this.service={"id":res[0]._id, "name":res[0].name, "description":res[0].description };
  					//console.log("JSON: "+JSON.stringify(this.service));
  					 //console.log("dans if 0, value of service: " + this.service);

  				}
  				else{
  					console.log("ELSE! ");
  				}
  			});
  	});
  	console.log("end of ngoninit(), value of service: " + this.service);
  }

  delete():void{
  	console.log("delete() id: "+this.service.id);
  	//console.log(this.service.id);

    this.servicesService.deleteService(this.service.id).subscribe(res=>this.service = res);;
    console.log("end of delete()");
    this.router.navigate(['services','display']);


  }

}