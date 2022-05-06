import React, { useState, useContext } from 'react';

// MUI Imports
import { ThemeProvider, createTheme } from '@mui/system';
import { Navigate } from 'react-router-dom';
import {
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
  Fade,
  Modal,
  Typography,
  InputAdornment,
  InputLabel,
  Input,
  FormControl,
  Backdrop,
  Button,
  Fab,
  TextField,
  Box,
  Slide,
  Stack,
} from '@mui/material';

const AddressForm = ({
  handleAddressForm,
  handleAddressFormClose,
  handleInputAddress,
  handleSubscribed,
  addressOpen,
  commonStyles,
  address,
}: any) => {
  // state var

  const { streetAddress, city, state, zip } = address;
  return (
    <div>
      {' '}
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          borderRadius: '2.5rem',
          boxShadow: 24,
        }}
        open={addressOpen}
        onClose={handleAddressFormClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 750,
        }}
        className='add_x_form_modal'
      >
        <Fade in={addressOpen} timeout={{ appear: 300, enter: 300, exit: 400 }}>
          {
            <div>
              <div>
                <Box
                  sx={{
                    ...commonStyles,
                    // flexWrap: 'wrap',
                    // display: 'flex',
                    // justifyContent: 'center',
                    // borderRadius: '16px',
                  }}
                >
                  <form onSubmit={handleSubscribed}>
                    <br></br>

                    <TextField
                      fullWidth
                      border-radius='1rem'
                      id='filled-basic'
                      variant='filled'
                      label='Street Address'
                      name='streetAddress'
                      value={streetAddress}
                      placeholder='123 HelloWorldStreet'
                      onChange={handleInputAddress}
                    />
                    <br></br>
                    <br></br>
                    <TextField
                      fullWidth
                      id='filled-basic'
                      variant='filled'
                      value={city}
                      name='city'
                      label='City'
                      placeholder='City'
                      onChange={handleInputAddress}
                    />
                    <br></br>
                    <br></br>
                    <TextField
                      fullWidth
                      id='filled-basic'
                      variant='filled'
                      value={state}
                      name='state'
                      label='State'
                      // id='fullWidth'
                      placeholder='State'
                      onChange={handleInputAddress}
                    />
                    <br></br>
                    <br></br>
                    <TextField
                      fullWidth
                      id='filled-basic'
                      variant='filled'
                      value={zip}
                      name='zip'
                      label='Zip'
                      placeholder='Zip code'
                      onChange={handleInputAddress}
                    />
                    <br></br>
                    <br></br>

                    <Stack
                      direction='row'
                      // divider={
                      //   <Divider
                      //     orientation='vertical'
                      //     variant='middle'
                      //     flexItem
                      //     light
                      //   />
                      // }
                      justifyContent='space-between'
                    >
                      <Button
                        variant='text'
                        size='large'
                        type='submit'
                        sx={{ color: 'green' }}
                      >
                        SUBSCRIBE
                      </Button>
                    </Stack>
                    <br></br>
                  </form>
                </Box>
              </div>
            </div>
          }
        </Fade>
      </Modal>
    </div>
  );
};

export default AddressForm;