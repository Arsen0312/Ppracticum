export interface ICourses {
    id: number,
    title: string,
    rating: number
}

export interface ICoursesListResponse {
    count: number,
    next: null | string,
    previous: null | string,
    results: ICourses[] | []
}