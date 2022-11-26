let dataArr = [];
const getDataBenefits = async () => {
  const res = await fetch('http://localhost:3001/benefits');
  const data = await res.json();
  dataArr = data?.data;
};
const renderTable = (data) => {
  const html =
    data?.length > 0 &&
    data?.map((item, index) => {
      return `
      <tr class="odd gradeX">
      <td>${item?.Plan_Name}</td>
      <td>${item?.Deductable}</td>
      <td>${item?.Percentage_CoPay}</td>
      <td>
        <a href="javascript:;" class="btn btn-sm btn-info" title="Edit"><i class="fa fa-pencil"></i> Edit</a>
        <a href="javascript:;" class="btn btn-sm btn-danger" title="Delete"><i class="fa fa-trash-o"></i> Delete</a>
      </td>
    </tr>
    `;
    });
  return html?.join('');
};
const main = async () => {
  await getDataBenefits();
  document.getElementById('benefits').innerHTML = renderTable(dataArr);
};

main();
