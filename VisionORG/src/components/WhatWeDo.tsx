import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import { Box, Typography } from '@mui/material';
import type { FunctionComponent } from 'react';

const WhatWeDo: FunctionComponent = () => {
    return (
        <Box
            sx={{
                width: '100%',
                textAlign: 'left',
                fontSize: '16px',
                color: '#525560',
                fontFamily: 'Roboto',
                padding: { xs: 3, md: 8 },
                backgroundColor: '#f8f2e4',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'center', md: 'flex-start' },
                justifyContent: 'space-between',
                position: 'relative',
                boxSizing: 'border-box',
            }}
        >
            {/* Text and Image Container */}
            <Box
                sx={{
                    width: { xs: '100%', md: '55%' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    justifyContent: 'flex-start',
                }}
            >
                {/* Section Title */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Box sx={{ width: '40px', height: '2px', backgroundColor: '#000' }} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#1d2130' }}>
                        What we do
                    </Typography>
                </Box>

                {/* Main Text Content */}
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1d2130', mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
                    Some services we provide for our children
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 4, textAlign: { xs: 'center', md: 'left' } }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </Typography>

                {/* List of Functions */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <FunctionItem icon={<FamilyRestroomIcon />} title="Family support" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
                    <FunctionItem icon={<HealthAndSafetyIcon />} title="Health benefits" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
                    <FunctionItem icon={<SchoolIcon />} title="Scholarships" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
                    <FunctionItem icon={<LocalHospitalIcon />} title="Therapy" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
                </Box>
            </Box>

            {/* Image */}
            <Box
                sx={{
                    width: { xs: '100%', md: '40%' },
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    mt: { xs: 4, md: 0 }
                }}
            >
                <Box
                    component="img"
                    src="/src/assets/what_we_do.jpg"
                    alt="What We Do"
                    sx={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </Box>
        </Box>
    );
};

interface FunctionItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FunctionItem: FunctionComponent<FunctionItemProps> = ({ icon, title, description }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 2, textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ fontSize: '24px', color: '#1d2130' }}>{icon}</Box>
            <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1d2130' }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#525560' }}>
                    {description}
                </Typography>
            </Box>
        </Box>
    );
};

export default WhatWeDo;
