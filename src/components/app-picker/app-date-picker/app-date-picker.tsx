import {Component} from '@stencil/core';

@Component({
  tag: 'app-date-picker',
  styleUrl: 'app-date-picker.css'
})
export class AppDatePicker {

  render() {
    const days = {
      'Su': 'S',
      'Mo': 'M',
      'Tu': 'T',
      'We': 'W',
      'Th': 'T',
      'Fr': 'F',
      'Sa': 'S',
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
        {
          Object.keys(days).map(day => {
            return (
              <th>
                <h5>{day}</h5>
                <h5>{days[day]}</h5>
              </th>
            )
          })
        }
      </div>
    ];
  }
}
