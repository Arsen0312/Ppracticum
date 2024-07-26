import { $api } from "../../../../../../../6Shared/api";
import { ITeacherByIdResponse } from "../../../../../../../5Entites/teacher/types/teacherById";

export const getDescriptionTeacher = async (id: number): Promise<ITeacherByIdResponse | void> => {
    try {
        const response = await $api.get<ITeacherByIdResponse>(`/api/v1/account/teachers/${id}/`);
        return response.data;
    } catch (e) {
        console.log("Ошибка при получении данных о учителе", e);
    }
};
