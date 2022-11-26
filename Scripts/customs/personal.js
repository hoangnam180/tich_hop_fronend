let dataArr = [];
const getDataPersonal = async () => {
  const res = await fetch('http://localhost:3001/personals');
  const data = await res.json();
  dataArr = data?.data;
};
const renderTable = (data) => {
  const html =
    data?.length > 0 &&
    data?.map((item, index) => {
      return `
      <tr class="odd gradeX">
                      <th>${item?.First_Name} ${item?.Last_Name}</th>
                      <th>${item?.Address2}</th>
                      <th>${item?.Email}</th>
                      <th>${item?.Phone_Number}</th>
                      <th>${item?.Gender ? 'Nam' : 'Nữ' || ''}</th>
                      <th>${item?.Shareholder_Status}</th>
                      <th>
                        <a href="javascript:void(0)" class="btn btn-primary btn-sm">Edit</a>
                        <a href="javascript:void(0)" class="btn btn-danger btn-sm">Delete</a>
                      </th>
                    </tr>
  </tr>
    `;
    });
  return html?.join('');
};
const main = async () => {
  await getDataPersonal();
  document.getElementById('pesonals').innerHTML = renderTable(dataArr);
};

main();
