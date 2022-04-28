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

fetching();



