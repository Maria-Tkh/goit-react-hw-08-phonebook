import { createAction } from '@reduxjs/toolkit';

// const createContact = createAction('createContact', (name, number) => ({
//   payload: {
//     name,
//     number,
//   },
// }));

// const deleteContact = createAction('deleteContact');

export const changeFilter = createAction('changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
//  { createContact, deleteContact, changeFilter };
