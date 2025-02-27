let contentPagesLis = document.querySelectorAll(`.page .sidebar ul li`);
let contentPages = document.querySelectorAll(`.page .dashbord-content`);

console.log(contentPagesLis);
contentPagesLis.forEach((li) => {
  li.onclick = () => {
    contentPages.forEach((page) => {
      page.classList.remove('active');
      if (page.classList.contains(li.dataset.sec)) {
        page.classList.add('active');
        contentPagesLis.forEach((li) => li.removeAttribute('class'));
        li.setAttribute('class', 'active');
      }
    });
  };
});
