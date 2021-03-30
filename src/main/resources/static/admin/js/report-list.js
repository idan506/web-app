$.ajax({
    url: '/api/report',
    type: 'GET',
    success: function (response) {
        var trHTML = '';
        $.each(response, function (i, item) {
            trHTML += '<tr><td>' + item.id + '</td><td>' + item.dateExport + '</td><td>' + item.fileName +
                '</td><td>' + '<button class="btn btn-danger" onclick="downloadBtn(' + item.id + ')" id="downloadBtn" value="' + item.id + '">DOWNLOAD</button>' + '</td></tr>';
        });
        $('#dataTable').append(trHTML);
    }
});
const downloadBtn = (id) => {
    let dataToDown = {
        id: id
    };
    $.ajax({
        url: '/api/report',
        type: 'GET',
        contentType: 'application/octet-stream',
        success: () => {
            const url = "http://localhost:8084/api/report/"+id;
            window.open(url,"_blank");
        }
    });
};
