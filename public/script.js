let sendChat = document.querySelector("#send");
let chatMessageInput = document.querySelector("#chat");
let chatList = document.querySelector(".chat-list");
let userNamediv = document.querySelector(".user-name");
let userLetterDiv = document.querySelector(".user-letter");
let username = prompt("Enter Your Name");
let activeUsersList = document.querySelector(".active-users-list");
console.log(username);
if (!username) username = "unknown";
userNamediv.innerHTML = username;
userLetterDiv.innerHTML = username[0].toUpperCase();
socket.emit("join" , username);
chatMessageInput.addEventListener("keyup" , function(e){
    if(e.keyCode == 13){
        sendChat.click();
    }
})
sendChat.addEventListener("click" , function(){
    let chat = chatMessageInput.value;
    if(chat){
        let chatDiv = document.createElement("div");
        chatDiv.classList.add("chat");
        chatDiv.classList.add("right");
        chatDiv.innerHTML = chat;
        chatList.append(chatDiv);
        chatMessageInput.value = "";
        chatList.scrollTop = chatList.scrollHeight;
        socket.emit("send-chat" , chat); 
    }
})