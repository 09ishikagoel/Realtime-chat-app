socket.on("add-chat" , function(chatObject){
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("left");
    chatDiv.innerHTML = `${chatObject.name} : ${chatObject.chatMessage}`;
    chatList.append(chatDiv);
    chatList.scrollTop = chatList.scrollHeight;
})
socket.on("join-chat" , function(name){
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("join");
    chatDiv.innerHTML = `${name} joined chat!`;
    chatList.append(chatDiv);
    chatList.scrollTop = chatList.scrollHeight;
    let newUserDiv = document.createElement("div");
    newUserDiv.classList.add("active-user");
    newUserDiv.innerHTML = name;
    activeUsersList.append(newUserDiv);
})
socket.on("left-chat" , function(name){
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("leave");
    chatDiv.innerHTML = `${name} left chat!`;
    chatList.append(chatDiv);
    chatList.scrollTop = chatList.scrollHeight;
    for (let i = 0; i < activeUsersList.childNodes.length; i++)
    {
        if (activeUsersList.childNodes[i].innerHTML == name)
        {
            activeUsersList.childNodes[i].remove();
            break;
        }
    }
})
socket.on("update-active-users", function (usersDB) {
    for (let i = 0; i < usersDB.length; i++)
    {
        if (usersDB[i].id != socket.id)
        {
            let newUserDiv = document.createElement("div");
            newUserDiv.classList.add("active-user");
            newUserDiv.innerHTML = usersDB[i].username;
            activeUsersList.append(newUserDiv);
            
        }
    }
})