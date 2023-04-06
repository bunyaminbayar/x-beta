"use client"; // this is a client component 

import * as React from 'react';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import CloseIcon from '@mui/icons-material/Close';
// 
export default function NewWidget(props) {

    const svgPathStarter = `data:image/svg+xml;utf8,${encodeURIComponent(props.emoji)}`;

    return (
        <>
            <Box width={props.iconText ? 'fit-content' : '100%'} id={props.widgetName} sx={{
                '--Grid-borderWidth': '1px',
                border: 'var(--Grid-borderWidth) solid',
                borderColor: 'divider',
                borderRadius: '8px',
                margin: 'auto',
                minWidth: '54px',
                minHeight: '54px',
                boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.05)'
            }}>
                <Box padding="5px 10px">
                    <Grid container display="flex" alignItems="center">
                        <Grid item xs={props.iconText ? 12 : 2} pt={props.isSvgType && props.iconText ? '6px' : '0'} textAlign='center' alignItems="center">
                            {/** If emoji Svg or String. */}
                            {props.isSvgType ?
                                <object className='m-auto' height={props.iconText ? '28px' : '26px'} width={props.iconText ? '28px' : '26px'} data={svgPathStarter} />
                                :
                                <Typography fontWeight='600' color="#444950" fontSize={props.iconText ? '28px' : '24px'} lineHeight={props.iconText ? '40px' : '26px'}>
                                    {props.emoji}
                                </Typography>
                            }
                        </Grid>
                        <Grid display={props.iconText ? 'none' : 'block'} item xs={9}>
                            <Typography fontWeight='600' color="#444950" fontSize="14px" lineHeight="17px">
                                {props.widgetTitle}
                            </Typography>
                        </Grid>
                        <Grid display={props.iconText ? 'none' : 'block'} item xs={1}>
                            <Button sx={{ color: '#D1D0D2', minWidth: 'auto', '&:hover': { backgroundColor: '#00000000', color: '#525252' } }} variant="text">
                                <CloseIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box display={props.iconText ? 'none' : 'block'}>
                    <Divider />
                </Box>
                <Box display={props.iconText ? 'none' : 'block'} padding="14px" minHeight={'30px'}>
                    <Box fontWeight='400' color="#212529" fontSize="14px" lineHeight="21px">
                        <div dangerouslySetInnerHTML={{__html: props.widgetBody}} />
                    </Box>
                    <Link width="fit-content" display={props.mySwitchState ? 'none' : 'block'} sx={{ '&:hover': { textDecoration: 'none' } }} href={props.ctaLink}>
                        <Button sx={{ mt: 2, fontSize: '13px', lineHeight: '21px', background: '#0F63FE !important', minHeight: '28px', fontWeight: 600, p: '4px 8px', '&:hover': { background: '#2f78ff' } }} variant="contained">
                            {props.ctaText}
                        </Button>
                    </Link>
                </Box>
            </Box>
        </>
    );
}