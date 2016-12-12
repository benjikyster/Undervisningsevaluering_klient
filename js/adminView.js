
$(document).ready(function () {

    var administratorTableBody = $("#administratorTableBody");

    $.ajax({
        type: 'GET',
        url: SDK.serverURL + "/course/" + SDK.Storage.load("userId"),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (course) {
            var decrypted = $.parseJSON(SDK.Decrypt(course))

            decrypted.forEach(function (decrypted){

                administratorTableBody.append(
                    "<tr>" +
                    "<td>" + decrypted.code + "</td>" +
                    "<td class='btn-row'> <button class='btn btn-default toLecture' data-lecture=" + decrypted.displaytext + ">Klik for at se lektioner</button> </td>" +
              "</tr"
                );

            })
        },
        error: function (course) {
            alert('Failed!');
        }


    });

})

$('#administratorTableBody').on('click','.toLecture',function(e){
  var lectureCode = $(this).data("lecture");
  window.location.href = "adminLectureView.html#" + lectureCode;
});
