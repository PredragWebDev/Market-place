import React from 'react';
import TableTennisBanner from '../TableTennisBanner/TableTennisBanner';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import BookingTactk from '../../Football/BookingTactk/BookingTactk';
import TableTennisSlider from '../TableTennisSlider/TableTennisSlider';
import TableTennisPlayers from '../TableTennisPlayers/TableTennisPlayers';

import TableTennisLeague from '../TableTennisLeague/TableTennisLeague';
import TableTennisMatch from '../TableTennisMatch/TableTennisMatch';
import TableTennisMatchTema from '../TableTennisMatchTema/TableTennisMatchTema';


const TableTennisHome = () => {
    return (
        <div>
            <Navigation />
            <TableTennisBanner />
            <TableTennisMatch />
            <BookingTactk />
            <TableTennisPlayers />
            <TableTennisLeague />
            <TableTennisMatchTema />
            <TableTennisSlider/>
            <Footer />
        </div>
    );
};

export default TableTennisHome;