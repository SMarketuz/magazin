import { Box } from '@chakra-ui/react'
import React from 'react'
import { SiAcer, SiApple, SiAsus, SiLenovo, SiSamsung, SiSony, SiXiaomi } from "react-icons/si";
import './Main.css'
import { GrHpi } from 'react-icons/gr';
import Marquee from 'react-fast-marquee'

export default function Main() {
    return (
        <Box mt={110}>
            {/* for otzivi and instagram  */}

            {/* for partner  */}
            <Box>
                <Marquee direction='left'>
                    <Box className='image_marquee'>
                        <GrHpi size={50} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiSamsung size={70} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiLenovo size={70} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiAsus size={70} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiAcer size={70} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiSony size={70} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiXiaomi size={50} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiApple size={50} />
                    </Box>
                </Marquee>
            </Box>
        </Box>
    )
}
