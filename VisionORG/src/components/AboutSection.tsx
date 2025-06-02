import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { type FunctionComponent } from 'react';
import styled from "styled-components";

const AboutSectionRoot = styled.div`
    width: 100%;
    position: relative;
    height: 724.4px;
    text-align: left;
    font-size: 16px;
    color: #1d2130;
    font-family: Roboto;
`;

const AboutSection: FunctionComponent = () => {
    return (
        <AboutSectionRoot>
            <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 8 }, backgroundColor: '#fff' }}>
                {/* Main content: text + image */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 4,
                    }}
                >
                    {/* Text Column */}
                    <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: { xs: 'center', md: 'flex-start' },
                                gap: 1,
                                mb: 1,
                            }}
                        >
                            <Box sx={{ width: 30, height: 2, backgroundColor: '#000' }} />
                            <Typography
                                variant="subtitle2"
                                sx={{ textTransform: 'uppercase', letterSpacing: 2, fontWeight: 500 }}
                            >
                                Know about us
                            </Typography>
                        </Box>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3, color: '#1d2130' }}>
                            We provide a place for children with special needs
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#525560', mb: 2, lineHeight: 1.6 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#525560', mb: 4, lineHeight: 1.6 }}>
                            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#F2C94C',
                                color: '#1d2130',
                                textTransform: 'none',
                                fontWeight: 500,
                                px: 4,
                                py: 1.5,
                                '&:hover': { backgroundColor: '#e1b750' },
                            }}
                        >
                            Learn more
                        </Button>
                    </Box>

                    {/* Image Column */}
                    <Box
                        sx={{
                            position: 'relative',
                            flex: 1,
                            maxWidth: { xs: '100%', md: '50%' },
                            borderRadius: 2,
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            component="img"
                            src="/src/assets/about_home.png"
                            alt="About Home"
                            sx={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                        <IconButton
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                bgcolor: 'rgba(0,0,0,0.6)',
                                '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
                            }}
                        >
                            <PlayArrowIcon sx={{ color: '#fff', fontSize: 40 }} />
                        </IconButton>
                    </Box>
                </Box>

                {/* Supporters Row */}
                <Box sx={{ mt: 6, borderTop: '1px solid #e5e5e5', pt: 4 }}>
                    <Typography
                        variant="subtitle2"
                        sx={{ textTransform: 'uppercase', letterSpacing: 2, fontWeight: 500, mb: 3 }}
                    >
                        Our Supporters
                    </Typography>
                    <Box
                        component="img"
                        src="/src/assets/Logo row.svg"
                        alt="Our Supporters"
                        sx={{ width: '100%', height: 'auto', opacity: 0.6 }}
                    />
                </Box>
            </Box>
        </AboutSectionRoot>
    );
};

export default AboutSection;