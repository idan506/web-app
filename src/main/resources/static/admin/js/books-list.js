
    $.ajax({
        url: '/api/books',
        type: 'GET',
        success: function (response) {
            var trHTML = '';
            $.each(response, function (i, item) {
                trHTML += '<tr><td>' + item.id + '</td><td>' + item.name + '</td><td>' 
                    + item.isbn + '</td><td>' + item.publishYear + '</td><td style="font-size: small;">'  + item.shortDescription + '</td><td>' 
                        + item.author + '</td><td>' + item.status +
                         '</td><td>' + '<a class="btn btn-dark" href="./editbook.html?id='+item.id+'" >Edit</a>'+'&nbsp;'+
                             '<button class="btn btn-danger" onclick="deleteBtn('+item.id+')" id="btnDelete" value="'+item.id+'">Delete</button>' + '</td></tr>';
            });
            $('#dataTable').append(trHTML);
        }
    });
    const deleteBtn = (id) => {
            let dataToPost = {
            id: id
        };
        console.log(dataToPost);
        $.ajax({
            url: '/api/books',
            type: 'DELETE',
            dataType: 'json',
            contentType : 'application/json',
            data: JSON.stringify(dataToPost),
            success: (response) => {
                window.location='/admin/books-list.html';
            }
        });
    }