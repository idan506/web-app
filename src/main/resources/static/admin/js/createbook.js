
        $('#btnCreate').click(() => {
            let dataToPost = {
                name: document.getElementById("name").value,
                isbn: document.getElementById("isbn").value,
                publishing_year: document.getElementById("publishing_year").value,
                author: document.getElementById("author").value,
                shortDescription: document.getElementById("shortDescrpition").value,
                status:true,
                flag: true
            };
            console.log(dataToPost);
            $.ajax({
                url: '/api/books',
                type: 'POST',
                dataType: 'json',
                contentType : 'application/json',
                data: JSON.stringify(dataToPost),
                success: (response) => {
                    window.location='/admin/books-list.html';
                }
            });

        })
