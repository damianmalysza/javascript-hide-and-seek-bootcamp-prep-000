function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target")
}

function increaseRankBy(n){
  var rankList=document.querySelectorAll(".ranked-list li")
  for (let i=0;i<rankList.length;i++){
    rankList[i].innerHTML=(parseInt(rankList[i].innerHTML)+n)
  }
}

function deepestChild(){
  var current=document.querySelectorAll("#grand-node div")
  var lastValue=current[current.length-1]
  return
}