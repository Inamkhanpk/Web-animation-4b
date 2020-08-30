import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    appbar: {
      backgroundColor:'#001a4d',
      
  
    },
    
    menuButton:{
      display:'flex',
      flexGrow:1,
      justifyContent:'flex-start',
    
    },
    
    navBAR:{
      display:'flex',
      flexGrow:1,
      justifyContent:'center'
    },
    
    title: {
     margin:'15px',
     
     
    },
    lbutton:{
      display:'flex',
      flexGrow:1,
      justifyContent:'flex-end'
      
    },
    pmargin:{
      textAlign:'center',
      fontSize:'25px',
      padding: theme.spacing(2),
    },
    butt:{
      borderRadius:'20px',
      margin:'5px'
    },
    fimg:{
      width:'33%',
      
    },
    simg:{
      width:'50%'
    },
    timg:{
      width:'62%',
      
    },
    frimg:{
      width:'62%'
    },
    container1:{
      padding:'20px'
    },
    container2:{
      textAlign:'center'
    },
    fifimg:{
      width:'75%'
    },
    pcenter:{
      padding:'20px',
       textAlign:'center'
    }
    
  }));
  


const Header = () =>{

    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const openDrawer = () => {
        setDrawerOpen(true);
      };
    
      const closeDrawer = () => {
        setDrawerOpen(false);
      };

      const classes = useStyles();
    return(
        <Grid container>
          <AppBar className={classes.appbar} position="static">
     
     <Toolbar   className={classes.toolbar}>
     <Hidden smUp>
       <div className={classes.menuButton} >
     <IconButton  edge="end"
             aria-label="menu"
             onClick={() => openDrawer()}>
        <MenuIcon />
      </IconButton>
     </div>
     </Hidden>


 <Drawer
   variant="temporary"
   anchor="left"
   open={drawerOpen}
   onClose={() => closeDrawer()}
   classes={{
     paper: classes.drawerPaper,
   }}
   onClick={() => closeDrawer()}
 >
<List>
<ListItem >
 <ListItemText primary="Features" />
</ListItem>
<ListItem >
 <ListItemText primary="Developers" />
</ListItem>
<ListItem >
 <ListItemText primary="About" />
</ListItem>
<ListItem >
 <ListItemText primary="News" />
</ListItem>
<ListItem >
 <ListItemText primary="Resources" />
</ListItem>
</List>
 </Drawer>

 <Hidden xsDown>
<div className={classes.navBAR}>
 <div>
       <Typography variant="h6" className={classes.title}>
         Features
       </Typography>

       </div>
       <div>
       <Typography variant="h6" className={classes.title}>
         Developers
       </Typography>
       </div>
       <div>
       <Typography variant="h6" className={classes.title}>
         About 
       </Typography>
       </div>
       <div>
       <Typography variant="h6" className={classes.title}>
         News
       </Typography>
       </div>
       <div>
       <Typography variant="h6" className={classes.title}>
         Resources
       </Typography>
       </div>
       </div>
       <div className={classes.lbutton}>
       
       <Button color="inherit"  >Join Discord</Button>
       </div>
       </Hidden>
       </Toolbar>
   </AppBar>
  


        </Grid>
    )
}

export default Header