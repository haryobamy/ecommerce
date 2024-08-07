type Product = {
    product_id: number;
    name: string;
    description: string;
    price: number;
    unit: string;
    image: string;
    discount: number;
    availability: boolean;
    brand: string;
    category: string;
    rating: number;
    reviews: {
        user_id: number;
        rating: number;
        comment: string;
    }[];
};

type TApiTag = any;

type ProductState = {};

type TQueryActionCreatorResult = QueryActionCreatorResult<
    QueryDefinition<
        unknown,
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
        TApiTag,
        unknown,
        "api"
    >
>;
