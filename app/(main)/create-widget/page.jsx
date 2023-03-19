"use client"; // this is a client component 

import { useState } from 'react';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MUISwitch from './../../components/switch'


function CreateWidget() {

    // States
    const [widgetName, setWidgetName] = useState('');
    const [widgetNameError, setWidgetError] = useState('');
    const [widgetNameReady, setWidgetNameReady] = useState(false);
    // widget title
    const [widgetTitle, setwidgetTitle] = useState('');
    const [widgetTitleError, setwidgetTitleError] = useState('');
    const [widgetTitleReady, setWidgetTitleReady] = useState(false);
    // cta text
    const [ctaText, setCtaText] = useState('');
    const [ctaTextError, setCtaTextError] = useState('');
    const [ctaTextReady, setCtaTextReady] = useState(false);
    //
    // Cta Link
    const [ctaLink, setCtaLink] = useState('');
    const [ctaLinkError, setCtaLinkError] = useState('');
    const [ctaLinkReady, setCtaLinkReady] = useState(false);
    // Widget position
    const [widgetPosition, setwidgetPosition] = useState('Top Center');
    //
    const [widgetBody, setwidgetBody] = useState('');
    // 
    const [icon, setIcon] = useState('');
    // Switch add CTA
    const [mySwitchState, setMySwitchState] = useState(false);
    // Switch controller
    const [mySwitchCont, setmySwitchCont] = useState(false);
    // set Icon + text or only Icon
    const [iconText, setIconText] = useState(false);

    // enter widget name
    const handleChangeWidgetName = (event) => {
        if (event.target.value.length < 1) {
            setWidgetError('Please enter Widget Name');
            setWidgetNameReady(false);
        } else {
            setWidgetName(event.target.value);
            setWidgetError('');
            setWidgetNameReady(true);
        }
    };

    // widget title
    const handleChangeWidgetTitle = (event) => {
        if (event.target.value.length < 1) {
            setwidgetTitleError('Please enter Title');
            setWidgetTitleReady(false);
        } else {
            setwidgetTitle(event.target.value);
            setwidgetTitleError('');
            setWidgetTitleReady(true);
        }
    };

    // Cta text
    const handleChangeCtaText = (event) => {
        if (event.target.value.length < 1) {
            setCtaTextError('Please enter CTA Text');
            setCtaTextReady(false);
        } else {
            setCtaText(event.target.value);
            setCtaTextError('');
            setCtaTextReady(true);
        }
    };

    // cta link
    const handleChangeCtaLink = (event) => {
        if (event.target.value.length < 1) {
            setCtaLinkError('Please enter CTA Link');
            setCtaLinkReady(false);
        } else {
            setCtaLink(event.target.value);
            setCtaLinkError('');
            setCtaLinkReady(true);
        }
    };

    // Switch add CTA
    const handleSwitchChange = () => {
        if (mySwitchState === false) {
            setMySwitchState(true);
            // add for error
            setCtaTextReady(true);
            setCtaTextError('');
            setCtaLinkReady(true);
            setCtaLinkError('');
            setwidgetPosition(null);
            // swicth controller
            if (mySwitchCont === false) {
                setmySwitchCont(true);
            }
        } if (mySwitchState === true) {
            setMySwitchState(false);
            // add for error
            setCtaTextReady(false);
            setCtaTextError('');
            setCtaLinkReady(false);
            setCtaLinkError('');
            // swicth controller
            if (mySwitchCont === true) {
                setmySwitchCont(false);
            }
        }
    };

    // Icon + Text or Icon Only funcs
    const iconAndText = () => {
        if (iconText === true) {
            setIconText(false);

            if (mySwitchCont === false) {
                setMySwitchState(false);
            }
        }
    };

    const onlyIcon = () => {
        if (iconText === false) {
            setIconText(true);

            if (mySwitchCont === false) {
                setMySwitchState(true);
            }
        }
    };

    const submitForm = (e) => {
        e.preventDefault();
        //
        if (widgetNameReady === true && widgetTitleReady == true && ctaTextReady === true && ctaLinkReady === true) {
            // success form
            console.log(widgetName, widgetTitle, ctaText, ctaLink, widgetPosition, widgetBody, "success");
        } if (widgetNameReady === false) {
            setWidgetError('Please enter Widget Name');
        } if (widgetTitleReady === false) {
            setwidgetTitleError('Please enter Title');
        } if (ctaTextReady === false) {
            setCtaTextError('Please enter CTA Text');
        } if (ctaLinkReady === false) {
            setCtaLinkError('Please enter CTA Link');
        }

    };

    // MUI Meida query rulles
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    //

    return (
        <>
            <Box padding={isSmallScreen ? '20px 20px 20px 20px' : '20px 56px 20px 56px'}>
                <Breadcrumbs maxItems={4} aria-label="breadcrumb" fontSize={'14px'} lineHeight={'18px'}>
                    <Link underline="hover" href="#" color={'#0F62FE'}>
                        ACME LTD
                    </Link>
                    <Link underline="hover" href="home" color={'#0F62FE'}>
                        Home
                    </Link>
                    <Typography color="#161616">Create Widget</Typography>
                </Breadcrumbs>
            </Box>
            <Box display="flex" height="calc(100% - 70px)" justifyContent="center" alignItems="center" padding={isSmallScreen ? '0px 20px 0px 20px' : '0px 0px 0px 0px'}>
                <Box width={'100%'} maxWidth='945px' color="#161616">
                    <Box sx={{
                        '--Grid-borderWidth': '1px',
                        border: 'var(--Grid-borderWidth) solid',
                        borderColor: 'divider',
                        p: '37px 28px 28px 28px',
                        borderRadius: '12px',
                        mb: 4,
                    }}>
                        <Grid container display="flex" alignItems="center">
                            <Grid item xs={12} sm={6} paddingBottom={isSmallScreen ? '16px' : '0px'}>
                                <Typography sx={{ mb: 3 }} component="h1" variant="h5" fontWeight="medium" fontSize={'18px'} lineHeight={'21px'}>
                                    Create Widget
                                </Typography>
                                <Box className='createWidgetFrom' component="form" onSubmit={submitForm} noValidate>
                                    <Typography color="#525252" fontSize="12px" lineHeight="16px" sx={{ mt: 4, mb: 1 }}>
                                        Widget Name
                                    </Typography>
                                    <TextField
                                        onChange={handleChangeWidgetName}
                                        error={!!widgetNameError}
                                        helperText={widgetNameError}
                                        fullWidth
                                        id="filled-basic"
                                        variant="filled"
                                        placeholder='H-birthday-2023-promo'
                                    />
                                    <ButtonGroup variant="outlined" size="small" aria-label="small button group" sx={{ mt: 2, mb: 2 }}>
                                        <Button onClick={iconAndText} variant={iconText ? 'outlined' : 'contained'} sx={{ backgroundColor: iconText ? '' : '#161616', color: iconText ? '#161616' : '#fff', padding: '6px 32px 6px 16px', fontSize: '14px', lineHeight: '18px', borderColor: '#161616', textTransform: 'inherit', '&:hover': { borderColor: '#161616', backgroundColor: iconText ? '' : '#161616' } }}>Icon + text</Button>
                                        <Button onClick={onlyIcon} variant={iconText ? 'contained' : 'outlined'} sx={{ backgroundColor: iconText ? '#161616' : '', color: iconText ? '#fff' : '#161616', padding: '6px 32px 6px 16px', fontSize: '14px', lineHeight: '18px', borderColor: '#161616', textTransform: 'inherit', '&:hover': { borderColor: '#161616', backgroundColor: iconText ? '#161616' : '' } }}>Icon only</Button>
                                    </ButtonGroup>
                                    <Box sx={{
                                        '--Grid-borderWidth': '1px',
                                        border: 'var(--Grid-borderWidth) solid',
                                        borderColor: 'divider',
                                        p: '16px 16px 24px 16px',
                                        borderRadius: '12px',
                                        boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.05)'
                                    }}>
                                        <Typography fontSize="13px" variant='h5' component='h5' lineHeight="16px" color='#161616' fontWeight='500' sx={{ mb: '20px' }}>
                                            Widget configuration
                                        </Typography>
                                        <Grid container display="flex" alignItems="center" sx={{ alignItems: 'baseline' }}>
                                            <Grid item xs={3} >
                                                <Typography color="#525252" fontSize="12px" lineHeight="16px" sx={{ mb: 1 }}>
                                                    Icon
                                                </Typography>
                                                <TextField
                                                    className='iconInput'
                                                    id="filled-select-currency"
                                                    select
                                                    fontSize='14px'
                                                    fullWidth
                                                    defaultValue='menu'
                                                    variant="filled"
                                                    onChange={(event) => setIcon(event.target.value)}
                                                    SelectProps={{
                                                        IconComponent: ExpandMoreIcon,
                                                    }}
                                                >
                                                    <MenuItem key='0' value='menu'>
                                                        menu
                                                    </MenuItem>
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={9} sx={{ pl: 2 }}>
                                                <Typography color="#525252" fontSize="12px" lineHeight="16px" sx={{ mb: 1 }}>
                                                    Title
                                                </Typography>
                                                <TextField
                                                    className='widggetTitleError'
                                                    disabled={iconText}
                                                    onChange={handleChangeWidgetTitle}
                                                    error={!!widgetTitleError}
                                                    helperText={widgetTitleError}
                                                    fullWidth
                                                    id="filled-basic2"
                                                    variant="filled"
                                                    placeholder='Happy Birthday!'
                                                />
                                            </Grid>
                                        </Grid>
                                        <Typography color="#525252" fontSize="12px" lineHeight="16px" sx={{ mb: 1, mt: 2 }}>
                                            Body
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            disabled={iconText}
                                            className='createWidgetTextArea'
                                            id="outlined-multiline-static"
                                            onChange={(event) => setwidgetBody(event.target.value)}
                                            multiline
                                            rows={3}
                                            defaultValue="To make your birthday even more special, we are offering you a promotion as a gift."
                                            variant="filled"
                                            sx={{ resize: 'both', overflowY: 'auto', overflowX: 'hidden', maxWidth: '100%' }}
                                        />
                                        <Typography color="#525252" fontSize="12px" lineHeight="16px" sx={{ mb: 1, mt: 2 }}>
                                            Add CTA button
                                        </Typography>
                                        <MUISwitch onChange={handleSwitchChange} defaultChecked />
                                        <Grid container display="flex" alignItems="center" sx={{ mt: 2, alignItems: 'baseline' }}>
                                            <Grid item xs={4} >
                                                <Typography color={mySwitchState ? '#C6C6C6' : '#525252'} fontSize="12px" lineHeight="16px" sx={{ mb: 1 }}>
                                                    CTA Text
                                                </Typography>
                                                <TextField
                                                    className='ctaTextInput'
                                                    disabled={mySwitchState}
                                                    onChange={handleChangeCtaText}
                                                    error={!!ctaTextError}
                                                    helperText={ctaTextError}
                                                    fullWidth
                                                    id="filled-basic2"
                                                    variant="filled"
                                                    placeholder='Cta Text'
                                                />

                                            </Grid>
                                            <Grid item xs={8} sx={{ pl: 2 }}>
                                                <Typography color={mySwitchState ? '#C6C6C6' : '#525252'} fontSize="12px" lineHeight="16px" sx={{ mb: 1 }}>
                                                    CTA Text
                                                </Typography>
                                                <TextField
                                                    className='widggetTitleError'
                                                    disabled={mySwitchState}
                                                    onChange={handleChangeCtaLink}
                                                    error={!!ctaLinkError}
                                                    helperText={ctaLinkError}
                                                    fullWidth
                                                    id="filled-basic2"
                                                    variant="filled"
                                                    placeholder='/promotions'
                                                />
                                            </Grid>
                                        </Grid>
                                        <Typography color={mySwitchState ? '#C6C6C6' : '#525252'} fontSize="12px" lineHeight="16px" sx={{ mb: 1, mt: '20px' }}>
                                            Widget Position
                                        </Typography>
                                        <TextField
                                            id="filled-select-currency"
                                            className='widgetPositionInput'
                                            disabled={mySwitchState}
                                            select
                                            fullWidth
                                            defaultValue="top-center"
                                            variant="filled"
                                            size='small'
                                            onChange={(event) => setwidgetPosition(event.target.value)}
                                            SelectProps={{
                                                IconComponent: ExpandMoreIcon,
                                            }}
                                        >
                                            <MenuItem value='top-center'>Top Center</MenuItem>
                                            <MenuItem value='center-center'>Center Center</MenuItem>
                                            <MenuItem value='top-left'>Top Left</MenuItem>
                                            <MenuItem value='top-right'>Top Right</MenuItem>
                                        </TextField>
                                    </Box>
                                    <Button
                                        type="submit"
                                        size="large"
                                        variant="contained"
                                        fontWeight="medium"
                                        sx={{ fontSize: '14px', lineHeight: '16px', mt: 3, pt: 2, pr: 8, pb: 2, pl: 2, borderRadius: 0, textTransform: 'inherit', background: '#0F62FE' }}
                                    >
                                        Create widget
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingBottom={isSmallScreen ? '16px' : '0px'}>
                                <Typography sx={{ mb: '40px' }} component="h3" variant="h3" fontWeight="medium" fontSize={isSmallScreen ? '20px' : '24px'} lineHeight={isSmallScreen ? '22px' : '18px'}>
                                    666
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>


                </Box>
            </Box>
        </>
    );
}

export default CreateWidget;
