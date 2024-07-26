export interface IBenefits {
    id: number,
    created_at: string,
    updated_at: string,
    icon: string,
    title: string,
    description: string
}

export interface IBenefitsResponse {
    count: number,
    next: null | string,
    previous: null | string,
    results: IBenefits[] | []
}