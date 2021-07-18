$(window).on('load', function() {
  $('#modal').modal('show');
});

function salvar(){
  let email = document.getElementById('email').value;
  localStorage.setItem('email',email);

}