import React from 'react';
import AppBar from './appBar';
// import Carousel from './Media/carousels';
import MediaCard from './Media/mediaCard';
import Box from '@material-ui/core/Box';
import Copyright from './Media/copyright';

function homePage(props) {
    return (
        <div>
            <AppBar />
            {/* <Carousel /> */}
            <MediaCard />
            <div>
            <Box mt={5}>
                <Copyright />
            </Box>
            </div>
        </div>
        
    );
}

export default homePage;