let dataArr = [];
const getDataBenefits = async () => {
  const res = await fetch('http://localhost:3001/job-history');
  const data = await res.json();
  dataArr = data?.data;
};

const renderTable = (data) => {
  const html =
    data?.length > 0 &&
    data?.map((item, index) => {
      return `
      <tr class="odd gradeX">
        <td>${item?.Department || ''}</td>
        <td>${item?.Start_Date || ''} Date</td>
        <td>${item?.End_Date || ''} Date</td>
        <td>${item?.Job_Title || ''} Title</td>
        <td>${item?.Location || ''}</td>
        <td>${item?.Hours_per_Week || ''} Per Week</td>
        <td>
            <a href="#" class="btn btn-primary btn-sm">Edit</a>
            <a href="#" class="btn btn-danger btn-sm">Delete</a>
        </td>
    </tr>
    `;
    });
  return html?.join('');
};
const main = async () => {
  await getDataBenefits();
  document.getElementById('jobHistory').innerHTML = renderTable(dataArr);
};

main();
