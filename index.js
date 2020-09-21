function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target")
}

function increaseRankBy(n){
  var rankList=document.querySelectorAll(".ranked-list li")
  for (i=0;i<rankList.length;i++){
    rankList[i]=(parseInt(rankList[i])+n)
  }
}