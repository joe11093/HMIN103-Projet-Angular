import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router} from '@angular/router';
import { GoodsService } from '../goods.service';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-goods-display-id',
  templateUrl: './goods-display-id.component.html',
  styleUrls: ['./goods-display-id.component.css']
})
export class GoodsDisplayIdComponent implements OnInit {

  constructor(public goodsService: GoodsService, private route: ActivatedRoute, private router : Router, public appService: AppService) { }
  
  good;
    
  ngOnInit() {
  	 console.log("user: " + this.appService.user)
  	this.route.params.subscribe( (params: Params) => {
  		this.goodsService.getGoodWithId(params['id']).subscribe(
  			res=>{
  				if(res[0]){
  					//console.log("res0 :"+res[0]._id);
  					this.good={"id":res[0]._id, "name":res[0].name, "description":res[0].description, "price":res[0].price, "owner_id": res[0].owner_id  };
  					//console.log("JSON: "+JSON.stringify(this.good));
  					 //console.log("dans if 0, value of good: " + this.good);

  				}
  				else{
  					console.log("ELSE! ");
  				}
  			});


  	});
  	console.log("end of ngoninit(), value of good: " + this.good);
}

delete():void{
	 console.log("delete()");
    console.log(this.good.id);

    this.goodsService.deleteGood(this.good.id).subscribe(res=>this.good = res);;
    console.log("end of delete()");
    this.router.navigate(['goods','display']);
}
}
