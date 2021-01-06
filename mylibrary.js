function collision(object1,object2){
    if (abs(object1.x - object2.x)<=object2.width/2 + object1.width/2 &&
    abs(object1.y - object2.y) <= object2.height/2 + object1.height/2) {
   return true
  }
  else {
   return false
  }
  }