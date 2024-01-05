$("#contact").click(function(){
    if($("#contactme").hasClass("dnone")){
        $("#contactme").toggleClass("dnone")
        $(".profile-img").addClass("dnone")
        $("#home-div").addClass("dnone")
        $("#myprojects").addClass("dnone")
        $("#myarticles").addClass("dnone")
    }
    else{
        $("#contactme").toggleClass("dnone")
        $(".profile-img").removeClass("dnone")
        $("#home-div").removeClass("dnone")
    }
})

$("#projects").click(function(){
    if($("#myprojects").hasClass("dnone")){
        $("#myprojects").toggleClass("dnone")
        $("#home-div").addClass("dnone")
        $("#contactme").addClass("dnone")
        $(".profile-img").addClass("dnone")
        $("#myarticles").addClass("dnone")
    }
    else{
        $("#myprojects").toggleClass("dnone")
        $("#home-div").removeClass("dnone")
        $(".profile-img").removeClass("dnone")
    }
    
})

$("#articles").click(function(){
    if($("#myarticles").hasClass("dnone")){
        $("#myarticles").toggleClass("dnone")
        $("#home-div").addClass("dnone")
        $("#contactme").addClass("dnone")
        $(".profile-img").addClass("dnone")
        $("#myprojects").addClass("dnone")
    }
    else{
        $("#myarticles").toggleClass("dnone")
        $("#home-div").removeClass("dnone")
        $(".profile-img").removeClass("dnone")
    
}})




$(".nav-link").click(function(){
    $("#navbarNav").removeClass("show")
    $("#navbarNav").removeClass("custom-bg-color")
})


$(".navbar-toggler").click(function(){
    if($("#navbarNav").hasClass("custom-bg-color")){
        $("#navbarNav").removeClass("custom-bg-color")
    }
    else{
        $("#navbarNav").addClass("custom-bg-color")
    }
})


$("#home").click(function(){
    $("#contactme").addClass("dnone")
    $("#myprojects").addClass("dnone")
    $("#myarticles").addClass("dnone")
    $("#home-div").removeClass("dnone")
    $(".profile-img").removeClass("dnone")
    
})

