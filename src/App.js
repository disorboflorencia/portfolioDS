import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Else from './pages/Else';
import what from './pages/What';
import who from './pages/Who';
import NotFound from './pages/NotFound' ;
import project from './components/Project';
import project2 from './components/project2';
import Blog from './pages/Blog';
import AtelierLatina from './pages/AtelierLatina';
import MutuaAppJustTheBeggining from './posts/MutuaAppJustTheBeggining';
import Landing from './components/Landing';
import Mutua from './pages/Mutua';
import ArtGalleryApp from './pages/ArtGalleryApp';
import ScrollToTop from './components/ScrollToTop';
import NetGrowthApp from './pages/NetGrowth';
import FreeStyleStore from './pages/FreeStyleStore';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <div className="navCol">
        <Nav />
        <div className="view">
          <ScrollToTop />
          <Switch> 
            <Route exact path="/" component= {Landing}  />
            <Route exact path="/who" component= {who}  />
            <Route exact path="/what" component= {what} />
            <Route exact path="/else" component= {Else} />
            <Route exact path="/blog" component= {Blog}/>
            <Route exact path="/blog/MutuaAppJustTheBeggining" component= {MutuaAppJustTheBeggining}/>

            <Route exact path="/what/AtelierLatina" component= {AtelierLatina}/>
            <Route exact path="/what/Mutua" component= {Mutua}/>
            <Route exact path="/what/ArtGalleryApp" component= {ArtGalleryApp}/>
            <Route exact path="/what/NetGrowthApp" component= {NetGrowthApp}/>
            <Route exact path="/what/FreeStyleStore" component= {FreeStyleStore}/>

            

            <Route exact path="/what/project"  component={project} />
            <Route exact path="/project2"  component={project2} />
            
            <Route  component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
