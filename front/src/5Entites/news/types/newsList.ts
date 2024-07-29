export interface INewsList {
    id: number,
    created_at: string,
    updated_at: string,
    title: string,
    body: string,
    image: string
    rating: number
}

export interface INewsListResponse {
    count: number,
    next: string | null,
    previous: string | null
    results: INewsList[];
}
