$(function (){


    $('#dropdownReason li a ').on('click',function(){

          var val = $(this).text();

       $('#pickButton').text(val);

    })









});