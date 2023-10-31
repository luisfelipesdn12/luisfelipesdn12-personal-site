import React from 'react';
import styled from 'styled-components';
import { useContent } from '../../../content';
import SeeMoreProjects from './SeeMoreProjects';
import ProjectItem from './ProjectItem';

const Wrapper = styled.section`
    @media (min-width: 640px) {
        display: grid;
        grid-template-columns: repeat(8, minmax(0, 1fr));
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(6, minmax(0, 1fr));
    }
`;

export const ProjectsList = styled.ul`
    justify-content: center;
    margin-top: 2rem;

    @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

interface ProjectsProps {
    /**
     * The number of projects that
     * must be showed in the home.
     * */
    previewCont?: number;
}

const Projects: React.FC<ProjectsProps> = ({ previewCont = 6 }) => {
    const content = useContent();

    return (
        <Wrapper>
            <div>
                <h1>{content.projects.title}</h1>
                <p style={{ fontSize: '1.5rem' }}>
                    {content.projects.description}
                </p>
                <ProjectsList>
                    {content.projects.list.slice(0, previewCont).map(project => (
                        <ProjectItem project={project} />
                    ))}
                    <SeeMoreProjects
                        nextProjects={content.projects.list.slice(previewCont)}
                    />
                </ProjectsList>
            </div>
        </Wrapper>
    );
};

export default Projects;
