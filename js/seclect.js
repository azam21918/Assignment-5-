const card = document.querySelectorAll(".card");
let totalCounter = document.getElementById("total-counter");
let taskCounter = document.getElementById("task-counter");
let activityLogMessage = document.getElementById("activity-log-message");
totalCounter.innerText = parseInt(totalCounter.innerText);
taskCounter.innerText = card.length;
let i = 0;
while (i < card.length) {
    let btnComplete = document.getElementsByClassName("btn-complete")[i];
    btnComplete.addEventListener("click", function (event) {
        alert("Board updated successfully");
        event.target.disabled = true;
        let p = document.createElement("p");
        p.classList.add("bg-primary", "p-2", "mt-3");
        p.innerText = `You have completed the task at ${logTime()}`;
        activityLogMessage.appendChild(p);
        taskCounter.innerText = Math.max(0, parseInt(taskCounter.innerText) - 1);
        totalCounter.innerText = parseInt(totalCounter.innerText) + 1;
        if (taskCounter.innerText === "0") {
            alert("Congratulations!!! You have completed all the current tasks");
        }
    });
    i++;
}