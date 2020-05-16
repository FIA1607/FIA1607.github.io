let feebacks = [];
loadFeedbacks;

document.getElementsById('addfeed').onclick = function(){
    event.preventDefault();
    let feedName = document.getElementsById('feedname');
    let feedBody = document.getElementsById('feedbody');

    let feedback = {
         name: feedName.value,
         body: feedBody.value
     }
}

feedName.value = '';
feedBody.value = '';

feedbacks.push(feedback);
saveFeedbacks();
showFeedbacks();

function saveFeedbacks(){
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
}

function loadFeedbacks(){
    if(localStorage.getItem('feedbacks')) feedbacks = JSON.parse(localStorage.getItem('feedbacks'));
    showFeedbacks();
}

function showFeedbacks() {
    let feedbackField = document.getElementsByClassName('feedback_list');
    let out = '';
    feedbacks.forEach(function(item){
        out += '<dt class="feedback_name">$(item.name)</dt>';
        out += '<dd class="feedback_content">$(item.body)</dd>'
    });
    feedbackField.innerHTML = out;
}