//card dealer
let rules = 
["تفنگ دار","تکاور","رئیس مافیا","ناتو","گروگانگیر","کارگاه","دکتر","شهروند ساده","نگهبان","شهروند ساده"];
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
shuffleRules=shuffle(rules);

function naghshha(shomareh){
    alert(shuffleRules[shomareh]);
    document.getElementById(`b${shomareh}`).style.display="none";

}
