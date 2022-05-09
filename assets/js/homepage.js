// function for the modal on the homepage
document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('textarea1')
  const box = document.querySelector('.modal');
  M.Modal.init(box,{
    onOpenEnd: function(modal,trigger) {
      const charPage = document.getElementById('charPage')
      charPage.addEventListener('click', () => {
        console.log('hello world')
        localStorage.setItem("charSelected", form.value);
      });
      
    }
  });

});
// function for the dropdown trigger to the favorite characters
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, {
    coverTrigger:false,
    constrainWidth:false
  });
});

// function for the side navigation mobile responsiveness
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems,);
});