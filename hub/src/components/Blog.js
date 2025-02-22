import React from 'react';
import './Blog.css'; // Import CSS file for styling

const Blog = () => {
  return (
    <>
      
      <div className="video-background-a">
        <video autoPlay muted loop id="background-video-a">
          <source src={process.env.PUBLIC_URL + '/vid.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="box">
        <div>
          <p className="pEight">About us</p>
        </div>

        <div>
          <p className="pNine">Where can you get help? If you are wondering, we have answers and solutions for you.</p>
        </div>

        <div>
          <table>
            <tbody>
              <tr>
                <td className="pSix">
                  <p>MISSION</p>
                </td>
                <td className="pSeven">
                  <p>Our mission is to leverage technology to combat gender-based violence by providing survivors with safe, accessible, and innovative digital solutions. We strive to create a world where everyone, regardless of gender, can seek help, access resources, and find support without fear. Through cutting-edge tools, awareness campaigns, and survivor-centered platforms, we aim to break the cycle of abuse and empower individuals to reclaim their freedom.</p>
                </td>
              </tr>

              <tr>
                <td className="pSix">
                  <p>VISION</p>
                </td>
                <td className="pSeven">
                  <p>
We envision a future where technology serves as a powerful force in eradicating gender-based violence. A world where survivors have immediate access to help, abusers are held accountable through digital evidence, and communities are educated and empowered to take action. By integrating AI, data analytics, and secure digital platforms, we aspire to create safer environments and foster a society rooted in justice, equality, and respect.
</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        
<div className='homeB'>
      <p className="pTwo fluid-inline"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check out the website:</p>
<div className="flink fluid-inline">
  <a href="https://flourishingwoman.africa/" target="_blank" rel="noopener noreferrer">Flourish Hub</a>
</div>


</div>
      </div>
    </>
  );
};

export default Blog;
