import { ITeacherByIdResponse } from "../../../../../../../5Entites/teacher/types/teacherById";
import { $api } from "../../../../../../../6Shared/api";

export const getDescriptionTeacher = async (id: number): Promise<ITeacherByIdResponse | null> => {
    try {
        const response = await $api.get<ITeacherByIdResponse>(`/api/v1/account/teachers/${id}/`);
        return response.data;
    } catch (e) {
        console.log("Ошибка при получении данных о учителе", e);
        return null;
    }
};
