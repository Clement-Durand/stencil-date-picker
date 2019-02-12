  import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Stencil Date & Time Picker</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <app-picker></app-picker>
      </ion-content>
    ];
  }
}
