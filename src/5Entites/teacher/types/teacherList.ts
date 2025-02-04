export interface ITeacherList {
    id: number,
    first_name: string,
    last_name: string,
    role: string,
    rating: number,
    avatar: string
}

export interface ITeacherListResponse {
    count: number,
    next: string | null,
    previous: string | null
    results: ITeacherList[];
}
