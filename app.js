document.getElementById("chatbox-form").addEventListener("submit", function(event){
    event.preventDefault();
  
    var userInput = document.getElementById("user-input").value;
    
    if(userInput.trim() !== '') {
      var messageContainer = document.getElementById("chatbox-content");
      var newMessage = document.createElement("div");
      newMessage.textContent = userInput;
      newMessage.classList.add("user-message");
  
      messageContainer.appendChild(newMessage);
  
      // create automatic response
      var autoResponse = document.createElement("div");
      autoResponse.textContent = "Test";
      autoResponse.classList.add("bot-message");
  
      messageContainer.appendChild(autoResponse);
  
      document.getElementById("user-input").value = '';
    }
  });

  document.getElementById("theme-toggle").addEventListener("click", function(){
    var body = document.body;
    body.classList.toggle("dark-theme");
  });
  