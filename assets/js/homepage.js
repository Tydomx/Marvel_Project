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

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, {
    coverTrigger:false,
    constrainWidth:false
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems,);
});