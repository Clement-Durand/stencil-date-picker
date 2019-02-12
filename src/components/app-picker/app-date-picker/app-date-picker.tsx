import {Component} from '@stencil/core';

@Component({
  tag: 'app-date-picker',
  styleUrl: 'app-date-picker.css'
})
export class AppDatePicker {

  render() {
    const current_date = new Date().toString();
    const current_year = current_date.substring(11,15);
    const days_of_week = {
      'Su': 'S',
      'Mo': 'M',
      'Tu': 'T',
      'We': 'W',
      'Th': 'T',
      'Fr': 'F',
      'Sa': 'S',
    };

    const months = {
      'Jan': {name: 'January', rank: '01', nb_days: 31},
      'Feb': {name: 'February', rank: '02', nb_days: +current_year % 4 === 0? 29: 28},
      'Mar': {name: 'March', rank: '03', nb_days: 31},
      'Apr': {name: 'April', rank: '04', nb_days: 30},
      'May': {name: 'May', rank: '05', nb_days: 31},
      'Jun': {name: 'June', rank: '06', nb_days: 30},
      'Jul': {name: 'July', rank: '07', nb_days: 31},
      'Aug': {name: 'August', rank: '08', nb_days: 31},
      'Sep': {name: 'September', rank: '09', nb_days: 30},
      'Oct': {name: 'October', rank: '10', nb_days: 31},
      'Nov': {name: 'November', rank: '11', nb_days: 30},
      'Dec': {name: 'December', rank: '12', nb_days: 31},
    };
    const numbers = [1,2,3];
//    const current_day_of_week = current_date.substring(0,3);
    const current_month = current_date.substring(4,7);
    const current_day = current_date.substring(8,10);
    console.log(months['Feb'].nb_days);

    return [
      <div>
        {
          numbers.map(number => {
              return (
                <span>{number}</span>
              )
            }
          )
        }
      </div>,
      <div>
        Currently selected : {current_day} / {months[current_month].rank} / {current_year}
      </div>,
      <div class="days-week">
        {
          Object.keys(days_of_week).map(day => {
            return (
              <div class="day-name">
                <span>{days_of_week[day]}</span>
              </div>
            )
          })
        }
      </div>,
      <div class="days-month">
        {
          Array.apply(0, Array(months[current_month].nb_days)).map(function (_, i) {
            return <div class="day-rank">{i+1}</div>;
          }
        )
        }
      </div>
    ];
  }
}
