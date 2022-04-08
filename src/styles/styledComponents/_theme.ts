export interface ThemeInterface {
    fontSize: {
        [key: string]: string;
    };
    colors: {
        [key: string]: string;
    };
    fontWeight: {
        [key: string]: string;
    };
    breakPoints: {
        [key: string]: number;
    };
}

export const Theme: ThemeInterface = {
    colors: {
        white: '#FFFFFF',
        black: '#000000',
        primaryColor: '#2D2E83',
        primaryColorPress: '#151652',
        primaryColorHover: '#494AA4',
        primaryColorTransparent: 'rgba(45, 46, 131, 0.1)',
        secondaryColor: '#D2AB66',
        secondaryColorPress: '#C1964A',
        secondaryColorHover: '#E3BC76',
        secondaryTransparentColor: 'rgba(210, 171, 102, 0.1)',
        successColor: '#38C775',
        successTransparentColor: 'rgba(56, 199, 117, 0.1)',
        warningColor: '#FF9700',
        warningTransparentColor: 'rgba(255, 151, 0, 0.1)',
        infoColor: '#3EAEFF',
        infoTransparentColor: 'rgba(62, 174, 255, 0.1)',
        errorColor: '#FE5050',
        errorTransparentColor: 'rgba(254, 80, 80, 0.1)',
        gray_100: '#F7F9FC',
        gray_200: '#E6EAF0',
        gray_300: '#D0D7E2',
        gray_400: '#A7AFBC',
        gray_500: '#7B8698',
        gray_600: '#596579',
        gray_700: '#374253',
        gray_800: '#192638',
        gray_900: '#0F1825',
        borderDefaultColor: '#EAEAEA',
    },
    fontSize: {
        ss: '0.5rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.125rem',
        '5xl': '3rem',
        '6xl': '4rem',
    },
    fontWeight: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
    },
    breakPoints: {
        desktop: 1210,
        largeTablet: 1023,
        phoneRotate: 850,
        tablet: 769,
        largePhone: 601,
        normalPhone: 421,
        smallPhone: 376,
        smallestPhone: 361,
    }
};
