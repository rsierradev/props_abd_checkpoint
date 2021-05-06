import logo from './logo.svg';
import {ProfilePhoto} from './components/Profile/ProfilePhoto';
import {FullName} from './components/Profile/FullName';
import { Address } from './components/Profile/Address';

function App() {
  return (
    <div className="container">
    <div className="row">
      <div className="padding">
      <div className="col-md-12 shadeBox p-0">
        <div className="card user-card-full">
          <div className="row m-l-0 m-r-0">
            <ProfilePhoto />
            <div className="col-sm-8">
              <div className="card-block">
                <FullName />
                <Address />
              </div>
            </div>
          </div>
        </div>
      </div> 
      </div>         
    </div>
  </div>
  );
}

export default App;
