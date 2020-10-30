/*  */
$(document).ready(function(){

    // Premières musiques crées 
    $('#b2').hide()
    $('#b3').hide() 
    $('#b4').hide() 

    $('#a1').click(function(){
        $('#b1').show(); $('#b2').hide(); $('#b3').hide(); $('#b4').hide();});

    $('#a2').click(function(){
        $('#b1').hide(); $('#b2').show(); $('#b3').hide(); $('#b4').hide();});

    $('#a3').click(function(){
        $('#b1').hide(); $('#b2').hide(); $('#b3').show(); $('#b4').hide(); });

    $('#a4').click(function(){
        $('#b1').hide(); $('#b2').hide(); $('#b3').hide(); $('#b4').show(); });   
});

