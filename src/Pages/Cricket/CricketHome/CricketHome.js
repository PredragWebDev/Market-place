import React from 'react';
import CricketBanner from '../CricketBanner/CricketBanner';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import CricketMatch from '../CricketMatch/CricketMatch';
import BookingTactk from '../../Football/BookingTactk/BookingTactk';
import CricketPlayers from '../CricketPlayers/CricketPlayers';
import CricketLeague from '../CricketLeague/CricketLeague';
import CricketMatchTema from '../CricketMatchTema/CricketMatchTema';
import CricketSlider from '../CricketSlider/CricketSlider';

const CricketHome = () => {
    return (
        <div>
              <Navigation />
            <CricketBanner />
            <CricketMatch />
            <BookingTactk />
            <CricketPlayers />
            <CricketLeague />
            <CricketMatchTema />
            <CricketSlider />
            <Footer />

        </div>
    );
};

export default CricketHome;