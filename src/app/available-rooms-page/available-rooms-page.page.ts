import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-available-rooms-page',
  templateUrl: './available-rooms-page.page.html',
  styleUrls: ['./available-rooms-page.page.scss'],
})
export class AvailableRoomsPagePage implements OnInit {
  rooms: any;
  details: any;
  constructor(public nav: NavController, public navParams: ActivatedRoute) { 
    this.navParams.paramMap.subscribe( params =>{
      this.rooms = params.get('rooms');
      this.details = params.get('details');
    })
  }
  ngOnInit() {
  }

  bookRoom(room){
    let navigationExtras: NavigationExtras ={
      queryParams :{
        room: room,
        details: this.details
      }
    };
    this.nav.navigateForward(['booking-page'],navigationExtras);
  }

}
