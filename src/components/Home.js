import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ImgIlustration from '../images/image.png';
import reactLogo from '../images/reactLogo.png';
import { Button, InputBase, Fab } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import styled from 'styled-components';

      
export default function Home(){

   const [component, setComponent] = useState(false)

   const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      textAlign:'center',
    },
    paper: {
      marginTop:20,
      padding: theme.spacing(1),
      margin: 'auto',
      maxWidth: '50vw',
      backgroundColor: 'gray',
      flexGrow: 1,
  
    },
    image: {
      width: '100%',
      height: '100%',
      backgroundSize:'cover'
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      width:'100%',
      height:'100%',
      borderRadius:5,
    },
    inputBase:{
      height:30,
      width:200,
      backgroundColor: 'white',
      borderRadius:'40px',
      marginTop:10
    },
    button: {
      width:180,
      backgroundColor:'green',
      borderRadius:'40px',
      marginTop:30,
      color:'white',
      marginBottom:15
    },
    logo:{
      width: 100,
      height: 100,
    },
    Fab: {
       position:'absolute',
       left:'5%',
       top:'80%',
       backgroundColor:'transparent',
       border: '2px dotted green',
    },
    content: {
      marginBottom:120
    }
  }));

   const classes = useStyles();
//


  const FloatButton = styled.button`
     position:absolute;
     border-radius:50%;
     backgroun-color: black;
     border: 2px solid green;
     width: 60px;
     height: 60px;
     color: green;
     left: 26%;
     top:60%;
  `
  const Root = styled.div`
    flex-grow: 1;
    text-align:center;
  ` 
  const PaperDiv = styled.div`
      margin-top:20;
      padding: 1;
      margin: 'auto';
      max-width: '50vw';
      background-color:'green';
      flex-grow: 1;
  `
  const ContainerDiv = styled.div`
    flex-direction: row;
  `

if(component) {
    return(
      <div className={classes.root}>
        <Typography variant="h4">
           Material UI
        </Typography>
        <Paper className={classes.paper}>
            <Grid container direction="row">
                  <Grid item xs>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} src={ImgIlustration} alt="image"/>
                        <Fab className={classes.Fab} onClick={()=>setComponent(false)}>
                           <ArrowBackIosIcon style={{paddingLeft:'10px'}}/>
                         </Fab>
                      </ButtonBase>
                  </Grid>
                  <Grid item xs>
                              <Grid item xs container direction="column">
                                  <Grid item xs container direction="row" justify = "center" alignItems="center">
                                      <img className={classes.logo} src={reactLogo} alt="reactLogo"/>
                                      <Typography gutterBottom variant="h5" style={{color:'cyan'}}>
                                        Efecto IO
                                      </Typography>
                                  </Grid>
                                      
                                  <Grid container direction="column" alignItems="center" justify="center">
                                        <Typography variant="body2" style={{color:'cyan'}}>
                                          Un plan educativo enfocado a la tecnología y la transformacíon digital
                                        </Typography>
                                          <InputBase
                                              className={classes.inputBase}
                                              inputProps={{ 'aria-label': 'naked' }}
                                            />
                                            <InputBase
                                              className={classes.inputBase}
                                              inputProps={{ 'aria-label': 'naked' }}
                                            />
                                            
                                        <Button variant="contained" className={classes.button}>
                                            Iniciar sesión
                                        </Button>
                                        <Typography variant="body2" style={{color:'white',marginBottom:100}}>
                                              ¿Quiéres ingresar a nuestra plataforma y empezar a descubrir nuestros cursos?
                                          </Typography>
                                        <Typography variant="h5" style={{ cursor: 'pointer', color:'cyan' }}>
                                          Registrate Aquí
                                        </Typography>
                                  </Grid>
                                     
                              </Grid>
                                 
                        </Grid>
                        
            </Grid>
        </Paper>
    </div>
    )
  }else{

   
      return(
        <Root>
          <h1>
             Styled Component
          </h1>
          <PaperDiv >
              <ContainerDiv>
                    <div>
                        <div>
                          <img src={ImgIlustration} alt="image"/>
                          <FloatButton onClick={()=>setComponent(true)}>
                             <span style={{fontSize:40}}>{'<'}</span>
                           </FloatButton>
                        </div>
                    </div>
                    <div>
                                <div>
                                    <div>
                                        <img src={reactLogo} alt="reactLogo"/>
                                        <p style={{color:'cyan'}}>
                                          Efecto IO
                                        </p>
                                    </div>
                                        
                                    <div>
                                          <p style={{color:'cyan'}}>
                                            Un plan educativo enfocado a la tecnología y la transformacíon digital
                                          </p>
                                           <input></input>
                                           <input></input>
                                              
                                          <button>
                                              Iniciar sesión
                                          </button>
                                          <p style={{color:'white',marginBottom:100}}>
                                                ¿Quiéres ingresar a nuestra plataforma y empezar a descubrir nuestros cursos?
                                            </p>
                                          <p style={{ cursor: 'pointer', color:'cyan' }}>
                                            Registrate Aquí
                                          </p>
                                    </div>
                                       
                                </div>
                                   
                          </div>
                          
              </ContainerDiv>
          </PaperDiv >
      </Root>
       ) }
    
}

