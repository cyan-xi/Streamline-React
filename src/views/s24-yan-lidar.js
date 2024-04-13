import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './s24-yan-lidar.css'

const S24YanLidar = (props) => {
  return (
    <div className="s24-yan-lidar-container">
      <Helmet>
        <title>S24YanLidar - Streamline</title>
        <meta
          name="description"
          content="Streamline - The Rivers School's STEM Magazine &amp; Outreach Club"
        />
        <meta property="og:title" content="S24YanLidar - Streamline" />
        <meta
          property="og:description"
          content="Streamline - The Rivers School's STEM Magazine &amp; Outreach Club"
        />
      </Helmet>
      <div className="s24-yan-lidar-content">
        <div className="s24-yan-lidar-nav-bar">
          <img
            alt="Rectangle1I145"
            src="/external/rectangle1i145-k1uq-200h.png"
            className="s24-yan-lidar-rectangle1"
          />
          <div className="s24-yan-lidar-group3">
            <Link to="/" className="s24-yan-lidar-text">
              Home
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </Link>
            <span className="s24-yan-lidar-text01">About</span>
            <a
              href="https://www.instagram.com/rivers.streamline/"
              target="_blank"
              rel="noreferrer noopener"
              className="s24-yan-lidar-text02"
            >
              <span>Instagram</span>
              <br></br>
              <br></br>
            </a>
            <Link to="/" className="s24-yan-lidar-text06">
              <span>Read</span>
              <br></br>
            </Link>
          </div>
          <div className="s24-yan-lidar-group1">
            <img
              alt="Ellipse1I145"
              src="/Streamline/logo_1-400h.png"
              className="s24-yan-lidar-ellipse1"
            />
            <span className="s24-yan-lidar-text09">The Rivers Streamline</span>
          </div>
        </div>
        <div className="s24-yan-lidar-content1">
          <div className="s24-yan-lidar-main-content">
            <div className="s24-yan-lidar-content2">
              <div className="s24-yan-lidar-oarticle">
                <div className="s24-yan-lidar-blog-info">
                  <div className="s24-yan-lidar-heading">
                    <span className="s24-yan-lidar-text10">
                      How Technology Sees the World: An Introduction to LiDAR
                    </span>
                  </div>
                  <div className="s24-yan-lidar-short-info">
                    <div className="s24-yan-lidar-aauthor">
                      <img
                        alt="ImageI2101"
                        src="/external/imagei2101-pano-200h.png"
                        className="s24-yan-lidar-image"
                      />
                      <span className="s24-yan-lidar-text11">Chelsea Yan</span>
                    </div>
                    <span className="s24-yan-lidar-text12">Spring 2024</span>
                  </div>
                </div>
                <img
                  alt="Image2101"
                  src="https://media.evkx.net/multimedia/technology/sensorsandcameras/lidar/HD_Maps_Luminar.png"
                  loading="lazy"
                  className="s24-yan-lidar-image1"
                />
                <div className="s24-yan-lidar-para">
                  <span className="s24-yan-lidar-text13 AMainArticleText">
                    <span>
                      Have you ever wondered how your phone recognizes your
                      face? How cars can detect nearby objects? Or even how
                      Google Earth takes incredibly clear images of the Earth?
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      All of that is thanks to LiDAR (which stands for Light
                      Detection and Ranging), and it is crucial to how
                      technology can see and process the world around us.
                    </span>
                  </span>
                </div>
                <div className="s24-yan-lidar-para1">
                  <span className="s24-yan-lidar-text17">How it Works</span>
                  <span className="s24-yan-lidar-text18 AMainArticleText">
                    <span>
                      LIDAR, or Light Detection and Ranging, uses pulses of
                      light to allow technology to see the world in 3D. It sends
                      out pulses of light from a laser, which then bounce off of
                      surrounding objects before returning to the LiDAR sensor.
                      By measuring the distance the light pulse traveled, an
                      incredibly accurate 3D image can be constructed.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div className="s24-yan-lidar-quote">
                  <span className="s24-yan-lidar-text22 ArticlequoteRegular">
                    <span>
                      LIDAR, or Light Detection and Ranging, uses pulses of
                      light to allow technology to see the world in 3D.
                    </span>
                    <span className="ArticlequoteRegular">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
                <div className="s24-yan-lidar-para2">
                  <span className="s24-yan-lidar-text25">
                    A Quick History of LiDAR:
                  </span>
                  <span className="s24-yan-lidar-text26">
                    <span className="AMainArticleText">
                      The idea behind LiDAR was first developed by E.H. Synge,
                      who used light and measured how long it took for the light
                      to return to calculate the distance of nearby objects,
                      which established the basis for LiDAR.
                    </span>
                    <br className="AMainArticleText"></br>
                    <br className="AMainArticleText"></br>
                    <span className="AMainArticleText">
                      Advancements in LiDAR continued, as its applications were
                      immense–including precise targeting for defensive
                      operations, atmospheric research, and land mapping. In the
                      1960s, applications for LiDAR within aerospace became
                      mainstream, notably through NASA’s use of LiDAR on Apollo
                      15 for surface mapping on the moon. Later, in the late
                      1980s, with the widespread use of global positioning
                      systems (GPS) and inertial measurement systems (IMUs),
                      LiDAR became common for commercial products.
                    </span>
                    <br className="AMainArticleText"></br>
                    <br className="ArticlePOfficial"></br>
                  </span>
                </div>
                <img
                  alt="Image2101"
                  src="https://velodynelidar.com/wp-content/uploads/2021/09/AlphaPrime_SF_Screengrab_02_cx.jpg"
                  className="s24-yan-lidar-image2"
                />
                <div className="s24-yan-lidar-para3">
                  <span className="s24-yan-lidar-text33">LiDAR Today:</span>
                  <span className="s24-yan-lidar-text34">
                    <span className="AMainArticleText">
                      Today, LiDAR’s ability to reconstruct 3D scenes has
                      applications in autonomous navigation, computer vision,
                      environmental monitoring. Although LiDAR has impressive
                      imaging capabilities, its usage for monitoring of large
                      distances is held back by key limitations. Because a LiDAR
                      sensor can generate millions of data points a second, it
                      is challenging to compute such enormous volumes of data.
                      Massive datasets of input data, noise, expensive initial
                      and maintenance costs, and high power usage make LiDAR
                      extremely difficult to use for long periods of time.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="AMainArticleText"></br>
                    <br className="AMainArticleText"></br>
                    <span className="AMainArticleText">
                      Additionally, LiDAR is limited in the variety of
                      situations in which it can be deployed. As a light-based
                      imaging system, environmental conditions such as lighting,
                      precipitation, air quality, and visibility may impact its
                      performance in taking an ideal scan..
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="AMainArticleText"></br>
                    <br className="AMainArticleText"></br>
                    <span className="AMainArticleText">
                      Despite these limitations, the power of LiDAR can not be
                      denied, and there is no doubt that its technologies will
                      improve over time. Currently, new models are being
                      developed to optimize the computation of LiDAR data. For
                      example, combining LiDAR with a camera and estimating
                      scene depth are currently promising techniques. As the
                      technology behind facial recognition, autonomous cars, and
                      satellites, the development of LiDAR is truly one to look
                      forward to.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="AMainArticleText"></br>
                    <br className="ArticlelgRegular"></br>
                  </span>
                </div>
              </div>
              <div className="s24-yan-lidar-oconclusion">
                <div className="s24-yan-lidar-para4">
                  <span className="s24-yan-lidar-text44">Sources:</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer" className="s24-yan-lidar-footer">
          <div className="s24-yan-lidar-contents">
            <span className="s24-yan-lidar-text45">
              <span className="s24-yan-lidar-text46">Contact Us</span>
              <br></br>
            </span>
            <span className="s24-yan-lidar-text48">
              <br></br>
              <span>Co-founders:</span>
              <br></br>
              <span>Chelsea Yan: c.yan@rivers.org</span>
              <br></br>
              <span>Joyce Do: joyce.do@rivers.org</span>
              <br></br>
              <br></br>
              <span>Faculty Advisor:</span>
              <br></br>
              <span>Stewart Pierson: s.pierson@rivers.org</span>
            </span>
          </div>
          <div className="s24-yan-lidar-contents1">
            <span className="s24-yan-lidar-text60">
              <span className="s24-yan-lidar-text61">About</span>
              <br></br>
            </span>
            <span className="s24-yan-lidar-text63">
              <br></br>
              <span>
                This website showcases the original written work of members of
                Streamline. Streamline is a 
              </span>
              <br></br>
              <span>student-run magazine and club at The Rivers School.</span>
              <br></br>
            </span>
          </div>
          <img
            alt="image"
            src="/Streamline/logo_1-400h.png"
            className="s24-yan-lidar-image3"
          />
        </div>
      </div>
    </div>
  )
}

export default S24YanLidar
