export interface IOutsourcing {
    id: number,
    created_at: string,
    updated_at: string,
    title: string,
    description: string
}

export interface IOutsourcingListResponse {
    count: number,
    next: null | string,
    previous: null | string,
    results: IOutsourcing[] | []
}