import { apiSlice } from "../apiSlice";


export const productApi = apiSlice.injectEndpoints({

    endpoints: (builder) => ({

        //get all products
        getAllProducts: builder.query<Product[], void>({
            query: () => ({
                url: "products"
            })
        })
    })
})

export const {
    useGetAllProductsQuery,
    useLazyGetAllProductsQuery
} = productApi;