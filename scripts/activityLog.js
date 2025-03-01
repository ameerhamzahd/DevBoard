const clearHistoryBtn = document.getElementById('clear-history-btn');

clearHistoryBtn.addEventListener('click', (event) => {
    const activityLogChildContainer = document.getElementById('activity-log-child-container');
    
    activityLogChildContainer.innerHTML = '';
});