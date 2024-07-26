export interface ISkills {
    id: number,
    created_at: string,
    updated_at: string,
    title: string,
    description: string
}

export interface IAdvantages {
    id: number,
    created_at: string,
    updated_at: string,
    title: string,
    description: string,
    icon: string

}

export interface ITeacher{
    avatar:string,
    first_name:string,
    id:number;
    last_name:string, 
    description:string,
    role:string,
}

export interface ICoursesByIdResponse {
    id: number,
    skills: ISkills[] | [],
    advantages: IAdvantages[] | [],
    teachers:ITeacher[] | [],
    created_at: string,
    updated_at: string,
    title: string,
    description: string,
    purpose: string,
    duration: string,
    tag: null | string,
    icon: string,
    rating: number,
    trial_lesson: null | string,
    background_person: string
}