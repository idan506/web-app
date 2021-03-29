$.ajax({
    url: '/api/report',
    type: 'GET',
    success: function (response) {
        var trHTML = '';
        $.each(response, function (i, item) {
            trHTML += '<tr><td>' + item.id + '</td><td>' + item.dateExport + '</td><td>' + item.fileName +
                '</td><td>' + '<button class="btn btn-danger" onclick="downloadBtn(' + item.id + ')" id="btnDownload" value="' + item.id + '">DOWNLOAD</button>' + '</td></tr>';
        });
        $('#dataTable').append(trHTML);
    }
});

    