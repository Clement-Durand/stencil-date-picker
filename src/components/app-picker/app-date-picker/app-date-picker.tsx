import {Component, Prop, State} from '@stencil/core';
import {showPickers, selectDate, numberToString} from "../../../helpers/utils";

@Component({
  tag: 'app-date-picker',
  styleUrl: 'app-date-picker.css'
})
export class AppDatePicker {
  @Prop()
  currentDate: Date;

  @State()
  displayedYear;

  @State()
  displayedMonth;

  daysOfWeek = {
    'Su': 'S',
    'Mo': 'M',
    'Tu': 'T',
    'We': 'W',
    'Th': 'T',
    'Fr': 'F',
    'Sa': 'S',
  };
  months = {
    '01': {name: 'January', abr: 'Jan', nbDays: 31},
    '02': {name: 'February', abr: 'Feb', nbDays: 28},
    '03': {name: 'March', abr: 'Mar', nbDays: 31},
    '04': {name: 'April', abr: 'Apr', nbDays: 30},
    '05': {name: 'May', abr: 'May', nbDays: 31},
    '06': {name: 'June', abr: 'Jun', nbDays: 30},
    '07': {name: 'July', abr: 'Jul', nbDays: 31},
    '08': {name: 'August', abr: 'Aug', nbDays: 31},
    '09': {name: 'September', abr: 'Sep', nbDays: 30},
    '10': {name: 'October', abr: 'Oct', nbDays: 31},
    '11': {name: 'November', abr: 'Nov', nbDays: 30},
    '12': {name: 'December', abr: 'Dec', nbDays: 31},
  };
  currentYear;
  currentMonth;

  _init() {
    this.currentYear = this.currentDate.toJSON().substring(0,4);
    this.currentMonth = this.currentDate.toJSON().substring(5,7);
    if(this.displayedMonth == undefined) this.displayedMonth = this.currentMonth;
    if(this.displayedYear == undefined) this.displayedYear = this.currentYear;
    this.displayedYear % 4 === 0 ? this.months['02'].nbDays = 29 : this.months['02'].nbDays = 28;
  }

  /**
   * For the currently displayed month and year, puts the days in order according to the 1st day of the month
   */
  _displayDaysOfWeek() {
  }

  _resetDisplay() {
    this.displayedMonth = this.currentMonth;
    this.displayedYear = this.currentYear;
  }

  _nextMonth() {
    if(+this.displayedMonth === 12){
      this.displayedMonth = '01';
      +this.displayedYear++;
    } else {
      this.displayedMonth++;
      this.displayedMonth+='';
    }
    this.displayedMonth = numberToString(this.displayedMonth);
  }

  _prevMonth() {
    if(+this.displayedMonth === 1){
      this.displayedMonth = '12';
      +this.displayedYear--;
    } else {
      this.displayedMonth--;
      this.displayedMonth+='';
    }
    this.displayedMonth = numberToString(this.displayedMonth);
  }


  render() {
    this._init();

    const year = this.displayedYear;
    const month = this.displayedMonth;
    function select(day) {
      selectDate(day, month, year);
    }

    return [
      <div class="currently-displayed">
        <button class="display-month-btn prev" onClick={() => this._prevMonth()}>&lt;&lt;</button>
        {this.months[this.displayedMonth].name} {this.displayedYear}
        <button class="display-month-btn next" onClick={() => this._nextMonth()}>&gt;&gt;</button>
      </div>,
      <div class="days-week" id="days-week">
        {
          //this._displayDaysOfWeek() days names are do not match the numbers
            Object.keys(this.daysOfWeek).map(day => {
            return(
              <div class="day-name">
                <span>{this.daysOfWeek[day]}</span>
              </div>
            )
          })
        }
      </div>,
      <div class="days-month" onClick={()=> showPickers()}>
        {
          Array.apply(0, Array(this.months[this.displayedMonth].nbDays)).map(function (_, i) {
            return <div id={'day-'+(i+1)} class="day-rank" onClick={() => select(i+1)}>{i+1}</div>;
            }
          )
        }
      </div>,
      <button class="reset" onClick={()=> this._resetDisplay()}>Reset to current</button>,
      <button class="close" onClick={()=> showPickers()}>Close</button>,

    ];

  }
}
