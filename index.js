function getFirstSelector(selector) {
  var firstSelector = document.querySelector(selector)
  return firstSelector
}

function nestedTarget() {
  var nestedTarget = document.getElementById('nested').getElementsByClassName('target')[0]
  return nestedTarget
}

function increaseRankBy(n) {
  var rankedList = document.getElementById('app').querySelectorAll('ranked-list')
  
  for (let i=0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML, 10) + n
  }
  
}