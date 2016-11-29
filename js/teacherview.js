
$(document).ready(function () {

    var lecturerTableBody = $("#lecturerTableBody");

    $.ajax({
        type: 'GET',
        url: SDK.serverURL + "/course/" + SDK.Storage.load("userId"),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (course) {
            var decrypted = $.parseJSON(SDK.Decrypt(course))

            decrypted.forEach(function (decrypted){

                lecturerTableBody.append(
                    "<tr>" +
                    "<td>" + decrypted.code + "</td>" +
                    "<td> <class='btn-row'><button class='btn btn-default toComment' data-lecture=" + decrypted.displaytext + ">Klik for at gå til kommentarer</button></td>" +
              "</tr"
                );

            })
        },
        error: function (course) {
            alert('Failed!');
        }


    });

})

$('#lecturerTableBody').on('click','.toComment',function(e){
  var lectureCode = $(this).data("lecture");
  window.location.href = "underviserLectureView.html#" + lectureCode;
});
