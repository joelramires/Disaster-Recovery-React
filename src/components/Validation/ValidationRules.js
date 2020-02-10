export default function validate(data) {
    let errors = {};
    if (!data.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!data.password) {
      errors.password = 'Password is required';
    } else if (data.password.length < 5) {
      errors.password = 'Password must be 5 or more characters';
    }
    if (!data.firstName) {
        errors.firstName = 'Firstname is required';
      }
    if (!data.lastName) {
        errors.lastName = 'Lastname is required';
      }
    if (!data.role) {
        errors.role = 'Please select role';
      }
      if (!data.jobCode) {
        errors.jobCode = 'Jobcode is required';
      }
      if (!data.jobDescription) {
        errors.jobDescription = 'Job description is required';
      }
      if (!data.rateHourly) {
        errors.rateHourly = 'Hourly rate is required';
      }
      if (!data.maxHours) {
        errors.maxHours = 'Max hour is required';
      }
      if (!data.machineCode) {
        errors.machineCode = 'Machinecode is required';
      }
      if (!data.description) {
        errors.description = 'Description is required';
      }
      if (!data.rate) {
        errors.rate = 'Rate is required';
      }
      if (!data.siteCode) {
        errors.siteCode = 'Sitecode is required';
      }
    return errors;
  };