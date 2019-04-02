$(document).ready(function() {
  $("#theForm").submit(function(event) {

    var userInput = $("#sentence").val();
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    userInput = userInput.split("");

    for(var i = 0; i < userInput.length; i++) {
      if(vowels.includes(userInput[i])) {
        userInput[i] = "-";
      }
    }
    userInput = userInput.join("");
    $(".output").append("<b>" + userInput + "</b>");
    event.preventDefault();
  });
});
