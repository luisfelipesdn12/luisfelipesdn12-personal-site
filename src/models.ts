interface BaseCard {
    imageUrl: string;
    name: string;
    description: string;
    link?: string;
}

interface BaseSectionContent {
    title: string;
    description: string;
    list?: BaseCard[];
}

interface Project extends BaseCard {}

interface Course extends BaseCard {
    institution: string;
    hours: number;
}

export interface HeroSectionContent {
    greeting: string;
    description: string;
    resumeButton: {
        label: string;
        link: string;
    };
}

export interface ProjectSectionContent extends BaseSectionContent {
    list: Project[];
}

export interface EducationSectionContent extends BaseSectionContent {
    list: Course[];
}

export interface Footer {
    /** eg. "Developed by" */
    prefix: string;
    /** eg. "Luis Felipe" */
    author: string;
    /** eg. "." */
    suffix: string;
}
