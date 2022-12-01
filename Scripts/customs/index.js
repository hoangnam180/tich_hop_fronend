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
  </tr>
    `;
    });
  return html?.join('');
};

const main = async () => {
  await getDataEmployee();
  document.getElementById('newUser').innerHTML = `${dataArr.length}`;
  document.getElementById('mergerPesonal').innerHTML = renderTable(dataArr);
};

main();
