import React from "react";

import Slider from "react-slick";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  card: {
    padding: 10,
  }
});

export const SalonSlider = ({salons}) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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

  const classes = useStyles();

  const randomSalons = salons.sort(() => Math.random() - 0.5);

  return (
    <Slider {...settings}>
      {randomSalons && 
        randomSalons.map(salon =>
          <div className={classes.card}>
              <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={salon.img}
                  title={salon.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {salon.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {salon.address}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        )
      }
    </Slider>
  );
}