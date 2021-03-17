$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}
$.ajax({
    url: '/api/books/' + $.urlParam('id'),
    type: 'GET',
    success: function (response) {
        document.getElementById("name").value = response.name;
        document.getElementById("id").value = response.id;
        document.getElementById("isbn").value = response.isbn;
        //document.getElementById("publishingYear").value = response.publishing_year;
    }
});
$('#submitBtn').click(() => {
    let dataToPost = {
        name: document.getElementById("name").value,
        id: document.getElementById("id").value,
        isbn: document.getElementById("isbn").value,
        flag: true
        //publishing_year: document.getElementById("publishingYear").value
    };
    $.ajax({
        url: '/api/books',
        type: 'PUT',
        dataType: 'json',
        contentType : 'application/json',
        data: JSON.stringify(dataToPost),
        success: (response) => {
            window.location='/admin/tables.html';
        }
    });
})