import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import img1 from './../images/img1.png'
import img2 from './../images/img2.png'
import img3 from './../images/img3.png'
import img4 from './../images/img4.png'
const useStyles = makeStyles((theme) => ({
    appbar: {
      backgroundColor:'#001a4d',
      
  
    },
   
    menuButton:{
      display:'flex',
      flexGrow:1,
      justifyContent:'flex-start'
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
  
const About = () =>

{

    const classes = useStyles();
    return(
        <Grid container>
           <Grid item sm={6} md={12}>
          <p className={classes.pmargin}>
          Syscoin provides trustless interoperability with Ethereum 
            ERC-20, token & asset <br/> microtransactions, and Bitcoin-core-compliant merge-mined security.</p>
          </Grid>
        

     <Grid container className={classes.container2}>
  <Grid item  sm={6} md={12}>
<Button variant="contained" className={classes.butt} color="primary">
  Support
</Button>
<Button variant="contained" className={classes.butt} color="secondary">
  Wallets
</Button>
<Button variant="contained" className={classes.butt} disabled>
  News
</Button>
<Button variant="contained" className={classes.butt} color="primary" >
  White PaperS
</Button>
<Button variant="contained" className={classes.butt} color="primary" >
  Maps
</Button>

</Grid>
</Grid>



     <Grid container className={classes.container1} >
       <Grid  item xs={12} sm={12} md={6} lg={6}     >
       <Grid container   >
      <div>
        <img src={img1} alt="" className={classes.fimg} />
      </div>
      <div>
        <h1>
        High Transaction Throughput
        </h1>
        <p>
        Syscoin's unique Z-DAG technology means the network can handle a 
        transaction throughput of 60158 Syscoin Platform Token transactions 
        per second (TPS), while remaining decentralised and secure.
        </p>
      </div>
      </Grid>
      </Grid>
      <Grid   item xs={12} sm={12}  md={6} lg={6}  >
      <Grid container   >
      <div>
        <img src={img2} alt="" className={classes.simg} />
      </div>
      <div>
        <h1>
        Interoperability
        </h1>
        <p>
        Build bridges between blockchains with Syscoin Bridge, 
        interoperability with other chains has never been easier.
        </p>
      </div>
      </Grid>
      </Grid>
      </Grid>
      

      <Grid container className={classes.container1}  >
       <Grid item xs={12} sm={12} md={6} lg={6} >
       <Grid container   >
      <div>
        <img src={img3} alt="" className={classes.timg} />
      </div>
      <div>
        <h1>
        High Security
        </h1>
        <p>
        Syscoin is merge-mined with Bitcoin 
        which provides Syscoin with an incredibly robust and secure network.
        </p>
      </div>
      </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} >
      <Grid container   >
      <div>
        <img src={img4} alt="" className={classes.frimg} />
      </div>
      <div>
        <h1>
        Low Fees

        </h1>
        <p>
        The fees to transact Syscoin Platform Tokens
         or Assets are very low, making them suited for a wide range of use cases such as point-of-sale transactions.
        </p>
      </div>
      </Grid>
      </Grid>
      </Grid>


      
</Grid>
    )

}

export default About