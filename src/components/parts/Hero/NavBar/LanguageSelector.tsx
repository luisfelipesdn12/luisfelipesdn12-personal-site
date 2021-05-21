import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: inline-block;
    position: relative;
`;

const Select = styled.select`
    display: block;
    font-weight: 600;
    line-height: 1.25;
    padding: 0.5rem 1rem;
    padding-right: 1.5rem;
    border-radius: 9999px;
    background-color: white;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
`;

const SelectIcon = styled.div`
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    padding: 0 0.5rem;
    position: absolute;
    align-items: center;
    pointer-events: none;

    color: ${props => props.theme.colors.text.simple};

    svg {
        width: 1rem;
        height: 1rem;
        fill: currentColor;
    }
`;

const LanguageSelector: React.FC = () => {
    const router = useRouter();

    const selectRef = useRef<HTMLSelectElement>();

    useEffect(() => {
        if (selectRef.current) selectRef.current.value = router.locale;
    });

    return (
        <Container>
            <Select
                ref={selectRef}
                onChange={() => {
                    router.push('.', undefined, {
                        locale: selectRef.current.value,
                    });
                }}
            >
                <option value="en-US">EN 🇺🇸</option>
                <option value="pt-BR">PT 🇧🇷</option>
            </Select>
            <SelectIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </SelectIcon>
        </Container>
    );
};

export default LanguageSelector;
