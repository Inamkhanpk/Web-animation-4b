import React from 'react' 
import Grid from '@material-ui/core/Grid'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
      
    bgcolor:{
        backgroundColor:'#4d4d4d'
    }
    
  }));

const Footer = () => {
    const classes = useStyles();
    return(
        <Grid container className={classes.bgcolor}>
           <Grid item xs={12}  md={2}  >
           <Grid container direction="row"
  justify="center"
  alignItems="center" >
        <h5>Privacy Policy</h5>
        </Grid>
        </Grid>
  
  
       <Grid  item xs={12} md={2}>
       <Grid container direction="row"
  justify="center"
  alignItems="center" >
       <h5>Terms & Conditions</h5>
        </Grid>
        </Grid>
  
        <Grid item xs={12} md={2}>
        <Grid container direction="row"
  justify="center"
  alignItems="center" >
        <h5>FAQ</h5>
         </Grid>
        </Grid>
  
  
        <Grid  item xs={12} md={2}>
        <Grid container direction="row"
  justify="center"
  alignItems="center" >
    <h5>Contact</h5>
  
  </Grid>
        </Grid>
  
        <Grid item xs={12} md={4}>
        <Grid container direction="row"
  justify="center"
  alignItems="center" >
        <FacebookIcon/>
        <TwitterIcon/>
        <GitHubIcon/>
       <LinkedInIcon/>
       <InstagramIcon/>
       <p>© 2020 Syscoin. All rights reserved</p> 
    </Grid>
  </Grid>  
        </Grid>
    )
}

export default Footer