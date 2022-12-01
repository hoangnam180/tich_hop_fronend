const formTable = document.querySelector('#formTable');
formTable.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formTable);
  const data = Object.fromEntries(formData);
  console.log(data);
});
