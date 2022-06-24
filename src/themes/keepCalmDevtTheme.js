import { calcRem } from 'utils/functions/styles'

const spacingBaseUnit = 8
export const keepCalmDevtTheme = {
  name: 'hoges',
  base: '16px',
  grid: 5,
  // colors -----------
  palette: {
    common: {
      background: '#9B9DA0',
      black: '#000000',
      white: '#ffffff',
      separator: '#D8D8D8',
      sand: '#bc9370',
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
      disabled: {
        light: '#F1F3F5',
        base: '#ADB5BD',
        dark: '#DEE2E6'
      },
    },
    // pink
    primary: {
      main: '#82a6a5',
      dark: '#4199aa',
      darker: '#0d486a',
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
    family: { main: 'Montserrat, Helvetica, Arial,sans-serif' },
    weight: {
      light: 300,
      regular: 400,
      semibold: 500,
      bold: 700
    },
    size: {
      desktop: {
        display: '36px',
        h1: '32px',
        h2: '28px',
        h3: '26px',
        h4: '22px',
        h5: '20px',
        h6: '18px',
        body: '16px',
        bodyS: '14px',
        bodyXS: '12px',
        bodyL: '18px'
      }
    },
    actions: {
      action: '16px',
      actionS: '14px',
      actionXS: '13px',
      actionL: '18px'
    },
    lineHeight: {
      _48: '48px',
      _44: '44px',
      _40: '40px',
      _39: '39px',
      _34: '34px',
      _32: '32px',
      _31: '31px',
      _27: '27px',
      _24: '24px',
      _22: '22px',
      _21: '21px',
      _19: '19px',
      _18: '18px',
      _17: '17px',
      _15: '15px'
    }
  },

  // Shadows -----------

  shadows: {
    none: 'none',
    xs: '0px 1px 2px rgba(0, 0, 0, 0.1)',
    s: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    m: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    l: '0px 6px 8px rgba(0, 0, 0, 0.1)',
    xl: '0px 8px 10px rgba(0, 0, 0, 0.1)',
    xxl: '0px 4px 33px rgba(0, 0, 0, 0.11)'
  },


  // Responsive -----------
  breakpoints: {
    mobile: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
  },

  // Radius -----------

  radius: {
    none: '0px',
    xs: '4px',
    s: '10px',
    m: '19px',
    xl: '100%'
  },

  // button height
  buttonHeight: {
    xxSmall: '14px',
    xSmall: '16px',
    small: '32px',
    medium: '40px',
    large: '56px',
    xLarge: '60px',
    xxLarge: '68px'
  },
  // icon size
  icon: {
    xxSmall: calcRem(14),
    xSmall: calcRem(16),
    small: calcRem(20),
    medium: calcRem(24),
    large: calcRem(32),
    xLarge: calcRem(36),
    xxLarge: calcRem(60)
  },


  // spacing

  spacing: (...args) => {
    const length = args.length
    if (length < 1 || length > 4) return '0px'

    return args.map(space => `${space * spacingBaseUnit}px`).join(' ')
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
}
