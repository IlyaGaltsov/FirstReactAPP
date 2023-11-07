import '../App/App.css';
import CenterBlock from '../Center_Side/Center_Side';
import Header from '../Header/Header';
import LeftSide from '../Left_Side/Left_Side';

function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="bloks_container">
                <LeftSide />
                <CenterBlock className="center-block"/>
            </div>
        </div>
    );
}

export default App;