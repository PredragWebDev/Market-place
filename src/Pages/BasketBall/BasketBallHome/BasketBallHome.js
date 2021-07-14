import React from 'react';
import BookingTactk from '../../Football/BookingTactk/BookingTactk';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import BasketBallBanner from '../BasketBallBanner/BasketBallBanner';
import BasketBallLeague from '../BasketBallLeague/BasketBallLeague';
import BasketBallMatch from '../BasketBallMatch/BasketBallMatch';
import BasketBallMatchTema from '../BasketBallMatchTema/BasketBallMatchTema';
import BasketBallPlayers from '../BasketBallPlayers/BasketBallPlayers';
import BasketBallSlider from '../BasketBallSlider/BasketBallSlider';


const BasketBallHome = () => {
    return (
        <div>
            <Navigation />
            <BasketBallBanner />
            <BasketBallMatch />
            <BookingTactk />
            <BasketBallPlayers />
            <BasketBallLeague />
            <BasketBallMatchTema />
            <BasketBallSlider />
            <Footer />
        </div>
    );
};

export default BasketBallHome;