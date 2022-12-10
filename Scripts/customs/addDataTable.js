const formTable = document.querySelector('#formTable');
formTable.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formTable);
  const data = Object.fromEntries(formData);
  fetch('http://localhost:3001/total-earning', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.code === 1) {
        alert('Thêm thành công');
      }
    });
});
