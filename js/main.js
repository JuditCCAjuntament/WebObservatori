//Init materialize sidenav funcrion
$(document).ready(function () {
  $('.sidenav').sidenav();
  console.log("Init");
});
$( ".collapsibleIndicadors" ).hover(
  function() {
    $( ".collapsibleItems" ).css("display","flex");
    console.log("Hovered In Menu");
  }, function() {
    console.log("Hovered Out Menu");
  }
);
$( ".collapsibleItems" ).hover(
  function(){
    console.log("Hovered In Items");
  },
  function() {
    $( this ).css("display","none");
    console.log("Hovered out Items");
  }
);