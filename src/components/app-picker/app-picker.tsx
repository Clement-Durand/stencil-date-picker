  import {Component} from '@stencil/core';

@Component({
  tag: 'app-picker',
  styleUrl: 'app-picker.css'
})
export class AppPicker {
  isPicking = false;

  showPickers() {
    if(this.isPicking) {
      document.getElementById('pickers').style.display = 'none';
      document.getElementById('date-btn').className = 'date-btn';
    } else {
      document.getElementById('pickers').style.display = 'grid';
      document.getElementById('date-btn').className += ' active';
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
          <span>Selected Date - <button id="date-btn" class="date-btn" onClick={()=> this.showPickers()}>D DD / MM / YYYY - HH:MM</button></span>
        </div>
        {/* TODO find a way to make onClick cleaner */}
        <div id="pickers" class="pickers" onClick={()=> this.showPickers()}>
          <app-date-picker onClick={() => this.showPickers()}></app-date-picker>
          <app-time-picker onClick={() => this.showPickers()}></app-time-picker>
        </div>

      </ion-content>
    ];
  }
}
