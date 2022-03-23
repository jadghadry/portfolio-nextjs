export type Service = {
    description: string;
    icon: string;
    id: string;
    title: string;
};

export type TimelineEntry = {
    bulletPoints: string[];
    endDate: string | null;
    id: string;
    startDate: string;
    title: string;
};
