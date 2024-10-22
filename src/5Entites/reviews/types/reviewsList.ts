export interface IReviews {
    id: number,
    body: string,
    author: string
    created_at: string,
    updated_at: string

}

export interface IReviewsListResponse {
    count: number,
    next: null | string,
    previous: null | string,
    results: IReviews[] | []
}