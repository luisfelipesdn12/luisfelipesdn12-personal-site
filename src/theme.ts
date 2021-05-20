export interface ThemeProps {
    colors: {
        text: {
            title: string;
            simple: string;
            link: string;
        };
        background: {
            simple: string;
            accent: string;
        };
    };
}

const theme: ThemeProps = {
    colors: {
        text: {
            title: '#1A202C',
            simple: '#4A5568',
            link: '#2B6CB0',
        },
        background: {
            simple: '#FFFFFF',
            accent: '#EBF4FF',
        },
    },
};

export default theme;
