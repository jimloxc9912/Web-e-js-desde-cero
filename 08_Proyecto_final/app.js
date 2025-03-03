document.getElementById('submitComment').addEventListener('click', function() {
    const commentText = document.getElementById('commentInput').value.trim();
    if (commentText === "") {
        alert("Por favor, escribe un comentario.");
        return;
    }

    const date = new Date().toLocaleString();
    const comment = {
        text: commentText,
        date: date
    };

    // Guardar en localStorage
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));

    // Mostrar el comentario en la página
    displayComment(comment);

    // Limpiar el campo de texto
    document.getElementById('commentInput').value = "";
});

function displayComment(comment) {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `
        <p>${comment.text}</p>
        <p class="date">${comment.date}</p>
        <button class="delete-button"><i class="fas fa-trash"></i> Eliminar</button>
    `;
    document.getElementById('commentsSection').appendChild(commentDiv);

    // Agregar funcionalidad de eliminar comentario
    const deleteButton = commentDiv.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
        commentDiv.remove();
        removeCommentFromStorage(comment);
    });
}

// Eliminar comentario del localStorage
function removeCommentFromStorage(comment) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments = comments.filter(c => c.text !== comment.text || c.date !== comment.date);
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Cargar comentarios guardados al cargar la página
window.addEventListener('load', function() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(comment => displayComment(comment));
});