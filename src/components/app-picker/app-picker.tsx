  import {Component} from '@stencil/core';

@Component({
  tag: 'app-picker',
  styleUrl: 'app-picker.css'
})
export class AppPicker {
  isPicking = false;

  showPickers(id) {
    if(this.isPicking) {
      document.getElementById(id).style.display = 'none';
    } else {
      document.getElementById(id).style.display = 'grid';
    }
    this.isPicking = !this.isPicking;
  }

  render() {
    return [
      <ion-content class="picker-content">
        <div>
          Picker
        </div>
        <div class="dates">
          <span>Current Date - D DD / MM / YYYY - HH:MM</span>
          <span>Selected Date - <button class="date-btn" onClick={()=> this.showPickers('pickers')}>D DD / MM / YYYY - HH:MM</button></span>
        </div>
        <div id="pickers" class="pickers">
          <app-date-picker></app-date-picker>
          <app-time-picker></app-time-picker>
        </div>

      </ion-content>
    ];
  }
}
