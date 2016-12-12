$(document).ready(function () {

      var studerendeTableBody = $("#studerendeTableBody");

      $.ajax({
          type: 'GET',
          url: SDK.serverURL + "/course/" + SDK.Storage.load("userId"),
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function (course) {
              var decrypted = $.parseJSON(SDK.Decrypt(course))

              decrypted.forEach(function (decrypted){

                studerendeTableBody.append(
                  "<tr>" +
                  "<td>" + decrypted.code + "</td>" +
                  "<td class='btn-row'> <button class='btn btn-default toLecture' data-lecture=" + decrypted.displaytext + ">Klik for at gå til lektioner</button> </td>" +
                  "</tr"

                );

              });
          },
          error: function (course) {
              alert('Failed!');
          }

      })

  });
  $('#studerendeTableBody').on('click','.toLecture',function(e){
    var lectureCode = $(this).data("lecture");
    window.location.href = "studerendeLectureView.html#" + lectureCode;
  });
