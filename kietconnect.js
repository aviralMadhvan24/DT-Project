const USERNAME = "admin";
const PASSWORD = "1"; //password badalna ho tho badal lena

function promptForPassword(action) {
    const password = prompt("Please enter your password:");

    if (password === PASSWORD) {
        if (action === 'event') {
            addEvent();
        } else if (action === 'club') {
            addClub();
        }
    } else {
        alert("Incorrect password. Access denied.");
    }
}

function addEvent() {
    const eventList = document.getElementById('event-list');
    
    const eventTitle = prompt("Enter the event title:");
    const eventDate = prompt("Enter the event date:");
    const eventLocation = prompt("Enter the event location:");
    const eventDescription = prompt("Enter a brief description:");

    if (eventTitle && eventDate && eventLocation && eventDescription) {
        const newEvent = document.createElement('article');
        newEvent.classList.add('event');
        
        newEvent.innerHTML = `
            <h3>${eventTitle}</h3>
            <p>Date: ${eventDate}</p>
            <p>Location: ${eventLocation}</p>
            <p>Description: ${eventDescription}</p>
      <button  onclick="deleteEvent(this)">Delete Event</button>`;
     
        eventList.appendChild(newEvent);
    } else {
        alert("All fields must be filled out.");
    }
}

function deleteEvent(button) {
    const eventToDelete = button.parentElement;    
    if (confirm("Are you sure you want to delete this event?")) {
        eventToDelete.remove(); 
        alert("Event deleted successfully.");
    }
}

function addClub() {
    const clubList = document.getElementById('club-list');

    const clubName = prompt("Enter the club name:");
    const activityTitle = prompt("Enter the activity title for this club:");
    const activityDate = prompt("Enter the activity date:");
    const activityLocation = prompt("Enter the activity location:");
    const activityDescription = prompt("Enter a brief description:");

    if (clubName && activityTitle && activityDate && activityLocation && activityDescription) {
        const newActivity = document.createElement('article');
        newActivity.classList.add('activity');

        newActivity.innerHTML = `
            <h2>Club: ${clubName}</h2>
            <h3>${activityTitle}</h3>
            <p>Date: ${activityDate}</p>
            <p>Location: ${activityLocation}</p>
            <p>Description: ${activityDescription}</p>
            <button onclick="deleteActivity(this)">Delete Activity</button>`;

        clubList.appendChild(newActivity);
    } else {
        alert("All fields must be filled out.");
    }
}

function deleteActivity(button) {
    const activityToDelete = button.parentElement; 
    if (confirm("Are you sure you want to delete this activity?")) {
        activityToDelete.remove(); 
        alert("Activity deleted successfully.");
    }
}

