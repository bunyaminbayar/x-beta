"use client"; // this is a client component 

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListWidgets from './../../components/listWidgets'

function ListWidget() {

    // MUI Meida query rulles
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    var widgetData = [
        { "id": 0, "widgetName": "H-birthday-2023-promo", "widgetCode": "<caf025b6>", "widgetTitle": "Happy Birthday!", "ctaText": "Claim ↗", "ctaLink": "/login", "widgetPosition": "Top Center", "widgetBody": "To make your birthday even more special, we are offering you a promotion as a gift.", "emoji": "🎁", "widgetStatus": "Running", "workflows": 4, "ctaClick": 5, "views": 1.8 },
        { "id": 1, "widgetName": "March2023-VIP", "widgetCode": "<dbf9c8f7>", "widgetTitle": "You have a new gift!", "widgetBody": "You just won $500 promotion. Click get offer and add $500 to your balance", "emoji": "💝", "widgetStatus": "Draft", "workflows": 0, "ctaClick": 5, "views": 1.4 },
        { "id": 2, "widgetName": "Promo-all-customers", "widgetCode": "<309273c2>", "widgetTitle": "You have a new gift!", "widgetBody": "<p><strong>bold </strong><em>italik </em><u>under line</u></p>\n<pre><code><a href='#'>Link #</a></code></pre>", "emoji": "<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 48 48\" width=\"48px\" height=\"48px\"><path fill=\"#FFC107\" d=\"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z\"/><path fill=\"#FF3D00\" d=\"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z\"/><path fill=\"#4CAF50\" d=\"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z\"/><path fill=\"#1976D2\" d=\"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z\"/></svg>", "widgetStatus": "Paused", "workflows": 4, "ctaClick": 80, "widgetStatus": "Paused", "workflows": 4, "ctaClick": 85, "views": 1.4 },
        { "id": 3, "widgetName": "Promo-all-customers", "widgetCode": "<309273c2>", "emoji": "😁", "widgetStatus": "Draft", "workflows": 6, "ctaClick": 55, "views": 2.4 },
        { "id": 4, "widgetName": "Promo-all-customers", "widgetCode": "<309273c2>", "emoji": "<svg width=\"25\" height=\"25\" viewBox=\"0 0 25 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_37_164259)\">\n<path d=\"M22.4863 18.2292C21.94 17.5781 20.2907 16.7969 20.2907 16.7969L19.249 17.513L19.3575 18.9453L22.0702 19.0104L22.4863 18.2292Z\" fill=\"#EAD8C5\"/>\n<path d=\"M17.708 0.520752C15.436 0.520752 14.1667 2.36961 13.5413 3.71496C12.916 2.36961 11.6467 0.520752 9.37467 0.520752C7.93882 0.520752 6.77051 1.68906 6.77051 3.12492C6.77051 4.56077 7.93882 5.72909 9.37467 5.72909H13.5413H17.708C19.1439 5.72909 20.3122 4.56077 20.3122 3.12492C20.3122 1.68906 19.1439 0.520752 17.708 0.520752ZM9.37467 4.68742C8.51306 4.68742 7.81217 3.98653 7.81217 3.12492C7.81217 2.2633 8.51306 1.56242 9.37467 1.56242C11.3563 1.56242 12.4051 3.60888 12.8201 4.68742H9.37467ZM17.708 4.68742H14.2626C14.6776 3.60888 15.7264 1.56242 17.708 1.56242C18.5696 1.56242 19.2705 2.2633 19.2705 3.12492C19.2705 3.98653 18.5696 4.68742 17.708 4.68742Z\" fill=\"#D6BA45\"/>\n<path d=\"M21.3542 18.2292H5.20833C4.92068 18.2292 4.6875 17.996 4.6875 17.7083V8.33333C4.6875 8.04568 4.92068 7.8125 5.20833 7.8125H21.875C22.1626 7.8125 22.3958 8.04568 22.3958 8.33333V17.1875C22.3958 17.7628 21.9295 18.2292 21.3542 18.2292Z\" fill=\"#C64B4B\"/>\n<path d=\"M23.4368 8.85417H3.64518C3.06989 8.85417 2.60352 8.3878 2.60352 7.8125V5.72917C2.60352 5.15387 3.06989 4.6875 3.64518 4.6875H23.4368C24.0121 4.6875 24.4785 5.15387 24.4785 5.72917V7.8125C24.4785 8.3878 24.0121 8.85417 23.4368 8.85417Z\" fill=\"#E86C60\"/>\n<path d=\"M16.1458 4.6875H10.9375V8.85417H16.1458V4.6875Z\" fill=\"#EFD358\"/>\n<path d=\"M16.1458 8.854H10.9375V18.229H16.1458V8.854Z\" fill=\"#D6BA45\"/>\n<path d=\"M22.4861 18.2291H8.85384C8.27854 18.2291 7.81217 17.7627 7.81217 17.1874C7.81217 16.6121 8.27854 16.1458 8.85384 16.1458H13.453C14.299 16.1458 15.0573 15.5123 15.1016 14.6675C15.1489 13.7664 14.4324 13.0208 13.5413 13.0208H0.520508V20.5619L9.08781 24.1335C10.0361 24.489 11.0853 24.484 12.0506 24.2403L23.5572 20.1151C23.3151 19.3075 22.9454 18.6893 22.4861 18.2291Z\" fill=\"#EAD8C5\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_37_164259\">\n<rect width=\"25\" height=\"25\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>\n", "widgetStatus": "Running", "workflows": 4, "ctaClick": 80, "views": 1.1}
    ];

    return (
        <>
            <Box padding={isSmallScreen ? '20px 10px 20px 10px' : '20px 56px 20px 56px'}>
                <Breadcrumbs maxItems={4} aria-label="breadcrumb" fontSize={'14px'} lineHeight={'18px'}>
                    <Link underline="hover" href="#" color={'#0F62FE'}>
                        ACME LTD
                    </Link>
                    <Link underline="hover" href="home" color={'#0F62FE'}>
                        Home
                    </Link>
                    <Typography color="#161616">List Widget</Typography>
                </Breadcrumbs>
            </Box>
            <Box display="flex" minHeight="calc(100vh - 120px)" justifyContent="center" alignItems="center" padding={isSmallScreen ? '0px 10px 0px 10px' : '0px 0px 0px 0px'}>
                <Box width={'100%'} maxWidth={isSmallScreen ? '450px' : '945px'} color="#161616">
                    {widgetData.map((widget) => (
                        <Box key={widget.id}>
                            <ListWidgets widgetName={widget.widgetName} widgetCode={widget.widgetCode} widgetTitle={widget.widgetTitle} ctaText={widget.ctaText} ctaLink={widget.ctaLink} widgetPosition={widget.widgetPosition} widgetBody={widget.widgetBody} emoji={widget.emoji} widgetStatus={widget.widgetStatus} workflows={widget.workflows} ctaClick={widget.ctaClick} views={widget.views}  />
                        </Box>
                    ))}

                </Box>
            </Box>
        </>
    );
}

export default ListWidget;
