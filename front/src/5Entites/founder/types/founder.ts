export interface IParagraph {
    id: number;
    paragraphs: string;
}

export interface IFounder {
    full_name: string;
    image: string;
    description: string;
    paragraphs: IParagraph[] | [];
}

export interface IFounderResponse {
    count: number,
    next: string | null,
    previous: string | null
    results: IFounder[];
}
