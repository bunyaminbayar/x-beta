"use client"; // this is a client component 

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/typography';
import { Button } from '@mui/material';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CircleIcon from '@mui/icons-material/Circle';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import WidgetItem from '../widgetItem';

// 
export default function ListWidgets(props) {

    // MUI Meida query rulles
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Box margin={isSmallScreen ? '0 0 16px 0' : '0 50px 16px 50px'}>
                <Box
                    sx={{
                        '--Grid-borderWidth': '1px',
                        border: 'var(--Grid-borderWidth) solid',
                        borderColor: 'divider',
                        borderRadius: '8px',
                        margin: 'auto',
                        p: '10px 16px 20px 16px'
                    }}>
                    <DragHandleIcon sx={{ color: 'rgba(0, 0, 0, 0.19)', mr: '13px' }} />
                    <Typography sx={{ fontSize: '15px', lineHeight: '21px', fontWeight: '600', display: 'contents' }} component='h1' variant='h1'>
                        {props.widgetName}
                        <Typography sx={{ fontStyle: 'italic', fontWeight: 500 }} variant='span'> {props.widgetCode}</Typography>
                    </Typography>
                    <Grid mt={2} container display="flex" alignItems="center">
                        <Grid item xs={12} md={5} textAlign='left' className={props.widgetStatus === 'Running' ? 'running' : props.widgetStatus === 'Paused' ? 'paused' : props.widgetStatus === 'Draft' ? 'draft' : null} >
                            <Box sx={{ fontSize: '13px', lineHeight: '15px', border: '1px solid #dadada', color: '#3F3F3F', height: '25px', display: 'flex', alignItems: 'center', borderRadius: '2rem', width: 'fit-content', padding: '0 13px 0 8px' }} variant="outlined"  >
                                <CircleIcon className='mr-1 iconSvg' sx={{ fontSize: '8px' }} />
                                {props.widgetStatus}
                            </Box>
                            <Box mt={1} className="workflows" sx={{ fontSize: '13px', lineHeight: '15px', border: '1px solid #dadada', cursor: 'pointer', color: '#3F3F3F', height: '25px', display: 'flex', alignItems: 'center', borderRadius: '2rem', width: 'fit-content', padding: '0 13px 0 8px' }} variant="outlined"  >
                                <FlashOnIcon className='mr-1' sx={{ color: '#c2c2c2 !important', fontSize: '14px' }} />{props.workflows} associated workflows {props.widgetStatus === 'Draft' ? null : "↗"}
                            </Box>
                            {props.widgetStatus === 'Draft' ? null :
                                <Box>
                                    <Box mt={1} sx={{ fontSize: '13px', lineHeight: '15px', border: '1px solid #dadada', cursor: 'pointer', color: '#3F3F3F', height: '25px', display: 'flex', alignItems: 'center', borderRadius: '2rem', width: 'fit-content', padding: ' 0 13px 0 8px' }} variant="outlined"  >
                                        <svg className='mr-1' width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0945 4.55244L5.6875 4.0625V1.21875C5.6875 0.546 5.1415 0 4.46875 0C3.796 0 3.25 0.546 3.25 1.21875V7.3125H2.4375V5.6875H2.03125C1.3585 5.6875 0.8125 6.2335 0.8125 6.90625V8.39556C0.8125 9.27469 1.09769 10.1302 1.625 10.8331L3.25 13H10.5625L12.1599 7.67488C12.597 6.21725 11.6066 4.71981 10.0945 4.55244ZM6.5 10.5625H5.6875V6.5H6.5V10.5625ZM8.9375 10.5625H8.125V6.5H8.9375V10.5625Z" fill="#C2C2C2" />
                                        </svg> CTA click rate<Typography color={props.ctaClick < 50 ? '#F74B3B' : '#3F3F3F'} ml={'2px'} variant='span' component='span'>{props.ctaClick}%</Typography>
                                    </Box>
                                    <Box mt={1} sx={{ fontSize: '13px', lineHeight: '15px', border: '1px solid #dadada', color: '#3F3F3F', cursor: 'pointer', height: '25px', display: 'flex', alignItems: 'center', borderRadius: '2rem', width: 'fit-content', padding: '0 13px 0 8px' }} variant="outlined"  >
                                        <RemoveRedEyeIcon className='mr-1' sx={{ color: '#c2c2c2 !important', fontSize: '14px' }} />{props.views}K views
                                    </Box>
                                </Box>
                            }
                            <Button sx={{ fontSize: '13px', lineHeight: '21px', fontWeight: '600', color: '#4e4e4e', background: '#ededed !important', textTransform: 'inherit', p: '4px 45px', boxShadow: 'none', mt: 1, '&:hover': { background: '#ededed' } }} size="small">
                                View details
                            </Button>
                        </Grid>
                        <Grid p={isSmallScreen ? '24px 0 0 0' : '0 22px 0 20px'} item xs={12} md={7}>
                            <WidgetItem widgetName={props.widgetName} emoji={props.emoji} widgetTitle={props.widgetTitle} widgetBody={props.widgetBody} ctaText={props.ctaText} ctaLink={props.ctaLink} mySwitchState={props.mySwitchState} iconText={props.iconText} isSvgType={props.isSvgType} />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}