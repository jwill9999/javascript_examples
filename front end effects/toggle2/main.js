var e = document.getElementsByTagName('li');


function toggleClass() {
  for (var i = 0; i < e.length; i++) {
    e[i].addEventListener("click", bindClick(i));
  }


  function bindClick(i) {
for ( i = 0; i < e.length; i++) {
    e[i].className = "non-active";
  }
  el.className = "active";
}


  











