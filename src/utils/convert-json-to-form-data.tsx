const convertJsonToFormData = (json: never): FormData => {
  const formData: FormData = new FormData();
  Object.keys(json).forEach(item => {
    if (json[item] !== '') {
      formData.append(item, json[item]);
    }
  });
  return formData;
};

export default convertJsonToFormData;
