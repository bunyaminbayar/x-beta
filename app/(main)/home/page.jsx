"use client"; // this is a client component 

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles(() => ({
    code: {
        whiteSpace: 'pre-line',
        lineHeight: 1.5,
        counterReset: 'linenumber',
        background: '#f4f4f4',
        padding: '16px',
        fontSize: '12px',
        lineHeight: '16px'
    },
    line: {
        counterIncrement: 'linenumber',
        '&:before': {
            content: 'counter(linenumber)',
            marginRight: '16px',
            color: '#161616',
            display: 'inline-block',
            textAlign: 'right',
        },
    },
}));


function Home() {

    // MUI Meida query rulles
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    //
    const classes = useStyles();

    const handleCopyClick = () => {
        navigator.clipboard.writeText(`
<script type="text/javascript" src="https://x.com/lib/0.1.0/x.js"></script>
<script>
    X.show({
    app_id: "camjg6xz", // merchant id
    onWidgetLoad: function () {
        console.log("Widget loaded");
    }
    });
</script>
      `);
    };

    return (
        <>
            <Box padding={isSmallScreen ? '20px 20px 20px 20px' : '20px 56px 20px 56px'}>
                <Breadcrumbs maxItems={4} aria-label="breadcrumb" fontSize={'14px'} lineHeight={'18px'}>
                    <Link underline="hover" href="#" color={'#0F62FE'}>
                        ACME LTD
                    </Link>
                    <Typography color="#161616">Home </Typography>
                </Breadcrumbs>
            </Box>
            <Box display="flex" height="calc(100% - 70px)" justifyContent="center" alignItems="center" padding={isSmallScreen ? '0px 20px 0px 20px' : '0px 0px 0px 0px'}>
                <Box width={'100%'} maxWidth='640px' color="#161616">
                    <Typography sx={{ mb: '40px' }} component="h1" variant="h5" fontWeight="medium" fontSize={isSmallScreen ? '20px' : '24px'} lineHeight={isSmallScreen ? '22px' : '18px'}>
                        Welcome to
                    </Typography>
                    <Box sx={{
                        '--Grid-borderWidth': '1px',
                        border: 'var(--Grid-borderWidth) solid',
                        borderColor: 'divider',
                        p: '20px',
                    }}>
                        <Typography component="h2" variant="h2" fontWeight="medium" fontSize={isSmallScreen ? '14px' : '15px'} lineHeight={isSmallScreen ? '18px' : '19px'}>
                            <Button className='closeMenuIcon' sx={{ paddingTop: '5px', paddingRight: '5px', paddingBottom: '5px', paddingLeft: '5px', mr: 2, minWidth: 'auto', background: '#161616', zIndex: -1 }} variant="contained" startIcon={<MenuOpenIcon />}></Button>
                            Install ProductX on your site
                        </Typography>
                        <Typography sx={{ mb: '10px', mt: 3 }} component="p" variant="div" fontWeight="medium" fontSize={'14px'} lineHeight={'18px'} >
                            Paste this code into before <Typography color='#DA1E28' component="span" variant="span">&lt;/body&gt;</Typography>  of every page where you want to show widgets.
                        </Typography>
                        <Typography position={'relative'} variant="body1" component="pre" className={classes.code}>
                            <Button variant="text" onClick={handleCopyClick} sx={{ right: '8px', top: '8px', color: '#161616', position: 'absolute', minWidth: 0, padding: '9px' }}>
                                <svg height={'14px'} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></svg>
                            </Button>
                            <div className={classes.line}>{'<script type="text/javascript" src="https://x.com/lib/0.1.0/x.js"></script>'} </div>
                            <div className={classes.line}>{'<script>'}</div>
                            <div className={classes.line}>&nbsp;&nbsp;{'X.show({'}</div>
                            <div className={classes.line}>&nbsp;&nbsp;&nbsp;&nbsp;{'app_id: "camjg6xz", // merchant id'}</div>
                            <div className={classes.line}>&nbsp;&nbsp;&nbsp;&nbsp;{'onWidgetLoad: function () {'}</div>
                            <div className={classes.line}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'console.log("Widget loaded");'}</div>
                            <div className={classes.line}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                            <div className={classes.line}>&nbsp;&nbsp;{'});'}</div>
                            <div className={classes.line}>{'</script>'}</div>
                        </Typography>
                        <Grid container display="flex" alignItems="center" mt={2} mb={1}>
                            <Grid item xs={12} sm={5} paddingBottom={isSmallScreen ? '16px' : '0px'}>
                                <Button
                                    type="submit"
                                    size="large"
                                    variant="outlined"
                                    fontWeight="medium"
                                    style={{ fontSize: '14px', lineHeight: '18px', paddingTop: '7px', paddingRight: '64px', paddingBottom: '7px', paddingLeft: '16px', color: '#0F62FE', borderColor: '#0F62FE', borderRadius: 0, textTransform: 'inherit', background: '#fff' }}
                                >
                                    Verify installation
                                </Button>
                            </Grid>
                            <Grid item xs={8} sm={4}>
                                <Typography component="p" variant="p" fontWeight="400" fontSize={'14px'} lineHeight={'18px'}>
                                    Domains: mywebsite.com &nbsp;&nbsp;
                                    <span>
                                        +
                                    </span>
                                </Typography>
                            </Grid>
                            <Grid item xs={4} sm={3} textAlign="right">
                                <Link href="#" sx={{ textDecoration: 'auto' }} fontSize="14px" lineHeight={'18px'} variant="body1">
                                    {"See docs ↗"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{
                        '--Grid-borderWidth': '1px',
                        border: 'var(--Grid-borderWidth) solid',
                        borderColor: 'divider',
                        p: '20px',
                        mt: 2
                    }}>
                        <Typography display={'flex'} component="p" variant="p" fontWeight="500" fontSize={'15px'} lineHeight={'19px'}>
                            <AddToHomeScreenIcon className='trackWebSiteIcon' />
                            Track your website events
                        </Typography>
                        <Grid textAlign={'center'} pt={2}>
                            <Button
                            variant="outlined"
                            style={{ fontSize: '15px', lineHeight: '16px', paddingTop: '7px', paddingRight: '10px', paddingBottom: '7px', paddingLeft: '10px', color: '#0F62FE', borderColor: '#0F62FE', borderRadius: '7px', textTransform: 'inherit', background: '#fff' }}
                            >
                                Connect with
                                <svg width="97px" height="15px" viewBox="0 0 97 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.1049 5.59218V0.90686H5.25591L0.406921 5.59218V10.2775H5.25591V14.9628H10.1049L14.9539 10.2775L19.8029 5.59218V0.90686H14.9539L10.1049 5.59218Z" fill="#3B00E9" />
                                    <path d="M30.3493 11.7979L28.436 4.73804H24.7262L28.0693 14.2541H32.6293L35.9723 4.73804H32.2811L30.3493 11.7979Z" fill="#161616" />
                                    <path d="M45.045 5.84046C44.575 5.41911 44.0206 5.09739 43.3835 4.87365C42.7465 4.65157 42.0536 4.54053 41.3066 4.54053C40.5595 4.54053 39.8867 4.6483 39.2478 4.86551C38.6106 5.08272 38.0529 5.40117 37.5763 5.82247C37.0996 6.24382 36.7194 6.7615 36.4355 7.37554C36.1515 7.98958 36.0095 8.68204 36.0095 9.45119C36.0095 10.2204 36.1481 10.9683 36.4253 11.5824C36.7025 12.1964 37.0794 12.7141 37.556 13.1355C38.0326 13.5568 38.5904 13.8736 39.2276 14.0843C39.8647 14.2949 40.5579 14.3995 41.3049 14.3995C42.0519 14.3995 42.7837 14.2933 43.4207 14.0843C44.0578 13.8736 44.6122 13.56 45.0823 13.1453C45.5519 12.7305 45.9186 12.2128 46.184 11.5922C46.4478 10.9716 46.5796 10.2596 46.5796 9.45285C46.5796 8.69511 46.4411 8.00756 46.1637 7.39513C45.8867 6.78109 45.513 6.26342 45.0434 5.84207L45.045 5.84046ZM43.1417 10.1828C43.0776 10.418 42.9714 10.6287 42.8225 10.8148C42.6737 11.001 42.4745 11.1513 42.2243 11.2656C41.9722 11.3799 41.6662 11.4371 41.3066 11.4371C40.9465 11.4371 40.6236 11.3799 40.3785 11.2656C40.1335 11.1513 39.934 11.0043 39.7802 10.823C39.6264 10.6417 39.5165 10.4343 39.4523 10.2008C39.3881 9.96564 39.356 9.72231 39.356 9.46918C39.356 9.26503 39.3881 9.04783 39.4523 8.81921C39.5165 8.59055 39.623 8.38319 39.7718 8.19699C39.9205 8.01083 40.1199 7.8508 40.3701 7.7185C40.622 7.58621 40.9328 7.51928 41.3066 7.51928C41.6799 7.51928 41.9759 7.58621 42.2343 7.7185C42.491 7.8508 42.6907 8.01409 42.8325 8.20517C42.9747 8.39786 43.0776 8.60854 43.1417 8.83715C43.2062 9.06581 43.238 9.27649 43.238 9.46918C43.238 9.70924 43.2062 9.94766 43.1417 10.1828Z" fill="#161616" />
                                    <path d="M56.2708 5.84046C55.8008 5.41911 55.2464 5.09739 54.6093 4.87365C53.9722 4.65157 53.2794 4.54053 52.5323 4.54053C51.7853 4.54053 51.1127 4.6483 50.4735 4.86551C49.8365 5.08272 49.2788 5.40117 48.8021 5.82247C48.3255 6.24382 47.9451 6.7615 47.6611 7.37554C47.3775 7.98958 47.2353 8.68204 47.2353 9.45119C47.2353 10.2204 47.3738 10.9683 47.6512 11.5824C47.9282 12.1964 48.3052 12.7141 48.7819 13.1355C49.2585 13.5568 49.8162 13.8736 50.4533 14.0843C51.0904 14.2949 51.7836 14.3995 52.5307 14.3995C53.2777 14.3995 54.0094 14.2933 54.6465 14.0843C55.2836 13.8736 55.838 13.56 56.308 13.1453C56.7776 12.7305 57.1448 12.2128 57.4098 11.5922C57.6735 10.9716 57.8054 10.2596 57.8054 9.45285C57.8054 8.69511 57.6669 8.00756 57.3895 7.39513C57.1125 6.78109 56.7388 6.26342 56.2692 5.84207L56.2708 5.84046ZM54.3679 10.1828C54.3034 10.418 54.1971 10.6287 54.0483 10.8148C53.8995 11.001 53.7002 11.1513 53.4501 11.2656C53.1983 11.3799 52.8924 11.4371 52.5323 11.4371C52.1722 11.4371 51.8494 11.3799 51.6042 11.2656C51.3595 11.1513 51.1598 11.0043 51.006 10.823C50.8522 10.6417 50.7423 10.4343 50.6782 10.2008C50.6141 9.96564 50.5819 9.72231 50.5819 9.46918C50.5819 9.26503 50.6141 9.04783 50.6782 8.81921C50.7423 8.59055 50.8489 8.38319 50.9977 8.19699C51.1462 8.01083 51.3458 7.8508 51.596 7.7185C51.8477 7.58621 52.1586 7.51928 52.5323 7.51928C52.9056 7.51928 53.2016 7.58621 53.46 7.7185C53.7172 7.8508 53.9164 8.01409 54.0582 8.20517C54.2004 8.39786 54.3034 8.60854 54.3679 8.83715C54.432 9.06581 54.4642 9.27649 54.4642 9.46918C54.4642 9.70924 54.432 9.94766 54.3679 10.1828Z" fill="#161616" />
                                    <path d="M64.821 4.5405C64.5895 4.5405 64.3547 4.54864 64.1165 4.56663C63.878 4.58457 63.6432 4.63029 63.4117 4.70214C63.1802 4.77403 62.9487 4.88342 62.7151 5.02712C62.4836 5.17087 62.2707 5.37662 62.078 5.64116L61.8465 4.73807H58.8517V14.2541H62.2723V9.91989C62.2723 9.4381 62.3467 9.05272 62.4939 8.76366C62.6427 8.4746 62.842 8.24921 63.0921 8.08591C63.3439 7.92423 63.6329 7.81319 63.9607 7.75113C64.2889 7.69069 64.6337 7.6613 64.995 7.6613H65.6528V4.57316C65.6003 4.56171 65.492 4.55191 65.3249 4.54538C65.1575 4.53884 64.9901 4.53723 64.8227 4.53723L64.821 4.5405Z" fill="#161616" />
                                    <path d="M77.4784 4.738H73.6523L71.5261 8.0973H70.5017V1.47021H67.0823V14.254H70.5017V10.9503H71.5852L73.7875 14.254H77.7285L74.3282 9.27147L77.4784 4.738Z" fill="#161616" />
                                    <path d="M88.0571 9.82184C88.0757 9.63568 88.0857 9.42828 88.0857 9.19801C88.0857 8.52357 87.9724 7.89154 87.7475 7.30202C87.523 6.71245 87.1898 6.20619 86.752 5.78488C86.289 5.36353 85.7772 5.04996 85.2158 4.84586C84.6548 4.64172 83.9751 4.53882 83.1777 4.53882C82.3798 4.53882 81.7191 4.64986 81.1189 4.87199C80.5207 5.09568 79.9952 5.40434 79.5438 5.80121C79.0539 6.24703 78.6752 6.77942 78.4032 7.39834C78.1324 8.01891 77.9972 8.70154 77.9972 9.44787C77.9972 10.1942 78.1225 10.9258 78.3742 11.5333C78.626 12.1408 78.9757 12.6585 79.4272 13.0864C79.8786 13.5143 80.4227 13.8393 81.0597 14.0613C81.6972 14.2835 82.4087 14.3945 83.1946 14.3945C83.7606 14.3945 84.3083 14.3308 84.8371 14.2051C85.3646 14.0793 85.8479 13.8768 86.2857 13.6008C86.7235 13.3248 87.0968 12.9786 87.4064 12.5622C87.7157 12.1474 87.9406 11.6378 88.0824 11.0369H84.7391C84.675 11.2051 84.5076 11.3651 84.2372 11.5154C83.9669 11.6656 83.6324 11.7359 83.2335 11.7228C82.6146 11.7113 82.1602 11.5758 81.8713 11.3161C81.5823 11.0581 81.4165 10.7543 81.3793 10.4049H87.9488C87.9997 10.2007 88.0369 10.0048 88.0555 9.81858L88.0571 9.82184ZM81.4384 8.33249C81.4384 8.2002 81.474 8.05976 81.5451 7.90787C81.6158 7.75764 81.7191 7.61882 81.8543 7.49306C81.9895 7.36734 82.1702 7.26444 82.3951 7.18606C82.62 7.10767 82.8817 7.06848 83.1777 7.06848C83.4732 7.06848 83.7473 7.10767 83.9602 7.18606C84.1731 7.26444 84.3488 7.36734 84.4906 7.49306C84.6329 7.61882 84.7325 7.75764 84.79 7.90787C84.8474 8.05811 84.8764 8.2002 84.8764 8.33249H81.4368H81.4384Z" fill="#161616" />
                                    <path d="M95.9889 4.54867C95.8214 4.54214 95.654 4.54053 95.487 4.54053C95.2551 4.54053 95.0203 4.54867 94.7821 4.56665C94.5436 4.5846 94.3088 4.63032 94.0773 4.70217C93.8458 4.77406 93.6142 4.88345 93.3811 5.02715C93.1492 5.1709 92.9362 5.37665 92.7436 5.64124L92.5121 4.73814H89.5173V14.2541H92.9379V9.91992C92.9379 9.43813 93.0123 9.05275 93.1595 8.76369C93.3083 8.47463 93.5076 8.24924 93.7577 8.08594C94.0095 7.92426 94.2984 7.81322 94.6267 7.75116C94.9545 7.69072 95.2993 7.66133 95.661 7.66133H96.3184V4.57319C96.2659 4.56174 96.158 4.55194 95.9905 4.54541L95.9889 4.54867Z" fill="#161616" />
                                </svg>
                            </Button>
                        </Grid>
                    </Box>
                    <Grid textAlign={'right'} pt={2}>
                    <Button
                    variant="outlined"
                    style={{ fontSize: '14px', lineHeight: '18px', paddingTop: '7px', paddingRight: '64px', paddingBottom: '7px', paddingLeft: '16px', color: '#8D8D8D', borderColor: '#8D8D8D', borderRadius: 0, textTransform: 'inherit', background: '#fff' }}
                    >
                        Skip installation
                    </Button>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}

export default Home;
