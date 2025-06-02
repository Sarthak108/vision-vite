import { Box, Button, Grid, Typography } from '@mui/material';
import { type FunctionComponent, useCallback } from 'react';

const projectsData = [
    {
        image: "unsplash:1-aA2Fadydc.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        title: "Monthly public awareness",
    },
    {
        image: "unsplash:iIGovKRty8g.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        title: "Weekly excursions",
    },
    {
        image: "unsplash:cVEOh_JJmEE.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        title: "Mission smile 1k: Outdoor charity",
    },
];

const Projects: FunctionComponent = () => {
    const onProjectsContainerClick = useCallback(() => {
        // Add your code here
    }, []);

    const onProjectRowContainerClick = useCallback(() => {
        const anchor = document.querySelector("[data-scroll-to='tint']");
        if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    }, []);

    return (
        <Box
            onClick={onProjectsContainerClick}
            sx={{
                width: '100%',
                position: 'relative',
                textAlign: 'left',
                fontSize: 16,
                color: '#1d2130',
                fontFamily: 'Roboto',
                px: { xs: 2, md: 8 },
                py: { xs: 4, md: 8 },
                bgcolor: '#fff',
            }}
        >
            {/* Section Title */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Box sx={{ width: '40px', height: '2px', backgroundColor: '#000' }} />
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#1d2130' }}>
                    Projects we have done
                </Typography>
            </Box>

            <Box sx={{ width: "40%" }}>

                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        color: '#1d2130',
                        mb: 2,
                        textAlign: { xs: 'center', md: 'left' },

                    }}
                >
                    We are creating a place where children with special needs can thrive
                </Typography>

            </Box>


            {/* Projects Grid */}
            <Grid
                container
                spacing={4}
                onClick={onProjectRowContainerClick}
                justifyContent="start"



            >
                {projectsData.map((project, idx) => (
                    <Grid
                        key={idx}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                borderRadius: 5,
                                overflow: 'hidden',
                                height: { xs: 380, md: 450 },
                                boxShadow: 2,
                                bgcolor: '#000',
                                display: 'flex',
                                alignItems: 'flex-end',
                                width: '100%',
                                maxWidth: 400,
                            }}
                        >
                            {/* Project Image */}
                            <Box
                                component="img"
                                src={project.image}
                                alt={project.title}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    zIndex: 1,
                                }}
                            />
                            {/* Tint Overlay */}
                            <Box
                                data-scroll-to="tint"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    bgcolor: 'rgba(11,7,6,0.6)',
                                    zIndex: 2,
                                }}
                            />
                            {/* Content */}
                            <Box
                                sx={{
                                    position: 'relative',
                                    zIndex: 3,
                                    p: 3,
                                    width: '100%',
                                    color: '#fff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    height: '100%',
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: '#fff',
                                        color: '#1d2130',
                                        textTransform: 'none',
                                        fontWeight: 500,
                                        borderRadius: 1,
                                        mb: 2,
                                        alignSelf: 'flex-start',
                                        px: 3,
                                        py: 1,
                                        boxShadow: 1,
                                        '&:hover': { bgcolor: '#f0f0f0' },
                                    }}
                                >
                                    Learn more
                                </Button>
                                <Typography variant="body2" sx={{ mb: 1, color: '#fff', lineHeight: 1.6 }}>
                                    {project.description}
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
                                    {project.title}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;