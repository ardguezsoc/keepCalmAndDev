export const keepCalmDevtTheme = {
  name: 'hoges',
  base: '16px',
  grid: 5,
  // colors -----------
  palette: {
    common: {
      background: '#303030',
      black: '#000000',
      white: '#ffffff',
      separator: '#D8D8D8',
      improve: '#EEB336',
      yellow: '#FFD54F',
      price: '#333333',
      foreground: '#242424',
      green: '#17ae8e',
      greenSuccess: '#00C294',
      grey: {
        high: '#37474F',
        medium: '#757575',
        low: '#9B9DA0',
        disabled: '#BABCBF',
        neutral: '#DDDDDD',
        light: '#F7F7F7',
        lighter: '#f5f5f5',
        border: '#AFAFAF',
      },
      red: '#E85757',
      error: '#AC2525',
      warning: '#D66607',
      successText: '#005E00',
      successGood: '#02AE00',
    },
    // pink
    primary: {
      main: '#4d9383',
      dark: '#b7176d',
      light: '#ffffff',
      lighter: 'rgb(245 180 0, 0.1)',
      contrastText: '#1F2022',
    },
    secondary: {
      main: '#F2F2F2',
      dark: '#959595',
      light: '#E5E5E5',
      lighter: '#F8FAFD',
      contrastText: '#1F2022',
    },
    // blue
    tertiary: {
      main: '#1285C7',
      dark: '#005292',
      light: '#F0F8FF',
      lighter: 'rgba(0,130,200,0.1)',
      contrastText: '#1F2022',
    },
  },

  // Typography -----------

  font: {
    family: {
      text: 'Inter, sans-serif',
    },
    weight: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      bolder: 900,
    },
    size: {
      extraTiny: '0.75rem', // 12px
      tiny: '0.875rem', // 14px
      small: '1rem', //    16px
      topic: '1.125rem', // 18px
      normal: '1.5rem', // 24px
      double: '2rem', //   32px
      medium: '2.5rem', // 40px
      large: '3.75rem', // 60px
      extra: '5rem', //    80px
    },
  },

  // Responsive -----------
  breakpoints: {
    mobile: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
  },

  // Border radius -----------
  borderRadius: {
    rounded: '.25rem',
    roundedPill: '50rem',
  },

  // Flex -----------
  flex: {
    dFlex: 'flex',
    dInlineFlex: 'inline-flex',
  },

  flexDirection: {
    row: 'row',
    column: 'column',
  },

  justifyContent: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
  },

  display: {
    inline: 'inline-block',
    block: 'block',
    grid: 'grid',
    inlineGrid: 'inline-grid',
  },

  alignItems: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    baseline: 'baseline',
  },
  pageLayout: {
    bottomRowHeight: '200px',
    topRowHeight: '5rem',
    numberOfColumns: 12,
    columnWidth: '1fr',
  },
};
