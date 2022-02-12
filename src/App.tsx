import { FC, useEffect } from 'react';
import {
    Header,
    FiltersSidebar,
    SortPanel,
    OffersList
} from './components';
import { useAppDispatch } from './hooks/redux';
import { getTickets } from './store/reducers/ActionCreators';
import './App.scss';

const App: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTickets());
    }, [dispatch]);

    return (
        <div className="app">
            <Header />
            <main>
                <div className="container">
                    <div className="main-wrapper">
                        <div className="sidebar-wrapper">
                            <FiltersSidebar />
                        </div>
                        <div className="content-wrapper">
                            <SortPanel />
                            <OffersList />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
