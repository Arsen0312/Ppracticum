import { ICoursesByIdResponse } from "../../../5Entites/сourses/types/coursesById";
import { $api } from "../../../6Shared/api";

export const getTitleCoursesById = async (id: number): Promise<string> => {
    const response = await $api.get<ICoursesByIdResponse>(`/api/v1/academy/courses/${id}/`);
    return response.data.title;
};
