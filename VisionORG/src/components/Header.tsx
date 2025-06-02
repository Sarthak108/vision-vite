import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { type FunctionComponent, useCallback } from 'react';

const Header: FunctionComponent = () => {
    const onSecondaryButtonClick = useCallback(() => {
        // Add your code here
    }, []);

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                margin: 0,
                padding: 0,
                height: '60vh',
                overflow: 'hidden',
                objectPosition: 'top',
            }}
        >

            <Box
                component="img"
                src="/src/assets/header_bg.jpg"
                alt="Background"
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.7)',
                    objectPosition: 'top',
                }}
            />


            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                {/* Main Text Content */}
                <Box
                    sx={{
                        padding: { xs: '30px 20px', sm: '80px 110px' },
                        width: { xs: '100%', sm: '60%', md: '50%' },
                        color: '#fff',
                        textAlign: 'left',
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 'bold',
                            lineHeight: 1.2,
                            fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' },
                            mb: 4,
                        }}
                    >
                        Inclusive care for children with special needs
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: 2,
                            mt: 4,
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#fff',
                                color: '#1d2130',
                                textTransform: 'none',
                                fontSize: '16px',
                                fontWeight: 500,
                                padding: '16px 32px',
                                '&:hover': {
                                    backgroundColor: '#f2f2f2',
                                },
                            }}
                            onClick={onSecondaryButtonClick}
                        >
                            What we do
                        </Button>

                        <Button
                            sx={{
                                color: 'white',
                                textTransform: 'none',
                                fontSize: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <Box
                                component="img"
                                src="/play-icon.svg"
                                alt="play"
                                sx={{ width: 24, height: 24 }}
                            />
                            Play Video
                        </Button>
                    </Box>
                </Box>

                {/* Statistics Bar */}
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderTop: '1px solid rgba(255, 255, 255, 0.3)',
                        padding: { xs: '15px 20px', sm: '20px 110px' },
                    }}
                >
                    <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                        230 children under our care
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                        58 donations collected
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;