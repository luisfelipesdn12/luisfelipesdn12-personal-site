import { useDarkMode } from 'next-dark-mode';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: inline-block;
    position: relative;

    display: block;
    font-weight: 600;
    line-height: 1.25;
    padding: 0.5rem;
    border-radius: 9999px;
    background-color: white;
    user-select: none;
    cursor: pointer;

    box-shadow: 0 4px 6px -1px ${props => props.theme.colors.text.title}15, 0 2px 4px -1px ${props => props.theme.colors.text.title}15;
`;

const ThemeSwitcher: React.FC = () => {
    const {
        darkModeActive,
        switchToDarkMode,
        switchToLightMode
    } = useDarkMode();

    return (
        <Container
            title={darkModeActive ? "Light mode" : "Dark mode"}
            aria-label={darkModeActive ? "Light mode" : "Dark mode"}
            onClick={darkModeActive ? switchToLightMode : switchToDarkMode}
        >
            {darkModeActive ? "🌔" : "🌒"}
        </Container>
    );
};

export default ThemeSwitcher;
