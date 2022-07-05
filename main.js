firstlane = false;
secondlane = true;
thirdlane = false;
player.style.left='3vw'
c1top = 0;
c2top = 0;
c3top = 0;
c1left = 0;
c2left = 0;
c3left = 0;
lane1 = document.getElementById('lane1')
lane2 = document.getElementById('lane2')
lane3 = document.getElementById('lane3')
player = document.getElementById('player');
car1 = document.createElement('img');
car2 = document.createElement('img');
car3 = document.createElement('img');
trucks = document.getElementsByClassName('trucks')
ptop = 85;
lane1.addEventListener('click', () => {
  if (firstlane == true) {
    // c1left=3; 
    // player.style.left = (c1left)+'vw'
    player.style.left = '3vw'
    firstlane = false;
    secondlane = true;
    thirdlane = false;
  }
})
lane2.addEventListener('click', () => {
  if (secondlane == true) {
    //c2left=38
    //   player.style.left =(c2left)+'vw'
    player.style.left = '38vw'
    firstlane = true;
    secondlane = false;
    thirdlane = true;
  }
})
lane3.addEventListener('click', () => {
  if (thirdlane == true)
    // c3left=73;
    //  player.style.left = (c3left)+'vw'
    player.style.left = '73vw'
  firstlane = false;
  secondlane = true;
  thirdlane = false;
})

//randomisation
//for car1
window.onload = function car1pro() {
  Randomlane = parseInt(Math.random() * 3)
  car1.src = 'opp.png';
  car1.classList.add('trucks');
  container.appendChild(car1);
  if (Randomlane == 0) {
    car1.style.left = '3vw'
  }
  else if (Randomlane == 1) {
    car1.style.left = '3vw'
  }
  else {
    car1.style.left = '73vw'
  }
  Interval1 = setInterval(function() {
    Randomlanefor1 = parseInt(Math.random() * 3)
    c1top += 1;
    car1.style.top = c1top + 'vh'
    if (c1top == 105) {
      c1top = -5;
      if (Randomlanefor1 == 0) {
        car1.style.left = '3vw'
      }
      else if (Randomlanefor1 == 1) {
        car1.style.left = '38vw'
      }
      else {
        car1.style.left = '73vw'

      }
    }
    if ((car1.style.left == player.style.left) && (c1top == ptop || c1top == ptop + 1 || c1top == ptop + 2 || c1top == ptop + 3 || c1top == ptop -
        +4 || c1top == ptop + 5 || c1top == ptop + 6 || c1top == ptop + 7 || c1top == ptop + 8 || c1top == ptop + 9 || c1top == ptop + 10 || c1top == ptop + 11 || c1top == ptop + 12 || c1top == ptop + 13 || c1top == ptop + 14 || c1top == ptop + 15)) {
      container.style.display = 'none'
      over.style.display = 'flex'
    }
  }, 20);
}
//producing 2nd car after 3sec
setTimeout(function car2pro() {
  Randomlane = parseInt(Math.random() * 3)
  car2.src = 'opp.png'
  car2.classList.add('trucks')
  container.appendChild(car2)
  if (Randomlane == 0) {
    car2.style.left = '3vw'
  }
  else if (Randomlane == 1) {
    car2.style.left = '38vw'
  }
  else {
    car2.style.left = '73vw'
  }
  unlockcar2 = true;

}, 3000)
//producing 3rd car after 6sec
setTimeout(function car3pro() {
  Randomlane = parseInt(Math.random() * 3)
  car3.src = 'opp.png'
  car3.classList.add('trucks')
  container.appendChild(car3)
  if (Randomlane == 0) {
    car3.style.left = '3vw'
  }
  else if (Randomlane == 1) {
    car3.style.left = '38vw'
  }
  else {
    car3.style.left = '73vw'
  }
}, 6000)
//car1 automation
//car 2 automation
setTimeout(function() {
  Interval2 = setInterval(function() {
    Randomlanefor2 = parseInt(Math.random() * 3)
    c2top += 1;
    car2.style.top = c2top + 'vh'
    if (c2top == 105) {
      c2top = -5;
      if (Randomlanefor2 == 0) {
        car2.style.left = '3vw'
      }
      else if (Randomlanefor2 == 1) {
        car2.style.left = '38vw'
      }
      else {
        car2.style.left = '73vw'
      }
    }
    if ((car2.style.left == player.style.left) && (c2top == ptop || c2top == ptop + 1 || c2top == ptop + 2 || c2top == ptop + 3 || c2top == ptop -
        +4 || c2top == ptop + 5 || c2top == ptop + 6 || c2top == ptop + 7 || c2top == ptop + 8 || c2top == ptop + 9 || c2top == ptop + 10 || c2top == ptop + 11 || c2top == ptop + 12 || c2top == ptop + 13 || c2top == ptop + 14 || c2top == ptop + 15)) {

      container.style.display = 'none'
      over.style.display = 'flex'

    }
  }, 15);
}, 3000)

//car3 automation
setTimeout(function() {
  Interval3 = setInterval(function() {
    Randomlanefor3 = parseInt(Math.random() * 3)
    c3top += 1;
    car3.style.top = c3top + 'vh'
    if (c3top == 105) {
      c3top = -5;
      if (Randomlanefor3 == 0) {
        car3.style.left = '3vw'
      }
      else if (Randomlanefor3 == 1) {
        car3.style.left = '38vw'
      }
      else {
        car3.style.left = '73vw'
      }
    }
    if ((car3.style.left == player.style.left) && (c3top == ptop || c3top == ptop + 1 || c3top == ptop + 2 || c3top == ptop + 3 || c3top == ptop -
        +4 || c3top == ptop + 5 || c3top == ptop + 6 || c3top == ptop + 7 || c3top == ptop + 8 || c3top == ptop + 9 || c3top == ptop + 10 || c3top == ptop + 11 || c3top == ptop + 12 || c3top == ptop + 13 || c3top == ptop + 14 || c3top == ptop + 15)) {

      container.style.display = 'none'
      over.style.display = 'flex'

    }
  }, 10);
}, 6000)
