import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://61969f03af46280017e7e1f0.mockapi.io' }),
  tagTypes:['Contacts-list'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts-list`,
      providesTags: ['Contacts-list'],
    }),
    addContact: builder.mutation({
      query: (newContact) => ({
        url: `/contacts-list`,
        method: 'POST',
        body: {
          name: newContact.name,
          phone: newContact.phone,
        },
      }),
      invalidatesTags: ['Contacts-list'],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts-list/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts-list'],
    }),
    getFilteredContacts: builder.query({
      query: (name) => `/contacts-list?name=${name}`,
      invalidatesTags: ['Contacts-list'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetFilteredContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation } = phonebookApi;