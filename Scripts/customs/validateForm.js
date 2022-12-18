var validator = new FormValidator(
  'formTable',
  [
    {
      name: 'Employee_Number',
      display: 'Please Type Employee_Number',
      rules: 'required',
    },
    {
      name: 'Employee_ID',
      display: 'Please Type Employee_ID',
      rules: 'required',
    },
    {
      name: 'First_Name',
      display: 'Please Type First_Name',
      rules: 'required',
    },
    {
      name: 'Last_Name',
      display: 'Please Type Last_Name',
      rules: 'required',
    },
    {
      name: 'Department',
      display: 'Please Type Department',
      rules: 'required',
    },
    {
      name: 'Gender',
      display: 'Please Type Gender',
      rules: 'required',
    },
    {
      name: 'Ethnicity',
      display: 'Please Type Ethnicity',
      rules: 'required',
    },
    {
      name: 'Deductable',
      display: 'Please Type Deductable',
      rules: 'required',
    },
    {
      name: 'Employment_Status',
      display: 'Please Type Employment_Status',
      rules: 'required',
    },
    {
      name: 'Pay_Rate',
      display: 'Please Type Pay_Rate',
      rules: 'required',
    },
    {
      name: 'PayRates_id',
      display: 'Please Type PayRates_id',
      rules: 'required',
    },
    {
      name: 'Vacation_Days',
      display: 'Please Type Vacation_Days',
      rules: 'required',
    },
    {
      name: 'Paid_To_Date',
      display: 'Please Type Paid_To_Date',
      rules: 'required',
    },
    {
      name: 'Paid_Last_Year',
      display: 'Please Type Paid_Last_Year',
      rules: 'required',
    },
  ],
  function (errors, event) {
    if (errors.length > 0) {
      let errorString = '';

      for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
        errorString += errors[i].message + '<br />';
      }
      document.getElementById('err').innerHTML = errorString;
    }
  }
);
