import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
    reducerPath: 'Users',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    endpoints: (builder) => ({
      getUsers: builder.query({
        query: () => `Users`,
        providesTags:['Users']
      }),
      user: builder.query({
        query: (id)=>`Users/${id}`,
        providesTags:['Users']
      }),
      addUsers: builder.mutation({
        query: (Users) => ({
            headers:{
              "Content-type": "application/json"
            },
            url: `/Users`,
            method: "POST",
            body:{
                name: Users.name,
                email: Users.email
            }
        }),
        invalidatesTags:['Users']
      }),
      deleteUser: builder.mutation({
        query: (id) => ({
            url: `Users/${id}`,
            method: "DELETE",
        }),
        invalidatesTags:['Users']
      }),
      updateUser: builder.mutation({
        query: ({...rest}) => ({
            url: `Users/${rest.id}`,
            method: "PATCH",
            body:{
              name: rest.name, // Assuming you have a "name" field
      email: rest.email, // Assuming you have an "email" field
      // Add other fields you want to update
          }
        }),
        invalidatesTags:['Users']
      }),
    }),
  })

  export const {useGetUsersQuery, useAddUsersMutation, useDeleteUserMutation, useUpdateUserMutation, useUserQuery} = adminApi