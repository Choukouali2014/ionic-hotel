import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from '@ionic/angular';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.page.html',
  styleUrls: ['./booking-page.page.scss'],
})
export class BookingPagePage implements OnInit {
  room: any;
  details: any;
  checkIn: any;
  checkOut: any;
  constructor(public nav: NavController, public navParams: NavParams, public roomsService: RoomsService, public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.room = this.navParams.get('room');
        this.details = this.navParams.get('details');
        this.checkIn = new Date(this.details.from).toString().substring(0,15);
        this.checkOut = new Date(this.details.to).toString().substring(0,15);
  }
  book(){
    let newReservation = {
      _id: this.room._id,
      from: this.details.from.substring(0,10),
      to: this.details.from.substring(0,1)
    };
    let loading = this.loadingCtrl.create({
      message:"Booking room...."
    });

    //loading.present();

    this.roomsService.reserveRoom(newReservation).subscribe((res)=> {
      //loading.dismiss();
      this.nav.navigateRoot('/home');
    },(err)=>{
      console.log(err);
    });
  }

}
