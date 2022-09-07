import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { EventAvailable, GroupWork, TodaySharp } from '@material-ui/icons';

import { sliderConfigFeatured, sliderConfig } from "../Slider/sliderConfig";
import { SalonSlider } from "../Slider/Slider.component";
// import Services from '../Services/ServicesComponent';

import bgImage from "../../salon-bg1.jpeg";
import './Slider.css';

const useStyles = makeStyles({
  location: {
    padding: 10,
    minHeight: 150,
    background: 'linear-gradient(top, #42275a,  #734b6d)',
  },
  clients: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px dashed',
    borderColor: '#8d68a3',
    minHeight: 150,
  }
});

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

const ClientTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: 700
  }
})(Typography);

const HomeComponent = () => {
  const classes = useStyles();
  return (
    <>
      <main
        className="site-main"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div id="slider" className="container">
          <div className="featured-slider-title">
            <h3>Featured</h3>
          </div>
          <div className="slider">
            <SalonSlider salons={sliderConfigFeatured} />
          </div>
        </div>
        <Grid container spacing={2} className={classes.location}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <WhiteTextTypography sx={{ mb: 1.5 }}>
                <EventAvailable className="service-icon" />
              </WhiteTextTypography>
              <WhiteTextTypography sx={{ mb: 1.5 }}>
                {'Promotion'}
              </WhiteTextTypography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <WhiteTextTypography sx={{ mb: 1.5 }}>
                <GroupWork className="service-icon" />
              </WhiteTextTypography>
              <WhiteTextTypography sx={{ mb: 1.5 }}>
                {'Branding'}
              </WhiteTextTypography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <WhiteTextTypography sx={{ mb: 1.5 }}>
                <TodaySharp className="service-icon" />
              </WhiteTextTypography>
              <WhiteTextTypography sx={{ mb: 1.5 }}>
                {'Appointments'}
              </WhiteTextTypography>
            </Box>
          </Grid>
        </Grid>
        <div id="slider" className="container">
          <div className="slider-title">
            <h3>Salons</h3>
          </div>
          <div className="slider">
            <SalonSlider salons={sliderConfig} />
          </div>
        </div>
        <Grid container spacing={2} className={classes.location}>
          <Grid item xs={12} md={4}>
            <Box sx={item} className={classes.clients}>
              <ClientTextTypography sx={{ mb: 1.5 }}>
                {'250'}
              </ClientTextTypography>
              <ClientTextTypography sx={{ mb: 1.5 }}>
                {'Clients'}
              </ClientTextTypography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item} className={classes.clients}>
              <ClientTextTypography sx={{ mb: 1.5 }}>
                {'60'}
              </ClientTextTypography>
              <ClientTextTypography sx={{ mb: 1.5 }}>
                {'Products'}
              </ClientTextTypography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item} className={classes.clients}>
              <ClientTextTypography sx={{ mb: 1.5 }}>
                {'75'}
              </ClientTextTypography>
              <ClientTextTypography sx={{ mb: 1.5 }}>
                {'Academies'}
              </ClientTextTypography>
            </Box>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default HomeComponent;
