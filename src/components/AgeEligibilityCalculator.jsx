import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Stack, Chip, Fade, Zoom, Link } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const AgeEligibilityCalculatorWrapper = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <AgeEligibilityCalculator />
        </LocalizationProvider>
    );
};


const AgeEligibilityCalculator = () => {
    const [dob, setDob] = useState(null);
    const [age, setAge] = useState(null);
    const [eligibility, setEligibility] = useState([]);
    const [showRoles, setShowRoles] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const calculateAge = (dobObject) => {
        if (!dobObject || !dobObject.isValid()) return null;
        try {
            const birthDate = dobObject.toDate();
            const today = new Date();

            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            if (age < 0 || age > 120) {
                return null;
            }
            return age;
        } catch (error) {
            console.error("Error calculating age:", error);
            return null;
        }
    };

    const calculateEligibility = (age) => {
        if (age === null || age < 0) return [];

        const roles = [];
        const links = {
            'Agniveer (General Duty)': 'https://joinindianarmy.nic.in/',
            'General Duty (GD)': 'https://joinindianarmy.nic.in/',
            'Combined Defence Services (CDS)': 'https://joinindianarmy.nic.in/',
            'Technical Entry Scheme (TES)': 'https://joinindianarmy.nic.in/',
            'Sailor Entry': 'https://joinindiannavy.gov.in/',
            'Short Service Commission (SSC) Officer': 'https://joinindianarmy.nic.in/',
            'Permanent Commission (PC) Officer': 'https://joinindianarmy.nic.in/',
            'Agniveer Vayu': 'https://agniveer.indianairforce.nic.in/',
            'Group Y (Non-Technical)': 'https://agniveer.indianairforce.nic.in/',
            'Group C (Civilian Roles)': 'https://joinindianarmy.nic.in/',
            'AFCAT (Flying Branch)': 'https://afcat.cdac.in/',
            'AFCAT (Ground Duty)': 'https://afcat.cdac.in/',
        };

        if (age >= 17.5 && age <= 21) roles.push('Agniveer (General Duty)');
        if (age >= 17.5 && age <= 23) roles.push('General Duty (GD)');
        if (age >= 19 && age <= 25) roles.push('Combined Defence Services (CDS)');
        if (age >= 16.5 && age <= 19.5) roles.push('Technical Entry Scheme (TES)');
        if (age >= 17 && age <= 22) roles.push('Sailor Entry');
        if (age >= 19 && age <= 25) roles.push('Short Service Commission (SSC) Officer');
        if (age >= 19 && age <= 24) roles.push('Permanent Commission (PC) Officer');
        if (age >= 17.5 && age <= 21) roles.push('Agniveer Vayu');
        if (age >= 17 && age <= 21) roles.push('Group Y (Non-Technical)');
        if (age >= 18 && age <= 25) roles.push('Group C (Civilian Roles)');
        if (age >= 20 && age <= 24) roles.push('AFCAT (Flying Branch)');
        if (age >= 20 && age <= 26) roles.push('AFCAT (Ground Duty)');

        return roles.map(role => ({ name: role, link: links[role] || '#' }));
    };


    const handleDobSubmit = (e) => {
        e.preventDefault();
        const calculatedAge = calculateAge(dob);
        setAge(calculatedAge);
        const eligibleRoles = calculateEligibility(calculatedAge);
        setEligibility(eligibleRoles);
        setShowRoles(true);
        setSubmitted(true);
    };

    const textColor = 'grey.300';
    const secondaryTextColor = 'grey.500';

    return (
        <Container maxWidth="sm" sx={{
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: { xs: 3, sm: 5 },
            mb: 4,
        }}>
            <Fade in timeout={600}>
                <Box sx={{
                    width: '100%',
                    maxWidth: 480,
                    borderRadius: 3,
                    p: { xs: 3, sm: 4 },
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                    <Typography
                        variant="h4"
                        component="h1"
                        align="center"
                        fontWeight={600}
                        color={textColor}
                        gutterBottom
                        sx={{ mb: 4, letterSpacing: '0.5px' }}
                    >
                        Defence Job Eligibility
                    </Typography>
                    <form onSubmit={handleDobSubmit}>
                        <DatePicker
                            label="Date of Birth"
                            value={dob}
                            onChange={(newValue) => {
                                setDob(newValue);
                                setShowRoles(false);
                                setSubmitted(false);
                            }}
                            sx={{
                                mb: 3,
                                width: '100%',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 2,
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(255, 255, 255, 0.3)',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(255, 255, 255, 0.6)',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'primary.main',
                                    },
                                    input: { color: textColor },
                                },
                                '& .MuiInputLabel-root': {
                                    color: secondaryTextColor,
                                    '&.Mui-focused': {
                                        color: 'primary.main'
                                    }
                                },
                                '& .MuiSvgIcon-root': {
                                    color: secondaryTextColor,
                                }
                            }}
                            slotProps={{
                                textField: {
                                    required: true,
                                    fullWidth: true,
                                    InputLabelProps: {
                                        shrink: true
                                    }
                                }
                            }}
                        />

                        <motion.div whileHover={{ scale: 1.011 }} whileTap={{ scale: 0.985 }}>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                size="large"
                                startIcon={<CheckCircleOutlineIcon />}
                                sx={{
                                    fontWeight: 'bold',
                                    py: 1.5,
                                    borderRadius: 2,
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    // boxShadow: '0 3px 8px rgba(0, 123, 255, 0.25)',
                                    transition: 'background-color 0.2s, box-shadow 0.2s, transform 0.1s',
                                    '&:hover': {
                                        boxShadow: '0 4px 12px rgba(0, 123, 255, 0.35)',
                                    },
                                }}
                            >
                                Check Eligibility
                            </Button>
                        </motion.div>
                    </form>
                </Box>
            </Fade>

            {submitted && (
                <Zoom in={showRoles} timeout={400} mountOnEnter unmountOnExit>
                    <Box sx={{
                        mt: 4,
                        width: '100%',
                        maxWidth: 550,
                        borderRadius: 3,
                        p: { xs: 2.5, sm: 3 },
                        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}>
                        <Typography
                            variant="h6"
                            component="h2"
                            align="center"
                            fontWeight={500}
                            color={secondaryTextColor}
                            gutterBottom
                            sx={{ mb: 3 }}
                        >
                            {age !== null && age >= 0 ? `Based on your age (${age}), you might be eligible for:` : 'Eligibility Results'}
                        </Typography>
                        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1.2}>
                            {eligibility.length > 0 ? (
                                eligibility.map((role, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.02, duration: 0.15, ease: "easeOut" }}
                                    >
                                        <Chip
                                            label={role.name}
                                            component={Link}
                                            href={role.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            clickable
                                            variant="outlined"
                                            color="primary"
                                            size="medium"
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: '0.9rem',
                                                py: 2.2,
                                                px: 1.5,
                                                borderRadius: '16px',
                                                cursor: 'pointer',
                                                transition: 'transform 0.15s ease, background-color 0.15s ease, border-color 0.15s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-1px)',
                                                    backgroundColor: 'rgba(0, 123, 255, 0.06)',
                                                },
                                            }}
                                        />
                                    </motion.div>
                                ))
                            ) : (age !== null && age >= 0) ? (
                                <Stack direction="row" alignItems="center" spacing={1} sx={{ p: 1.5, borderRadius: 2, backgroundColor: 'rgba(255, 82, 82, 0.1)', border: '1px solid rgba(255, 82, 82, 0.3)' }}>
                                    <ErrorOutlineIcon sx={{ color: 'error.light' }} />
                                    <Typography
                                        color="error.light"
                                        align="center"
                                        fontWeight={500}
                                        fontSize="0.95rem"
                                    >
                                        No standard defence roles found for age {age}. Check official notifications.
                                    </Typography>
                                </Stack>
                            ) : (dob &&
                                <Stack direction="row" alignItems="center" spacing={1} sx={{ p: 1.5, borderRadius: 2, backgroundColor: 'rgba(255, 167, 38, 0.1)', border: '1px solid rgba(255, 167, 38, 0.3)' }}>
                                    <ErrorOutlineIcon sx={{ color: 'warning.light' }} />
                                    <Typography color="warning.light" align="center" fontWeight={500} fontSize="0.95rem">
                                        Please select a valid Date of Birth.
                                    </Typography>
                                </Stack>
                            )}
                        </Stack>
                    </Box>
                </Zoom>
            )}
        </Container>
    );
};

export default AgeEligibilityCalculator;