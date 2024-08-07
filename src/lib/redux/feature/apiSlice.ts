

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiTagTypes: TApiTag[] = ['Todo', 'Todos', 'Users', 'User'];

const appBaseUrl = 'https://fake-store-api.mock.beeceptor.com/api/';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: appBaseUrl,
    }),
    tagTypes: apiTagTypes,

    endpoints: (builder) => ({}),
});