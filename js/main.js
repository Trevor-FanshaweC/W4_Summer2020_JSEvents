(() => {
  console.log('JS is workin!');

  window.addEventListener("DOMContentLoaded", function() {
    console.log("DOM parsed");
  })

  window.addEventListener("load", function() {
    console.log("all content loaded");
  })
}());
