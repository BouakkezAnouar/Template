$(function(){

   var sentDialog = $('#sentDialog');
    var contact = $('#form-modal');

    contact.on('submit',function(){
       sentDialog.modal('show');
       return false ;
    });

    sentDialog.on("hidden.bs.modal",function(){
       alert('close');
    });





});