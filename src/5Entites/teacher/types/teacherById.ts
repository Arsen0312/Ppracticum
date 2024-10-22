export interface IContact {
    id: number,
    created_at: string,
    updated_at: string,
    facebook: string,
    instagram: string,
    whatsapp: string,
    telegram: string,
    phone: string,
    email: string
}

export interface ITeacherByIdResponse {
    id: number,
    contacts: IContact,
    created_at: string,
    updated_at: string,
    first_name: string,
    last_name: string,
    patronymic: string,
    rating: number,
    avatar: string,
    role: string,
    description: string,
    experience: string,
    courses: number[]

}
