var upperDateLimit = 0;
var lowerDateLimit = 0;

document.addEventListener("DOMContentLoaded", function() {
  setUpCurrentDateScreen();
  parent = document.getElementById('main-container');
  elems = document.getElementsByClassName('month-container');
  parent.scrollTo(elems[0].getBoundingClientRect().width * 2, 0);
  parent.addEventListener('scroll',function() {
    scrollLeft = parent.scrollLeft;
    if(scrollLeft > (elems[0].getBoundingClientRect().width * 3)) {
      parent.scrollTo(parent.scrollLeft - elems[0].getBoundingClientRect().width, 0);
      upperDateLimit = new Date(upperDateLimit.getFullYear(), upperDateLimit.getMonth() + 1, 1);
      lowerDateLimit = new Date(lowerDateLimit.getFullYear(), lowerDateLimit.getMonth() + 1, 1);
      deletePrev();
      addFrameForward(upperDateLimit);
    }
    if(scrollLeft < (elems[0].getBoundingClientRect().width)) {
      upperDateLimit = new Date(upperDateLimit.getFullYear(), upperDateLimit.getMonth() - 1, 1);
      lowerDateLimit = new Date(lowerDateLimit.getFullYear(), lowerDateLimit.getMonth() - 1, 1);
      addFrameBackward(lowerDateLimit);
      parent.scrollTo(parent.scrollLeft + elems[0].getBoundingClientRect().width, 0);
      deleteNext();
    }
  });
});

function setUpCurrentDateScreen() {
  currDate = new Date();
  currMonth = currDate.getMonth();
  currYear = currDate.getFullYear();
  addFrameForward(currDate);
  addFrameForward(new Date(currYear, currMonth + 1, 1));
  addFrameForward(new Date(currYear, currMonth + 2, 1));
  upperDateLimit = new Date(currYear, currMonth + 2, 1);
  addFrameBackward(new Date(currYear, currMonth - 1, 1));
  addFrameBackward(new Date(currYear, currMonth - 2, 1));
  lowerDateLimit = new Date(currYear, currMonth - 2, 1);
}

function addFrameForward(date) {
  lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  totalDays = lastDate.getDate();
  monthContainer = document.createElement('div');
  monthContainer.className = "month-container";
  for(i = 0; i < totalDays; i++) {
    dateTextContainer = document.createElement('div');
    dateTextContainer.className = "date-text-container";
    dateTextContainer.innerText = (i + 1) + " / " + (date.getMonth() + 1) + " / " + date.getFullYear();
    dateContainer = document.createElement('div');
    dateContainer.className = "date-container";
    dateContainer.appendChild(dateTextContainer);
    monthContainer.appendChild(dateContainer);
  }
  parent = document.getElementById('main-container');
  parent.appendChild(monthContainer);
}

function addFrameBackward(date) {
  lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  totalDays = lastDate.getDate();
  monthContainer = document.createElement('div');
  monthContainer.className = "month-container";
  for(i = 0; i < totalDays; i++) {
    dateTextContainer = document.createElement('div');
    dateTextContainer.className = "date-text-container";
    dateTextContainer.innerText = (i + 1) + " / " + (date.getMonth() + 1) + " / " + date.getFullYear();
    dateContainer = document.createElement('div');
    dateContainer.className = "date-container";
    dateContainer.appendChild(dateTextContainer);
    monthContainer.appendChild(dateContainer);
  }
  parent = document.getElementById('main-container');
  parent.prepend(monthContainer);
}

function deletePrev() {
  windows = document.getElementsByClassName('month-container');
  elemBegin = windows[0];
  parent = elemBegin.parentElement;
  parent.removeChild(elemBegin);
}

function deleteNext() {
  windows = document.getElementsByClassName('month-container');
  elemEnd = windows[windows.length - 1];
  parent = elemEnd.parentElement;
  parent.removeChild(elemEnd);
}
