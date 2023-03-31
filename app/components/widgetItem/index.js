"use client"; // this is a client component 

import * as React from 'react';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/typography';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import CloseIcon from '@mui/icons-material/Close';
// 
export default function WidgetItem(props) {

    const svgPathStarter = `data:image/svg+xml;utf8,${encodeURIComponent(props.emoji)}`;

    return (
        <>
            <Box width={props.widgetTitle ? '100%' : 'fit-content'} id={props.widgetName} sx={{
                '--Grid-borderWidth': '1px',
                border: 'var(--Grid-borderWidth) solid',
                borderColor: 'divider',
                borderRadius: '6px',
                margin: 'auto',
                minWidth: '54px',
                minHeight: '54px',
                boxShadow: '0px 4px 10px rgba(33, 37, 41, 0.15)'
            }}>
                {props.widgetTitle ?
                    <Box padding="5px 10px">
                        <Grid container display="flex" alignItems="center">
                            <Grid item xs={1} textAlign='center'>
                                <Typography fontWeight='600' color="#444950" fontSize="24px" lineHeight="26px">
                                    {/** If emoji Svg or String. */}
                                    {props.emoji.length > 3 ?
                                        <object className='overflow-hidden m-auto' height='26px' width="26px" margin='auto' data={svgPathStarter} />
                                        : props.emoji}
                                </Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography fontWeight='600'pl={1} color="#444950" fontSize="14px" lineHeight="17px">
                                    {props.widgetTitle}
                                </Typography>
                            </Grid>
                            <Grid item xs={1} textAlign='right'>
                                <Button sx={{ color: '#D1D0D2', minWidth: 'auto', '&:hover': { backgroundColor: '#00000000', color: '#525252' } }} variant="text">
                                    <CloseIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    :
                    <Typography pt='12px' fontWeight='600' color="#444950" fontSize="28px" lineHeight="28px" textAlign="center">
                        {/** If emoji Svg or String. */}
                        {props.emoji.length > 3 ?
                            <object className='overflow-hidden m-auto' height='28px' width="28px" data={svgPathStarter} />
                            : props.emoji}
                    </Typography>
                }

                <Box display={props.widgetBody ? 'block' : 'none'}>
                    <Divider />
                    <Box padding="14px">
                        <Typography fontWeight='400' color="#212529" fontSize="14px" lineHeight="21px">
                            {props.widgetBody}
                        </Typography>
                        <Link width="fit-content" display={props.ctaText ? 'block' : 'none'} sx={{ '&:hover': { textDecoration: 'none' } }} href={props.ctaLink}>
                            <Button sx={{ mt: 2, fontSize: '13px', lineHeight: '21px', background: '#0F63FE !important', minHeight: '28px', fontWeight: 600, p: '4px 8px', '&:hover': { background: '#2f78ff' } }} variant="contained">
                                {props.ctaText}
                            </Button>
                        </Link>
                    </Box>
                </Box>

            </Box>
        </>
    );
}