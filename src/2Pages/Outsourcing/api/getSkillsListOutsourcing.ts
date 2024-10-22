import { $api } from "../../../6Shared/api";

export type TSkillsOutsourcing = {
    id: number,
    created_at: string,
    updated_at: string,
    title: string,
    icon: string
};

export type TGetSkillsListOutsourcingResponse = {
    count: number,
    next: string | null,
    previous: string | null,
    results: TSkillsOutsourcing[] | []
};

export const getSkillsListOutsourcing = async (): Promise<TSkillsOutsourcing[]> => {
    try {
        const response = await $api.get<TGetSkillsListOutsourcingResponse>(
            "/api/v1/outsourcing/outsourcing_skills/?limit=900");
        console.log(response);
        return response.data.results;
    } catch (e) {
        throw new Error("Ошибка при получении информации о умении ");
    }
};