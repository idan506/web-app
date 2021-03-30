$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}
$.ajax({
    url: '/api/books/' + $.urlParam('id'),
    type: 'GET',
    success: function (response) {
        document.getElementById("name").value = response.name;
        document.getElementById("author").value = response.author;
        document.getElementById("isbn").value = response.isbn;
        document.getElementById("publishing_year").value = response.publishYear;
        document.getElementById("shortDescrpition").value = response.shortDescription;
        document.getElementById("quantity").value = response.quantity;
    }
});

$('#submitBtn').click(() => {
    let dataToPost = {
        name: document.getElementById("name").value,
        id: $.urlParam('id'),
        isbn: document.getElementById("isbn").value,
        flag: true,
        status: true,
        author: document.getElementById("author").value,
        shortDescription: document.getElementById("shortDescrpition").value,
        image: document.getElementById("blah").src,
        publishYear: document.getElementById("publishing_year").value,
        quantity: document.getElementById("quantity").value
    };
    $.ajax({
        url: '/api/books',
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(dataToPost),
        success: () => {
            alert("successful")
            window.location = '/admin/books-list.html';
        }
    });
})

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