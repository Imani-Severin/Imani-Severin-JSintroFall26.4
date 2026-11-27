const footer = document.createElement('footer');
document.body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement('p');
copyright.innerHTML = ` &copy; ${thisYear} Imani Severin-Jarosz`;
footer.appendChild(copyright);

footer.style.textAlign = 'center';
copyright.style.fontSize = '15px';

const skills = ["Javascript", "CSS", "HTML","Github", "VS Code","FMOD", "Reaper", "Davinci Resolve 19"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');

    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit' , (event) => {

    event.preventDefault();

    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;

    console.log(userName, userEmail, userMessage);
    
    const messageSection = document.querySelector('#message');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = (`<a href="mailto:${userEmail}">${userName}</a> <span>${userMessage}</span>`)
    
    messageForm.reset(); 

})

const removeButton = document.createElement('button');
removeButton.innerText = 'remove'
removeButton.setAttribute('type' , 'button')

removeButton.addEventListener('click' , () => {
    const entry = removeButton.parentNode;
    entry.remove();
})
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);