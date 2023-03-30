"use client";
import { useState } from 'react';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react'


function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs(props) {

    // tabs status
    const [tabs, setTabs] = useState(true);
    // native tabs
    const [value, setValue] = React.useState(0);

    // select user form user local SVG
    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = handleFileLoad;
        reader.readAsText(file);
    }

    const handleFileLoad = (event) => {
        const svgContent = event.target.result;
        props.setEmojiState(svgContent);
        props.setIsSvgType(true);
    }

    // set manuel tabs. because MUI tabs has div in p element
    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) {
            setTabs(true);
        } else if (newValue === 1) {
            setTabs(false);
        }
    };

    // emojji
    function handleSelectEmoji(selectedEmoji) {
        props.setEmojiState(selectedEmoji.native);
        props.setIsSvgType(false);
    }

    return (
        <Box className='absolute bg-white emojiBox'
            sx={{
                minWidth: '390px',
                maxWidth: '390px',
                top: '53px',
                '--Grid-borderWidth': '1px',
                border: 'var(--Grid-borderWidth) solid',
                borderColor: 'divider',
                borderRadius: '8px',
                boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.05)'
            }}
        >
            <Box>
                <Tabs sx={{ minHeight: '42px' }} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab sx={{ minHeight: '42px', minWidth: '82px', borderBottom: 2, borderColor: 'divider', fontSize: '14px', lineHeight: '18px', fontWeight: 400, p: '11px 16px', textTransform: 'inherit' }} label="Custom" {...a11yProps(0)} />
                    <Tab sx={{ minHeight: '42px', minWidth: '70px', borderBottom: 2, borderColor: 'divider', fontSize: '14px', lineHeight: '18px', fontWeight: 400, p: '11px 16px', textTransform: 'inherit' }} label="Emoji" {...a11yProps(1)} />
                </Tabs>
            </Box>
            {tabs ?
                <Box p="18px 7px" value={value} index={0}>
                    <Button variant="outlined" component="label" sx={{ fontSize: '14px', lineHeight: '18px', paddingTop: '7px', paddingRight: '64px', paddingBottom: '7px', paddingLeft: '16px', color: '#0F62FE', borderColor: '#0F62FE', borderRadius: 0, textTransform: 'inherit', background: '#fff' }}>
                        Upload icon
                        <input hidden accept=".svg" type="file" onChange={handleFileSelect} />
                    </Button>
                </Box> :
                <Box p="18px 7px" className='react-input-emoji--button' value={value} index={1}>
                    <Picker data={data} onEmojiSelect={handleSelectEmoji} />
                </Box>
            }
        </Box>
    );
}