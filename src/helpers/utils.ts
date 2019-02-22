var isPicking = false;

export var selectedDate = new Date().toDateString();

export function showPickers() {
  if(isPicking) {
    document.getElementById('pickers').style.display = 'none';
    document.getElementById('date-btn').className = 'date-btn';
  } else {
    document.getElementById('pickers').style.display = 'grid';
    document.getElementById('date-btn').className += ' active';
  }
  isPicking = !isPicking;
}

export function numberToString(number) {
  number = +number;
  number < 10 ? number = '0' + number : number;
  return number;
}

export function selectDate(day, month, year) {
  let date = "";
  date += year+'-'+month+'-';
  date += numberToString(day);
  selectedDate = new Date(date).toDateString();
  console.log('new selection ' +selectedDate);
}



