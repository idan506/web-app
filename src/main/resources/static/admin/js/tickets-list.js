$.ajax({
    url: '/api/books/ticket',
    type: 'GET',
    success: function (response) {
        var trHTML = '';
        $.each(response, function (i, item) {
            trHTML += '<tr><td>' + item.id + '</td><td>' + item.idUser + '</td><td>' 
                    + item.dayOfHire + '</td><td>'    + item.expirationDate + '</td><td>' + item.status +'</td></tr>';
        });
        $('#dataTable').append(trHTML);
    }
});