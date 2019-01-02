import {Weather} from './weather.js'
const weather = new Weather()
const test = document.getElementById('other-way-of-writing-text')

function otherWayOfWritingText() {
  weather.apiCall()
   test.innerHTML = weather.apiCall();
  //  console.log(weather.celsius)
 }

otherWayOfWritingText();