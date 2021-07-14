import React from 'react';
import BookingTactk from '../../Football/BookingTactk/BookingTactk';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import VolleyBallBanner from '../VolleyBallBanner/VolleyBallBanner';
import VolleyBallMatch from '../VolleyBallMatch/VolleyBallMatch';
import VolleyBallPlayers from '../VolleyBallPlayers/VolleyBallPlayers';
import VolleyBallLeague from '../VolleyBallLeague/VolleyBallLeague';
import VolleyBallMatchTema from '../VolleyBallMatchTema/VolleyBallMatchTema';
import VolleyBallSlider from '../VolleyBallSlider/VolleyBallSlider';

const VolleyBallHome = () => {
    return (
        <div>
            <Navigation />
            <VolleyBallBanner />
            <VolleyBallMatch />
            <BookingTactk />
            <VolleyBallPlayers />
            <VolleyBallLeague />
            <VolleyBallMatchTema />
            <VolleyBallSlider />
            <Footer />
        </div>
    );
};

export default VolleyBallHome;