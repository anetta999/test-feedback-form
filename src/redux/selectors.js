export const selectFormData = state => {
  return state.form.formData;
};

export const selectLoading = state => {
  return state.form.isLoading;
};

export const selectError = state => {
  return state.form.error;
};