"use strict";
$(function() {
  
  let selectedTable = undefined;

function showModul() {

$(".available").on("click", function(e) {
  $(".modul").css("display", "flex");
  selectedTable = $(e.target);
  $(".tableNum").text(selectedTable.get(0).id);
  });
} 
function hideModul() {
  $(".fa-times").on("click", function(e) {
    $(".modul").css("display", "none");
  });
}
function reserveTable() { 
  $(".save").on("click", function(){
      $(selectedTable).addClass("reserved");
      $(selectedTable).removeClass("available");
      $(".modul").css("display", "none");
    });
  }
showModul();
hideModul();
reserveTable();
});
