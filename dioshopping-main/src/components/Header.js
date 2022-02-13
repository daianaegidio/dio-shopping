import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import css from '../Pages/main.css';
const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3'>
              <div className='logotipo'>SHOPPING DIO</div>  
            </Typography>
            <Link className='menu' to="/">
                <Button color="primary"> <div className='menu'>Home</div></Button>
            </Link>
            <Link className='menu' to="/contato">
                <Button color="primary"> <div className='menu'>Contato</div></Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
