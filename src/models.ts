export interface HeroSectionContent {
    greeting: string;
    description: {
        prefix: string;
        languages: string[];
        and: string;
        suffix: string;
    };
    socialLinks: {
        imageUrl: string;
        link: string;
        alt: string;
    }[];
    resumeButton: {
        label: string;
        link: string;
    };
}

interface BaseCard {
    imageUrl: string;
    name: string;
    description: string;
    link?: string;
}

interface BaseSectionContent<CardListType extends BaseCard = BaseCard> {
    title: string;
    description: string;
    list?: CardListType[];
}

interface Project extends BaseCard {}

interface Course extends BaseCard {
    institution: string;
    hours: number | string;
}

export interface Footer {
    /** eg. "Developed by" */
    prefix: string;
    /** eg. "Luis Felipe" */
    author: string;
    /** eg. "." */
    suffix: string;
}

export interface Content {
    hero: HeroSectionContent;
    projects: BaseSectionContent<Project>;
    education: BaseSectionContent<Course>;
    footer: Footer;
}
