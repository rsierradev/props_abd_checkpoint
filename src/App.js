import logo from "./logo.svg";
import { ProfilePhoto } from "./components/Profile/ProfilePhoto";
import { FullName } from "./components/Profile/FullName";
import { Address } from "./components/Profile/Address";
import Layout from "./components/Layout";

function App() {
  const myName = "Abdulla";
  const myFunction = () => {
    alert("Hello!");
  };
  const dataFromAPI = [
    {
      id: 1,
      name: "Abdulla",
    },
    {
      id: 2,
      name: "Rodrigo",
    },
  ];
  const myCountry = "Bahrain";
  const fullAddress = "BLK 711, ROD Avenue 13, BLDG 450, Floor 2, Apartment 21";
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
                    <FullName
                      firstName={myName}
                      alertFn={myFunction}
                      dataAPI={dataFromAPI}
                    />
                    <Address myCountry={myCountry} fullAddress={fullAddress} />
                    <Layout>
                      <ProfilePhoto />
                    </Layout>
                    {/* <Menu>
                      {menuItems.map(menu ==> {
                        <MenuItem>{menu}</MenuItem>
                      })}
                    </Menu> */}
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
