import {Component, State} from '@stencil/core';
import {showPickers, selectedDate} from "../../helpers/utils";

@Component({
  tag: 'app-picker',
  styleUrl: 'app-picker.css'
})
export class AppPicker {
  currentDate = new Date();

  @State()
  update = false;

  render() {
    return [
      <ion-content class="picker-content">
        <div class="dates">
          <span>Current Date - {this.currentDate.toDateString()}</span>
          <span>Selected Date - <button id="date-btn" class="date-btn" onClick={()=> {showPickers();}}>{selectedDate} D DD / MM / YYYY - HH:MM</button></span>
          {/*used to update the display because i couldnt find a way to do it automatically*/}
          <button class="refresh date-btn" onClick={()=> {this.update = !this.update;}}>Update Display</button>
        </div>
        <div id="pickers" class="pickers" onLoad={()=> {console.log('load')}}>
          <app-date-picker currentDate={this.currentDate}></app-date-picker>
          <app-time-picker></app-time-picker>
        </div>

      </ion-content>
    ];
  }
}
