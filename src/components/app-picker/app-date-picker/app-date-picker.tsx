import {Component} from '@stencil/core';

@Component({
  tag: 'app-date-picker',
  styleUrl: 'app-date-picker.css'
})
export class AppDatePicker {

  render() {
    const current_date = new Date();
    const current_year = current_date.getFullYear();
    //TODO prettify
    const current_month = current_date.getMonth() < 10 ? '0' + current_date.getMonth() : current_date.getMonth();
    const current_day = current_date.getDay() < 10 ? '0' + current_date.getDay() : current_date.getDay();
    const days = {
      'Su': 'S',
      'Mo': 'M',
      'Tu': 'T',
      'We': 'W',
      'Th': 'T',
      'Fr': 'F',
      'Sa': 'S',
    };

    const months = {
      'January': 31,
      'February': 28,
      'March': 31,
      'April': 30,
      'May': 31,
      'June': 30,
      'July': 31,
      'August': 31,
      'September': 30,
      'October': 31,
      'November': 30,
      'December': 31,
    };
    const numbers = [1,2,3];

    return [
      <div>
        Date picker works
      </div>,
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
        {current_day} / {current_month} / {current_year}
      </div>,
      <div>
        {
          Object.keys(days).map(day => {
            return (
              <div class="day-name">
                <span>{days[day]}</span>
              </div>
            )
          })
        }
        {
          Object.keys(months).map(month => {
            return (
              <div class="day-name">
                <span>{months[month]}</span>
              </div>
            )
          })
        }
      </div>
    ];
  }
}
