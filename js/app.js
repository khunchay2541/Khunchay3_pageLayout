function alertBox(){
    alert("helloworld")
}
$('#slider').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    autoplay:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
    }
})

$(document).ready(function () {
  $(".item").click(function () {
      let youtube_id = $(this).children(".youtube_icon").attr("data-id");
      $(this).children(".youtube_icon")
          .addClass("active").parent()
          .siblings()
          .children(".youtube_icon")
          .removeClass("active")

      let newUrl = `${youtube_id}`;
      $("#video_id").attr("src", newUrl);

  })
  //due to slow connection video is playing slow
  // you can call your playlist using youtube api
})


$(document).ready(function() {
  var dataTable = $('#example').DataTable({
    pageLength: 0,
    lengthMenu: [5, 10, 20, 50,],
       "dom":'ct<"top"p><"clear">',
         //"bPaginate": false,
       //"bLengthChange": true,
       //"filter": false,
      // "bInfo": false,
      // "bAutoWidth": false
  });
  $("#filterbox").keyup(function(){
    dataTable.search(this.value).draw();
});
} );
