import React from 'react';
import BookingTactk from '../../Football/BookingTactk/BookingTactk';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import BaseBallBanner from '../BaseBallBanner/BaseBallBanner';
import BaseBallLeague from '../BaseBallLeague/BaseBallLeague';
import BaseBallMatch from '../BaseBallMatch/BaseBallMatch';
import BaseBallMatchTema from '../BaseBallMatchTema/BaseBallMatchTema';
import BaseBallPlayers from '../BaseBallPlayers/BaseBallPlayers';
import BaseBallSlider from '../BaseBallSlider/BaseBallSlider';

const BaseBallHome = () => {
    return (
        <div>
            <Navigation />
            <BaseBallBanner />
            <BaseBallMatch />
            <BookingTactk />
            <BaseBallPlayers />
            <BaseBallLeague />
            <BaseBallMatchTema />
            <BaseBallSlider/>
            <Footer />
        </div>
    );
};

export default BaseBallHome;