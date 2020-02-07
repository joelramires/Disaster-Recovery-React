import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import RedeemIcon from '@material-ui/icons/Redeem';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
});


export default function MediaCard() {
  const classes = useStyles();

  return (

    <div className="container mt-5"> 

<Grid container spacing={3}>
            <Grid item xs>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.globalgiving.org/img/banners/photoBlock5.jpg"
          title="Contemplative Reptile"
        />
            <CardContent>
        <Typography  align="center">
        <CheckIcon />
        </Typography>
        
          <Typography gutterBottom variant="h5" component="h2" align="center" className="mt-2" >
          NONPROFITS
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Nonprofits around the world apply and join Disaster Recovery to access more funding, 
          to build new skills, and to make important connections.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

    <Grid item xs>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.globalgiving.org/img/banners/photoBlock6.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
            <Typography  align="center">
            <RedeemIcon />
            </Typography>
          <Typography gutterBottom variant="h5" component="h2"  align="center" className="mt-2">
          OUR IMPACT
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          People like you give what you can to your favorite projects; you feel great
          when you get updates about how your money is put to work by trusted organizations.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.globalgiving.org/img/banners/photoBlock7.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
            <Typography  align="center">
            <LocationCityIcon />
            </Typography>
          <Typography gutterBottom variant="h5" component="h2"  align="center" className="mt-2">
          COMPANIES
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
          Generous companies and their employees further support high-impact projects, 
          helping local communities thrive.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    
    </Grid>
    </div>
  );
}
