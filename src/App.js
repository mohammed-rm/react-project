import {Route} from "react-router-dom";
import {Routes} from "react-router";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AllMeetupsPage/>}/>
                <Route path="/new-meetup" element={<NewMeetupPage/>}/>
                <Route path="/favorites" element={<FavoritesPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
