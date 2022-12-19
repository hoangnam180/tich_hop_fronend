const formTableUpdate = document.querySelector('#formTableUpdate');
formTableUpdate.addEventListener('submit', (e) => {
  const idEmployee = JSON.parse(localStorage.getItem('data'))?.Employee_ID;
  e.preventDefault();
  const formData = new FormData(formTableUpdate);
  const data = Object.fromEntries(formData);
  console.log(data);
  fetch('http://localhost:3001/total-earning/' + idEmployee, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.code === 1) {
        alert('Update thành công');
        window.location.href = '/Views/Admin/Index.html';
      }
    });
});
