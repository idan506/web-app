
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#blah').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

$("#imgInp").change(function () {
  readURL(this);
});

$('#btnCreate').click((event) => {
  event.preventDefault();
  let dataToPost = {
    name: document.getElementById("name").value,
    isbn: document.getElementById("isbn").value,
    publishYear: document.getElementById("publishing_year").value,
    author: document.getElementById("author").value,
    shortDescription: document.getElementById("shortDescrpition").value,
    quantity: document.getElementById("quantity").value,
    status: true,
    image: document.getElementById("blah").src,
    flag: true
  };
  $.ajax({
    url: '/api/books',
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(dataToPost),
    success: () => {
      alert("successful");
      window.location = '/admin/books-list.html';
    }
  });

})

