import {Component, Event, EventEmitter, Prop} from '@stencil/core';

@Component({
  tag: 'app-date-picker',
  styleUrl: 'app-date-picker.css'
})
export class AppDatePicker {
  @Prop()
  currentDate: Date;

  @Event()
  dateSelected: EventEmitter;
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
  numbers = [1,2,3];
  currentYear;
  displayedYear;
  currentMonth;
  displayedMonth;


  _init() {
    this.currentYear = this.currentDate.toJSON().substring(0,4);
    this.currentMonth = this.currentDate.toJSON().substring(5,7);
    this.displayedMonth = this.currentMonth;
    this.displayedYear = this.currentYear;
    if((this.currentYear % 4) === 0) this.months['02'].nbDays++;
  }

  /**
   * For the currently displayed month and year, puts the days in order according to the 1st day of the month
   */
  _displayDaysOfWeek() {
    Object.keys(this.daysOfWeek).map(day => {
      return(
        <div class="day-name">
          <span>{this.daysOfWeek[day]}</span>
        </div>
      )
    })
  }

  _selectDate(number) {
    let date = "";
    date += this.displayedYear+'-'+this.displayedMonth+'-';
    date += number < 10 ? '0' + number : number;
    this.dateSelected.emit(new Date(date).toJSON());
    console.log(new Date(date).toJSON());
  }

  render() {
    this._init();
    return [
      <div>
        {
          this.numbers.map(number => {
              return (
                <span>{number}</span>
              )
            }
          )
        }
      </div>,
      <div class="currently-displayed">
        <button class="display-month-btn prev" onClick={() => {console.log('prev')}}>&lt;&lt;</button>
         {this.months[this.displayedMonth].name} {this.displayedYear}
        <button class="display-month-btn next" onClick={() => console.log('next')}>&gt;&gt;</button>
      </div>,
      <div class="days-week" id="days-week">
        {
          //this._displayDaysOfWeek()
            Object.keys(this.daysOfWeek).map(day => {
            return(
              <div class="day-name">
                <span>{this.daysOfWeek[day]}</span>
              </div>
            )
          })
        }
      </div>,
      <div class="days-month">
        {
          Array.apply(0, Array(this.months[this.currentMonth].nbDays)).map(function (_, i) {
            return <div id={'day-'+(i+1)} class="day-rank" onClick={() => console.log(i+1)}>{i+1}</div>;
            }
          )
        }
      </div>
  ];

  }
}
