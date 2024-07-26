export interface IContacts {
    id: number;
    created_at: string;
    updated_at: string;
    facebook: string;
    instagram: string;
    whatsapp: string;
    telegram: string;
    phone: string;
    email: string;
}

export interface ITeacherResponse {
    id: number;
    contacts: IContacts;
    created_at: string;
    updated_at: string;
    first_name: string;
    last_name: string;
    patronymic: string;
    rating: number;
    avatar: string;
    role: string;
    description: string;
    experience: string;
    courses: number[];
}
