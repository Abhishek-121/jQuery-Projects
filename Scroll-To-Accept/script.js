const watch = document.querySelector('.watch');

$(document).ready(function(){
  function obsCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
      $('.accept').disabled = false;
      obs.unobserve(terms.lastElementChild);
    }
  }
  const obs = new IntersectionObserver(obCallback, {
    root: $('.terms-and-conditions'),
    threshold: 1,
  });
  obs.observe(terms.lastElementChild); 
});