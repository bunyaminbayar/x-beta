"use client"; // this is a client component
import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/system';

export default function Alert_app(props) {

    const [alertVisible, setAlertVisible] = useState(false);

    const handleCloseAlert = () => {
        setAlertVisible(false);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleCloseAlert();
        }, 300000);


        // set the alert message based on the value of props.formsStatus
        if (props.formsStatus === "success") {
            setAlertVisible(true);
        } else if (props.formsStatus === "error") {
            setAlertVisible(true);
        }

        return () => clearTimeout(timer);
    }, [props.formsStatus]);

    return (
        <>
            <Slide direction="down" in={alertVisible} unmountOnExit>
                <Box className='absolute w-full text-center' sx={{ top: '24px' }}>
                    {props.formsStatus === 'success' ?
                        <Alert className='m-auto' color="info" icon={<CheckCircleIcon sx={{ color: '#198038', fontSize: '18px', mr: '4px' }} />} sx={{ fontSize: '14px', lineHeight: '18px', width: 'fit-content', fontWeight: 600, color: '#161616', background: '#DEFBE6', borderBottom: '1px solid #A6E0B7', borderLeft: '3px solid #198038', borderRadius: 0, }}>
                            Widget created successfully
                        </Alert>
                        :
                        <Alert className='m-auto' color="info" icon={<ErrorIcon sx={{ color: '#D32F2F', fontSize: '18px', mr: '4px' }} />} sx={{ fontSize: '14px', lineHeight: '18px', width: 'fit-content', fontWeight: 600, color: '#161616', background: '#ffebeb', borderBottom: '1px solid #ff8989', borderLeft: '3px solid #D32F2F', borderRadius: 0, }}>
                            Failed to create widget. please try again later !
                        </Alert>
                    }
                </Box>
            </Slide>
        </>
    )
}
