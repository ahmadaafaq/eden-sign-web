/* eslint-disable max-len */
import {makeStyles, alpha} from '@material-ui/core/styles';

export const useRPSliderStyle = makeStyles((theme) => ({
  sliderWrapper: {
    width: '100%',
    position: 'relative',
  },
  sliderHeader: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slidersection: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
  },
  sliderHeaderTitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderHeaderTitle: {
    fontSize: 22,
    color: theme.palette.CustomColor.darkGrey,
    fontWeight: theme.typography.fontWeightBold,
  },
  sliderHeaderIntro: {
    fontSize: 16,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.CustomColor.darkGrey,
  },
  sliderHeaderTitleIcon: {
    marginRight: theme.spacing(1),
    filter: 'grayscale(100%)',
    '& svg': {
      fill: theme.palette.CustomColor.darkGrey,
    },
  },
  sliderHeaderRightActionTitle: {
    fontSize: 18,
    color: theme.palette.primary.main,
    fontWeight: 600,
    backgroundColor: 'transparent',
    outline: 'none',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderHeaderRightIcon: {
    width: 18,
    height: 18,
    marginLeft: theme.spacing(1),
    '& svg': {
      position: 'relative',
      top: '-4px',
      width: 14,
      height: 14,
      display: 'inline',
      verticalAlign: 'middle',
      fill: theme.palette.primary.main,
    },
  },
  sliderWrapperContainer: {
    padding: theme.spacing(2, 3, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 0, 4),
    },
  },
  recPartnerSliderWrapper: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
    '& .slick-prev, & .slick-next': {
      height: 40,
      width: 40,
      borderRadius: '50%',
      [theme.breakpoints.down('sm')]: {
        visibility: 'hidden',
      },
    },
    '& .slick-prev': {
      '&::before': {
        content: `url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='42px' height='42px' viewBox='0 0 42 42' enable-background='new 0 0 42 42' xml:space='preserve'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%235A5A5A' d='M40.435,19.753l-0.091-0.701c-0.062-0.481-0.121-0.964-0.21-1.441 c-0.931-5.071-3.511-9.207-7.666-12.293c-2.922-2.169-6.287-3.411-10.002-3.694l-0.277-0.061l-2.434,0.004l-0.672,0.087 c-0.492,0.061-0.984,0.121-1.473,0.211C12.539,2.798,8.404,5.378,5.317,9.532c-2.162,2.917-3.404,6.268-3.692,9.959l0.421,0.033 l-0.484,0.287l0.004,2.438l0.099,0.729c0.058,0.457,0.118,0.914,0.196,1.369c0.786,4.404,2.883,8.16,6.232,11.164 c2.752,2.468,6.031,4.038,9.746,4.667c0.443,0.075,0.89,0.129,1.337,0.184l0.636,0.075h2.377c0.019,0,0.717-0.092,0.717-0.092 c0.469-0.06,0.94-0.12,1.406-0.2c4.384-0.762,8.129-2.83,11.13-6.149c2.79-3.083,4.441-6.795,4.902-11.027l0.095-0.779 L40.435,19.753z M21.002,3.892l0.013,0.421c4.46,0.003,8.652,1.745,11.805,4.906c3.148,3.158,4.879,7.353,4.868,11.812 c-0.022,9.184-7.503,16.656-16.697,16.655c-4.473-0.005-8.674-1.751-11.826-4.917c-3.143-3.157-4.866-7.346-4.852-11.795 c0.031-9.188,7.521-16.661,16.689-16.661V3.892L21.002,3.892z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%235A5A5A' d='M14.872,20.997c0,0.412,0.208,0.805,0.622,1.167l6.124,5.363 c0.444,0.392,0.89,0.782,1.342,1.165c0.256,0.213,0.577,0.33,0.9,0.33c0.247,0,0.486-0.067,0.694-0.192 c0.528-0.317,0.788-0.935,0.619-1.465c-0.095-0.31-0.298-0.62-0.558-0.852c-0.849-0.76-1.705-1.508-2.562-2.256L18.331,21 l3.501-3.066c0,0,2.185-1.905,2.877-2.521c0.337-0.301,0.521-0.693,0.513-1.105c-0.006-0.394-0.186-0.755-0.503-1.019 c-0.243-0.201-0.533-0.309-0.836-0.309c-0.364,0-0.729,0.151-1.054,0.437l-7.344,6.428C15.078,20.199,14.872,20.587,14.872,20.997z '/%3E%3C/g%3E%3C/svg%3E%0A");`,
      },
    },
    '& .slick-next': {
      '&::before': {
        content: `url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='42px' height='42px' viewBox='0 0 42 42' enable-background='new 0 0 42 42' xml:space='preserve'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%235A5A5A' d='M40.438,22.188l-0.004-2.438l-0.099-0.729 c-0.058-0.457-0.117-0.914-0.195-1.369c-0.787-4.404-2.884-8.16-6.233-11.164c-2.751-2.467-6.029-4.038-9.742-4.667 c-0.444-0.075-0.892-0.129-1.336-0.183l-0.641-0.076l-2.434,0.004l-0.659,0.088c-0.47,0.06-0.941,0.12-1.407,0.2 C13.305,2.616,9.56,4.685,6.56,8.004c-2.791,3.083-4.442,6.795-4.903,11.027l-0.095,0.779l0.004,2.437l0.091,0.701 c0.062,0.481,0.121,0.964,0.21,1.441c0.931,5.071,3.511,9.207,7.666,12.293c2.922,2.169,6.287,3.411,10.002,3.694l0.277,0.061 h2.377c0.019,0,0.729-0.091,0.729-0.091c0.492-0.061,0.984-0.121,1.473-0.211c5.071-0.934,9.207-3.514,12.293-7.668 c2.162-2.917,3.404-6.268,3.692-9.959l-0.42-0.033L40.438,22.188z M20.987,3.893l0.023,0.421c4.473,0.005,8.673,1.751,11.825,4.917 c3.143,3.157,4.866,7.346,4.852,11.795c-0.03,9.188-7.52,16.662-16.702,16.661c-4.46-0.003-8.652-1.745-11.805-4.906 c-3.148-3.158-4.879-7.353-4.868-11.811c0.022-9.185,7.504-16.656,16.675-16.656V3.893L20.987,3.893z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%235A5A5A' d='M19.04,13.308c-0.256-0.213-0.574-0.33-0.898-0.33 c-0.244,0-0.485,0.065-0.697,0.193c-0.527,0.319-0.785,0.938-0.616,1.471c0.097,0.305,0.301,0.612,0.556,0.845 c0.849,0.76,1.705,1.508,2.562,2.256L23.669,21l-3.501,3.066c0,0-2.185,1.905-2.876,2.521c-0.338,0.301-0.521,0.693-0.514,1.105 c0.007,0.394,0.186,0.755,0.503,1.019c0.243,0.201,0.533,0.309,0.836,0.309c0.364,0,0.729-0.151,1.055-0.437l7.343-6.428 C26.923,21.799,27.13,21.41,27.13,21c0-0.413-0.21-0.805-0.623-1.164l-6.182-5.414C19.9,14.047,19.477,13.673,19.04,13.308z'/%3E%3C/g%3E%3C/svg%3E");`,
      },
    },
    '& .slick-dots': {
      display: 'flex',
      justifyContent: 'center',

      margin: 0,
      padding: '1rem 0',
      listStyleType: 'none',

      '& li': {
        margin: '0 0.25rem',
        width: 12,
        height: 12,
      },

      '& button': {
        display: 'block',
        width: '0.6rem',
        height: '0.6rem',
        padding: 0,
        borderRadius: '100%',
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.CustomColor.darkGrey}`,
        textIndent: '-9999px',
      },

      '& li.slick-active button': {
        backgroundColor: alpha(theme.palette.CustomColor.darkGrey, 0.5),
      },
    },
    '& .slick-list': {
      [theme.breakpoints.down('xs')]: {
        padding: '0 !important',
      },
    },
    '& .slick-track': {
      display: 'flex',
      margin: 0,
      '& .slick-slide': {
        display: 'flex',
        height: 'auto',
        '& > div': {
          width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
          marginRight: theme.spacing(1.5),
        },
      },
    },
  },
}));
