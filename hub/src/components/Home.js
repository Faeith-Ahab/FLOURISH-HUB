import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="major-section">
      <div className="section">
        <div className="content">
          <table>
            <tbody>
              <tr>
                <td>
                  <img className="sectionimage" src={process.env.PUBLIC_URL + '/ImageOne.png'} alt="flame" />
                </td>
                <td>
                  <p className="pOne">
                    &nbsp;&nbsp;&nbsp;&nbsp;Welcome to the Flourish Hub community
                  </p>
                  <p className="pTwo">
                    &nbsp;&nbsp;&nbsp;Get help.<br />
                    &nbsp;&nbsp;Learn about your rights.<br />
                    &nbsp;&nbsp;Connect to essential support services.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <table>
            <tbody>
              <tr>
                <td>
                  <p className="pOne">
                    &nbsp;&nbsp;&nbsp;&nbsp;What this is all about
                  </p>
                  <p className="pTwo">
                    &nbsp;Technology meets advocacy in the fight against gender-based violence. <br />
                    We understand the urgency of providing survivors with safe, discreet, and effective tools to seek help, report abuse, <br />
                    and access essential resources.
                  </p>
                </td>
                <td>
                  <img className="sectionimage" src={process.env.PUBLIC_URL + '/ImageTwo.png'} alt="flame" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



    </div>
  );
};

export default Home;
