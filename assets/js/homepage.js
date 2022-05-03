document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('textarea1')
  const box = document.querySelector('.modal');
  M.Modal.init(box,{
    dismissible:false,
    onOpenEnd: function(modal,trigger) {
      const charPage = document.getElementById('charPage')
      charPage.addEventListener('click', () => {
        localStorage.setItem("charSelected", form.value);
      });
      
    }
  });
});

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
     elems[0].setAttribute("style", "background:#E57373;")
    var instances = M.Dropdown.init(elems, {
      coverTrigger:false,
      constrainWidth:false
    });
  });