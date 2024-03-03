var voteCounts = {
    option1: 0,
    option2: 0,
    option3: 0
};

var hasVoted = false;

function submitVote() {
    if (hasVoted) {
        alert("You have already voted. Each person can only vote once.");
        return;
    }

    var selectedOption = document.querySelector('input[name="vote"]:checked');
    if (selectedOption) {
        voteCounts[selectedOption.value]++;
        alert("Vote submitted for " + selectedOption.value);
        hasVoted = true; // Set the flag to true once voted
    } else {
        alert("Please select an option before submitting your vote.");
    }
}

function showVotes() {
    var countDisplay = document.getElementById('voteCount');
    countDisplay.innerHTML = "Vote Counts: <br>" +
        "Option 1: " + voteCounts.option1 + "<br>" +
        "Option 2: " + voteCounts.option2 + "<br>" +
        "Option 3: " + voteCounts.option3;
}
