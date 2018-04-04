export const closeModal = () => ({ type: 'CLOSE_MODAL' });

export const displayModal = message => ({
  type: 'OPEN_MODAL',
  message,
});
