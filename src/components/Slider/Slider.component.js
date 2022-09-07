import React from "react";

import Slider from "react-slick";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    // maxWidth: 100,
  },
  media: {
    height: 460,
  },
  card: {
    padding: 10,
  },
});

export const SalonSlider = ({ salons }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
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

  const handleClick = (id, title, address) => {
    navigate(`/salon-detail/${title}`, {
      replace: true, state: {
        title: title,
        address: address,
        id: id,
      }
    });
  }

  const getSalons = () => {
    return salons.map((salon, key) =>
      <div className={classes.card} key={key}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={salon.img}
              title={salon.title}
            />
            <CardContent onClick={() => handleClick(salon.id, salon.title, salon.address)}>
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
    );
  }

  // console.log('salons=>', salons);

  // const randomSalons = salons.sort(() => Math.random() - 0.5);

  return (
    <Slider {...settings}>
      {salons && getSalons()}
    </Slider>
  );
}