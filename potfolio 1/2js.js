
    // Select the button and follower count
    var followBtn = document.getElementById('follow-btn');
    var followerCountElement = document.getElementById('follower-count');

    // Initialize follower count
    var followerCount = parseInt(followerCountElement.textContent);
    var isFollowing = false; // Start as not following

    // Add click event listener
    followBtn.addEventListener('click', function() {
        if (isFollowing) {
            followerCount--; // Decrease count
            followBtn.textContent = 'Follow'; // Change button text
        } else {
            followerCount++; // Increase count
            followBtn.textContent = 'Following'; // Change button text
        }

        // Update the displayed follower count
        followerCountElement.textContent = followerCount;
        isFollowing = !isFollowing; // Toggle follow status
    })
