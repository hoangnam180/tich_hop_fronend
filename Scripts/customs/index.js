let dataArr = [];
const getDataEmployee = async () => {
  const res = await fetch('http://localhost:3001/total-earning');
  const data = await res.json();
  dataArr = data?.data;
};
const renderTable = (data) => {
  const html =
    data?.length > 0 &&
    data?.map((item, index) => {
      console.log(item?.Employee_ID);
      return `
      <tr class="odd gradeX">
      <td>${index + 1 || ''}</td>
      <td>${item?.First_Name || ''} ${item?.Last_Name || ''}</td>
      <td>${item?.Department || ''}</td>
      <td>${item?.Gender ? 'Nam' : 'Nữ' || ''}</td>
      <td>${item?.Ethnicity || ''}</td>
      <td>${item?.Deductable || ''}</td>
      <td>${item?.Employment_Status || ''}</td>
      <td>${item?.Vacation_Days || ''}</td>
      <td>${item?.Paid_To_Date || ''}</td>
      <td>${item?.Paid_Last_Year || ''}</td>
      <td>
        <a  
         onclick="editEmployee(${item?.Employee_ID})"
        class="btn btn-primary btn-sm">Edit</a>
        <a
        onclick="deleteEmployee(${item?.Employee_ID})"
        class="btn btn-danger btn-sm">Delete</a>
      </td>
  </tr>
    `;
    });
  return html?.join('');
};
const deleteEmployee = async (id) => {
  const res = await fetch(`http://localhost:3001/total-earning/${id}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  alert('Delete success');
  window.location.reload();
};

const main = async () => {
  await getDataEmployee();
  document.getElementById('newUser').innerHTML = `${dataArr.length}`;
  document.getElementById('mergerPesonal').innerHTML = renderTable(dataArr);
};

main();
