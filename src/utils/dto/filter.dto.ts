export interface FilterDto {
    tags: string[];
    q: string;
    readingTimeMinutes: number;
    positiveReactionsCount: number;
    page: number;
    perPage: number;
    tagsPage: number;
}