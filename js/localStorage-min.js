$(document).ready(function(){for(var e=0;e<localStorage.length;e++)$(".select_reserved").append("<option>"+localStorage.getItem(localStorage.key(e))+"</option>");$(".reservation_btn").click(function(){if($("#reservation-form").valid()){var e=(new Date).getTime(),t=$("#table_number option:selected").text(),o=$(".select-time option:selected").text(),a=$("#date").val();localStorage.setItem("keyDate"+e,"№"+t+", "+o+" "+a);var l=localStorage.getItem("keyDate"+e);$(".select_reserved").append("<option>"+l+"</option>"),alert("Столик забронирован!");for(var r=0;r<localStorage.length;r++)for(var c=r+1;c<localStorage.length;c++)localStorage.getItem(localStorage.key(r))==localStorage.getItem(localStorage.key(c))&&(localStorage.removeItem(localStorage.key(c)),$(".select_reserved option:last").remove(),alert("Столик №"+ +$("#table_number option:selected").text()+" на "+$("#reservation_time option:selected").text()+" уже был забронирован"))}})});