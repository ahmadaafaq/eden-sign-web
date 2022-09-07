import { useEffect, useState, useCallback } from 'react';
import Slider from "react-slick";
import { useLocation } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Facebook, Instagram } from "@material-ui/icons";

import { salonDetailConfig } from "./salonDetailConfig";

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

const useStyles = makeStyles({
    container: {
        background: 'linear-gradient(#e66465, #9198e5)',
    },
    root: {
        // maxWidth: 100,
    },
    media: {
        height: 460,
    },
    card: {
        padding: 10,
    },
    slider: {
        margin: '0 auto',
        maxWidth: '88%',
    },
    detail: {
        maxHeight: 400,
        padding: 5
    },
    generalDetail: {
        padding: 20,
        minHeight: 150,
        background: 'linear-gradient(top, #42275a,  #734b6d)',
    },
    gdItem: {
        marginBottom: 10,
    },
    services: {
        padding: 5,
        border: '1px solid black',
        background: 'linear-gradient(top, #614385,  #516395)',
    },
    serviceImg: {
        maxHeight: 400,
        width: '100%',
    }
});

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

const ServicesTextTypography = withStyles({
    root: {
        color: "#FFFFFF",
        fontWeight: 800,
        fontSize: '22px !important',
        marginBottom: 20,
        textShadow: '-1px -1px 0px rgba(255,255,255,0.3), 1px 1px 0px rgba(0,0,0,0.8)',
        opacity: 0.4,
    }
})(Typography);

const TitleTextTypography = withStyles({
    root: {
        color: "#FFFFFF",
        textShadow: '-1px -1px 0px rgba(255,255,255,0.3), 1px 1px 0px rgba(0,0,0,0.8)',
        opacity: 0.4,
        fontSize: '28px !important'
    }
})(Typography);

const SalonDetail = () => {
    const [salonDetail, setSalonDetail] = useState([]);
    const [detailImg, setDetailImg] = useState('');

    const classes = useStyles();
    const { state } = useLocation();
    const { id, title, address } = state;
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const rndInt = randomIntFromInterval(1, 4)

    useEffect(() => {
        const salonDetailData = salonDetailConfig.filter(detail => detail.id === id)[0].images;
        setSalonDetail(salonDetailData);
        setDetailImg(salonDetailData[rndInt]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const getSalonData = () => {
        return salonDetail.map((salon, key) =>
            <div className={classes.card} key={key}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={salon}
                        />
                    </CardActionArea>
                </Card>
            </div>
        )
    };

    return (
        <>
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <Slider {...settings} className={classes.slider}>
                        {getSalonData()}
                    </Slider>
                </Grid>
                <Grid container className={classes.generalDetail}>
                    <Grid item xs={12} md={4} className={classes.gdItem}>
                        <Box sx={item}>
                            <TitleTextTypography sx={{ fontSize: 14 }} gutterBottom>
                                <strong>{title}</strong>
                            </TitleTextTypography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.gdItem}>
                        <Box sx={item}>
                            <WhiteTextTypography sx={{ fontSize: 14 }} gutterBottom>
                                <strong>Address</strong>
                            </WhiteTextTypography>
                            <WhiteTextTypography sx={{ mb: 1.5 }}>
                                {address}
                            </WhiteTextTypography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.gdItem}>
                        <Box sx={item}>
                            <WhiteTextTypography sx={{ fontSize: 14 }} gutterBottom>
                                <strong>Social Links</strong>
                            </WhiteTextTypography>
                            <Typography sx={{ mb: 1.5 }}>
                                <ul className="social-icons">
                                    <li><a target="_blank" className="facebook" href="https://www.facebook.com/fb.edensign.in" rel="noreferrer"><Facebook /></a></li>
                                    <li>
                                        <a target="_blank" className="instagram" href="https://www.instagram.com/edensign.in/" rel="noreferrer">
                                            <Instagram />
                                        </a>
                                    </li>
                                </ul>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container item xs={12} className={classes.detail}>
                    <Grid item xs={6} className={classes.services}>
                        <ServicesTextTypography variant="h5" color="text.secondary" gutterBottom>
                            {'What we do best'}
                        </ServicesTextTypography>
                        <WhiteTextTypography sx={{ fontSize: 12 }} paragraph>
                            Hair Dresser
                        </WhiteTextTypography>
                        <WhiteTextTypography sx={{ fontSize: 12 }} paragraph>
                            Beauty & Grooming
                        </WhiteTextTypography>
                        <WhiteTextTypography sx={{ fontSize: 12 }} paragraph>
                            Hair Spa
                        </WhiteTextTypography>
                        <WhiteTextTypography sx={{ fontSize: 12 }} paragraph>
                            Manicure and Pedicure
                        </WhiteTextTypography>
                        <WhiteTextTypography sx={{ fontSize: 12 }} paragraph>
                            Dry Shampoo
                        </WhiteTextTypography>
                        <WhiteTextTypography sx={{ fontSize: 12 }} paragraph>
                            Hair Coloring
                        </WhiteTextTypography>
                        <WhiteTextTypography sx={{ fontSize: 12 }} paragraph>
                            Facial
                        </WhiteTextTypography>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            className={classes.serviceImg}
                            component="img"
                            alt={title}
                            src={detailImg}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default SalonDetail;