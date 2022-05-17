const btn = document.getElementById('list');
const update = document.getElementById('update');
const del = document.getElementById('delete');

btn.addEventListener("click", () => {
    location.href = '/blog';
})

del.addEventListener('click', () => {
    fetch(`http://localhost:3000/blog/delete/${del.dataset.doc}`,{
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>window.location.href=data.redirect)
    .catch(err=>console.log(err));
});

update.addEventListener('click', () => {
    location.href = `/blog/updateread/${update.dataset.doc}`;
})