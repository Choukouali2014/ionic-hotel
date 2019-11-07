import { Component, OnInit } from '@angular/core';
import { NavController,LoadingController, AlertController } from '@ionic/angular';
import { RoomsService } from '../rooms.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.page.html',
  styleUrls: ['./search-page.page.scss'],
})
export class SearchPagePage implements OnInit  {
  
  tomorrow = new Date();

  roomType: any;
    guests: any;
    beds: any;
    priceRange: any;
    from: any;
    to: any;
    today = new Date();

    constructor(public nav: NavController, public roomsService: RoomsService, 
      public alertCtrl: AlertController, public loadingCtrl: LoadingController) {}
     
      


  ngOnInit() {
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);

    this.priceRange = {
        lower: 0,
        upper: 500
    };

    this.roomType = 'standard';
    this.guests = 1;
    this.beds = 1;
    this.from = this.today.toISOString();
    this.to = this.tomorrow.toISOString();
  }
  findRooms(){
    let loading = this.loadingCtrl.create({
      message: "Finding Rooms....."
    });
    
    let options = {
      roomType: this.roomType,
      guests: this.guests,
      beds: this.beds,
      priceRange: this.priceRange,
      from: this.from,
      to: this.to
  };
  console.log("options selected is :", options);
  this.roomsService.getRooms(options).subscribe((data) =>{
    if(typeof(data[0]) === "undefined"){
      let alert =  this.alertCtrl.create({
        header: 'Oops!',
        subHeader: 'Sorry, no rooms could be found for your search criteria.',
        buttons: ['Ok']
    });
    console.log('the data is : ', data);
     //alert.present();
    }else{
      let navigationExtras: NavigationExtras ={
        queryParams :{
          rooms: data,
          details: options
        }
      };
      this.nav.navigateForward(['available-rooms-page'], navigationExtras);
    }
  },(err)=>{
    console.log(err)
  });
  }
}
