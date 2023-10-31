import React from 'react';
import styled from 'styled-components';
import HeroHeader from '../src/components/base/HeroHeader';
import { ProjectsList } from '../src/components/parts/Projects';
import ProjectItem from '../src/components/parts/Projects/ProjectItem';
import { useContent } from '../src/content';

const Wrapper = styled.section`
    @media (min-width: 640px) {
        display: grid;
        grid-template-columns: repeat(8, minmax(0, 1fr));
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(6, minmax(0, 1fr));
    }
`;

const Projects: React.FC = () => {
    const content = useContent();

    return (
        <>
            <HeroHeader
                pageTitle={content.projects.title}
                description={content.projects.description}
            />
            <Wrapper>
                <div>
                    <ProjectsList>
                        {content.projects.list.map(project => (
                            <ProjectItem project={project} />
                        ))}
                    </ProjectsList>
                </div>
            </Wrapper>
        </>
    );
};

export default Projects;
