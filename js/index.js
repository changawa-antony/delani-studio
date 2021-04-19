
//design hide and show content

$(document).ready(function() {
    $("#design").click(function() {
      $("#design-hidden").css("display", "block");
      $("#design").css("display", "none")
      
    });

  });

  $(document).ready(function() {
    $("#design-hidden").click(function() {
      $("#design-hidden").css("display", "none");
      $("#design").css("display", "block")
      
    });

  });

  //development hide and show content

  $(document).ready(function() {
    $("#development").click(function() {
      $("#development-hidden").css("display", "block");
      $("#development").css("display", "none")
      
    });

  });

  $(document).ready(function() {
    $("#development-hidden").click(function() {
      $("#development-hidden").css("display", "none");
      $("#development").css("display", "block")
      
    });

  });

  //product managemrnt hide and show content

  $(document).ready(function() {
    $("#product-management").click(function() {
      $("#product-hidden").css("display", "block");
      $("#product-management").css("display", "none")
      
    });

  });

  $(document).ready(function() {
    $("#product-hidden").click(function() {
      $("#product-hidden").css("display", "none");
      $("#product-management").css("display", "block")
      
    });

  });


  //Projects hover effects
  $(document).ready(function(){
      $(".project-name").hover(function(){
          $(".project-name").css("display", "block");
      },
      function(){
        $(".project-name").css("display", "none");
      });
  });