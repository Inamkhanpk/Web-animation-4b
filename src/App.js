import React from 'react';

import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import useWebAnimations from "@wellyshen/use-web-animations";

import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
import img6 from './images/img6.png'
import img7 from './images/img7.png'
import img8 from './images/img8.png'
import img9 from './images/img9.png'
import img10 from './images/img10.png'



const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor:'#001a4d',
    

  },
  // toolbar:{
  //   display:'flex',
    
    
  // },
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
  parahead:{
    
  
  }
  
}));

function App() {
  
  
  
  
  const { ref: text5} = useWebAnimations({ 
    keyframes: [
      { "transform": "translateY(20px)" },
      { "transform": "translateY(0px)" },
    ],
    timing: {
      duration: 1000,
      direction: "alternate",
      iterations: Infinity,
    }
   });
  
  
  const { ref: text8 } = useWebAnimations({ 

    keyframes: [
      { "transform": "translateX(20px)" },
      { "transform": "translateX(0px)" },
    ],
    timing: {
      duration: 1000,
      direction: "alternate",
      iterations: Infinity,
    }
   });
  const { ref: text9 } = useWebAnimations({ 
    keyframes: [
      { "transform": "translateY(20px)" },
      { "transform": "translateY(0px)" },
    ],
    timing: {
      duration: 1000,
      direction: "alternate",
      iterations: Infinity,
    }
   });
  
  
  const { ref: text12} = useWebAnimations({ 
    keyframes: [
      { "transform": "translateX(20px)" },
      { "transform": "translateX(0px)" },
    ],
    timing: {
      duration: 1000,
      direction: "alternate",
      iterations: Infinity,
    }
   });
  const { ref : text13 } = useWebAnimations({
    keyframes: [
      { "transform": "translateY(20px)" },
      { "transform": "translateY(0px)" },
    ],
    timing: {
      duration: 1000,
      direction: "alternate",
      iterations: Infinity,
    }
   });
  
  const { ref: text15 } = useWebAnimations({  
    keyframes: [
      { "transform": "translateX(20px)" },
      { "transform": "translateX(0px)" },
    ],
    timing: {
      duration: 1000,
      direction: "alternate",
      iterations: Infinity,
    }
   });
  
  

  const classes = useStyles();
  return (
    <div >
      
       
      <AppBar className={classes.appbar} position="static">
     
        <Toolbar   className={classes.toolbar}>
          <div className={classes.menuButton} >
        <IconButton edge="start"  color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    </div>
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
          </Toolbar>
      </AppBar>
     

<Grid  container >
  <Grid item sm={6} md={12}>
<p className={classes.pmargin}>Syscoin provides trustless interoperability with Ethereum ERC-20, token & asset <br/> microtransactions, and Bitcoin-core-compliant merge-mined security.</p>
</Grid>
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


      <Grid container className={classes.container1}>
        <Grid item xs={12} sm={12} md={6} lg={6} ref={text5}>
          <Grid container direction="row"
  justify="center"
  alignItems="center"
>
        <div>
        <img src={img5} alt="" className={classes.fifimg}  />
      </div>
      </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}  >
          <Grid conatiner  justify="center" direction="column"
  alignItems="center"  >
        <div className={classes.parahead}>
        <h1 >
        What Can You Build?

        </h1>
        <p>
        The possibilities of what you can build on the Syscoin 
        platform are limited only by your imagination.
         Here are a some use cases to get your wheels turning:
        </p>
      </div>
      </Grid>
      </Grid>
        </Grid>
      
      


      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} >
        <h1>
          Point of Sale
        </h1>
        <p>
        The Syscoin protocol facilitates real-world point-of-sale applications that can be used to transact in-store or via e-commerce. The high speed, quick resolution of asset transactions via Syscoin’s proprietary Z-DAG technology means you can empower your business with the speed and security of blockchain.

Some examples of retail use cases include:

De-Centralised Marketplaces and E-Commerce 
Game Assets and Microtransactions 
Certificate Backed Digital Goods 
Stock Management and Tracking

        </p>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} ref={text8}>
        <div>
        <img src={img6} alt="" className={classes.fifimg}   />
      </div>
       
        </Grid>
      </Grid>



      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} ref={text9}>
        <div>
        <img src={img7} alt="" className={classes.fifimg}  />
      </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} >
        <div>
        <h1>
        Create Crypto Tokens

        </h1>
        <p>
        Syscoin Platform Tokens (SPT) allow anyone to quickly 
        create their own cryptocurrency token on Syscoin Platform. An example of an SPT is LODE, 
        a new cryptographic money system backed by physical silver. Other use cases include loyalty 
        points,
         coins supported by physical assets, and service-backed currency.
        </p>
      </div>
        </Grid>
      </Grid>



      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} >
        <h1>
        Syscoin Bridge
        </h1>
        <p>
        Syscoin 4.0 introduces a first-of-its-kind, two-way bridge to Ethereum.
         This allows Ethereum developers to move ERC20 tokens back and forth between the 
         Ethereum network and Syscoin Platfom, where they can make use of the scalability
          and high-transaction-throughput that Syscoin offers.
         This is done using a unique, permissionless burn/mint process that moves a
          quantity of ERC20 tokens into a corresponding Syscoin Platform Token (SPT),
           which the user has created. The bridge makes it possible to maintain a presence 
           on both the Syscoin network and Ethereum network.

Conversely, 
Syscoin developers can move an SPT into a user-generated ERC20 paired equivalent token,
 where they can harness powerful Ethereum features such as Smart Contracts.
  Ultimately, developers will be able to create bridges to other blockchains as required,
   offering optimum versatility, forward-compatibility, diversity and interoperability
    across the cryptosphere.
        </p>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} ref={text12}>
        <div>
        <img src={img8} alt="" className={classes.fifimg}/>
      </div>
       
        </Grid>
      </Grid>



      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} ref={text13}>
        <div>
        <img src={img9} alt="" className={classes.fifimg} />
      </div>
        </Grid>
        <Grid item xs={6}  >
        <div>
        <h1>
        Masternodes

        </h1>
        <p>

        Syscoin Masternodes were launched and implemented along with Syscoin 
        3.0 on May 1st 2018. Based on Dash code, Syscoin enhanced the masternodes 
        to offer high transactional throughput using Z-DAG, governance issuance and seniority.
        </p>
      </div>
        </Grid>
      </Grid>


      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} >
        <h1>
        Maintain Security
        </h1>
        <p>
        Syscoin is merge-mined with Bitcoin meaning Bitcoin miners can simultaneously 
        mine Bitcoin and Syscoin with no increase in cost. This provides Syscoin with an 
        incredibly robust and secure network and reduces network
         vulnerabilities that might allow exploits such as a 51% attack.
        </p>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} ref={text15} >
        <div>
        <img src={img10} alt=""  className={classes.fifimg}   />
      </div>
       
        </Grid>
      </Grid>

      
    </div>
  );
}

export default App;
