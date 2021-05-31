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

export const lightTheme: ThemeProps = {
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

export const darkTheme: ThemeProps = {
    colors: {
        text: {
            title: '#D3D9E5',
            simple: '#D3D9E57D',
            link: '#3078C4',
        },
        background: {
            simple: '#0D0D0D',
            accent: '#171717',
        },
    },
};
