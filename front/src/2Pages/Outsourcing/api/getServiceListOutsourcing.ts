import { $api } from "../../../6Shared/api";

export type TServiceOutsourcing = {
    id: number,
    created_at: string,
    updated_at: string,
    title: string,
    description: string,
    icon: string
};

export type TGetServiceListOutsourcingResponse = {
    count: number,
    next: string | null,
    previous: string | null,
    results: TServiceOutsourcing[] | []
};

export const getServiceListOutsourcing = async (): Promise<TServiceOutsourcing[]> => {
    try {
        const response = await $api.get<TGetServiceListOutsourcingResponse>(
            "api/v1/outsourcing/outsourcing_services/?limit=900'-H 'accept: application/json'");
        console.log(response);
        return response.data.results;
    } catch (e) {
        throw new Error("Ошибка при получении информации о учителях");
    }
};
