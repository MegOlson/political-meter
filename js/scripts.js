$(document).ready(function(){
  $('form').submit(function(e){
    var answer1 = $("input:radio[name=q1]:checked").val();
    var answer2 = $("input:radio[name=q2]:checked").val();
    var answer3 = $("input:radio[name=q3]:checked").val();
    var answer4 = $("input:radio[name=q4]:checked").val();
    var answer5 = $("input:radio[name=q5]:checked").val();

    var q1 = $('.q1').val();
    e.preventDefault();
    if (!answer1, !answer2, !answer3, !answer4, !answer5) {
      alert("Please fill out each question");
    } else {
      if(answer1 === 'agree' && answer2 === 'agree' && answer3 === 'agree' && answer4 === 'agree' && answer5 === 'agree'){
        $(".very-liberal").show();
        $("form").hide();
      } else if (answer1 === 'agree' && answer2 === 'agree' && answer3 === 'agree' &&  answer4 === 'agree' || answer5 === 'agree'){
        $(".liberal").show();
        $("form").hide();
      } else if (answer1 === 'agree' && answer2 === 'agree' && answer3 === 'agree' ||  answer4 === 'agree' || answer5 === 'agree'){
        $(".liberal").show();
        $("form").hide();
      } else if (answer1 === 'agree' && answer2 === 'agree' && answer3 === 'agree' &&  answer4 === 'agree' || answer5 === 'agree'){
        $(".very-conservative").show();
        $("form").hide();
      } else {
        $(".very-conservative").show();
        $("form").hide();
      }
    };
  });
})
