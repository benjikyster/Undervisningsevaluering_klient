$(document).ready(function () {
   var lectureCode = location.hash.replace('#', '');
   var lectureTableBody = $("#studerendeLectureTableBody")

   $.ajax({
       type: "GET",
       url: SDK.serverURL + "/lecture/" + lectureCode,
       dataType: "json",
       success: function(lectures){
         var decrypted = $.parseJSON(SDK.Decrypt(lectures))
         var table = $("#studerendeLectureTableBody");
        console.log(decrypted);

         decrypted.forEach(function (decrypted) {
           table.append(
               "<tr>" +
               "<td>" + decrypted.startDate + "</td>" +
              "<td class='btn-row'> <button class='btn btn-default toReview' data-id=" + decrypted.id+ ">Klik for at se kommentarer</button></td>" +
               "</tr>"
           );

         })

       },
       error: function(err) {
         console.log(err);
       }
   })

 })

$("#studerendeLectureTableBody").on('click','.toReview',function(e){
var id = $(this).data("id");
window.location.href = "studerendeReview.html#" + id;
 });
