document.getElementById('submitComment').addEventListener('click', function() {
    const userName = document.getElementById('userName').value.trim();
    const commentText = document.getElementById('commentInput').value.trim();
    if (userName === "" || commentText === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }
    const comment = document.createElement('div');
    comment.classList.add('comment');
    const date = new Date().toLocaleString();
    comment.innerHTML = `
        <div class="user-info">
            <i class="fas fa-user-circle"></i>
            <div class="user-details">
                <p class="user-name">${userName}</p>
                <p class="date">${date}</p>
            </div>
        </div>
        <p>${commentText}</p>
        <div class="like-dislike">
            <button class="like">👍 <span class="like-count">0</span></button>
            <button class="dislike">👎 <span class="dislike-count">0</span></button>
        </div>
    `;
    document.getElementById('commentsSection').appendChild(comment);
    document.getElementById('userName').value = "";
    document.getElementById('commentInput').value = "";
});