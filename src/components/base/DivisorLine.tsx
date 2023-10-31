import { MouseEventHandler } from 'react';
import styled from 'styled-components';

const Wrapper = styled.hr`
    width: 100%;
    opacity: 30%;
    background-color: ${props => props.theme.colors.text.simple};
    height: 0.01rem;
`;

/**
 * A line to separate two sections.
 */
const DivisorLine: React.FC = () => {
    return <Wrapper></Wrapper>;
};

export default DivisorLine;
