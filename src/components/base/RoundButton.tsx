import { CSSProperties, MouseEventHandler } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 9999px;
    background-color: white;
    box-shadow: 0 4px 6px -1px ${props => props.theme.colors.text.title}15, 0 2px 4px -1px ${props => props.theme.colors.text.title}15;
`;

const Icon = styled.img`
    border-radius: inherit;
`;

interface RoundButtonProps {
    imageUrl: string;
    alt: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    name?: string;
    style?: CSSProperties;
}

/**
 * Circle shape button, with an icon in it.
 */
const RoundButton: React.FC<RoundButtonProps> = ({
    imageUrl,
    alt,
    name,
    style,
    onClick,
}) => {
    return (
        <Wrapper name={name || alt} onClick={onClick} style={style}>
            <Icon src={imageUrl} alt={alt} />
        </Wrapper>
    );
};

export default RoundButton;
