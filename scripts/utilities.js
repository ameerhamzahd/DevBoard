function completeTask(btnId, event, taskTitleId, parentContainerId) {
    event.preventDefault();
    alert('Board Updated Successfully.');

    let remainingTask = parseInt(document.getElementById('remaining-task').innerText);
    let completedTask = parseInt(document.getElementById('completed-task').innerText);

    remainingTask = remainingTask - 1;
    completedTask = completedTask + 1;

    document.getElementById('remaining-task').innerText = '0'+ remainingTask;
    document.getElementById('completed-task').innerText = completedTask;

    const taskTitle = document.getElementById(taskTitleId).innerText;

    const activityLogChildContainer = document.getElementById(parentContainerId);
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="p-3">
            <p class="bg-[#F4F7FF] p-3 rounded-xl shadow-md">You have Complete The Task <span class="font-bold">${taskTitle}</span> at <span class="font-bold">${getCurrentTime()}</span>
            </p>
        </div>`

    activityLogChildContainer.appendChild(div);

    const btn = document.getElementById(btnId);
    btn.disabled = true;

    if(remainingTask === 0) {
        alert('Congrats!!! You have completed all the remaining tasks.');
    }
}

function getCurrentTime() {
    let now = new Date();
    let hrs = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let amPM;

    if (hrs >= 12) {
        amPM = 'PM';
    } else {
        amPM = 'AM';
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    } else if (hrs === 0) {
        hrs = 12;
    }

    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    return hrs + ":" + min + ":" + sec + " " + amPM;
}