import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './s24-bio-builders-project.css'

const S24BioBuildersProject = (props) => {
  return (
    <div className="s24-bio-builders-project-container">
      <Helmet>
        <title>S24BioBuildersProject - Streamline</title>
        <meta
          name="description"
          content="Streamline - The Rivers School's STEM Magazine &amp; Outreach Club"
        />
        <meta
          property="og:title"
          content="S24BioBuildersProject - Streamline"
        />
        <meta
          property="og:description"
          content="Streamline - The Rivers School's STEM Magazine &amp; Outreach Club"
        />
      </Helmet>
      <div className="s24-bio-builders-project-content">
        <div className="s24-bio-builders-project-nav-bar">
          <img
            alt="Rectangle1I145"
            src="/external/rectangle1i145-k1uq-200h.png"
            className="s24-bio-builders-project-rectangle1"
          />
          <div className="s24-bio-builders-project-group3">
            <Link to="/" className="s24-bio-builders-project-text">
              Home
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </Link>
            <span className="s24-bio-builders-project-text01">About</span>
            <a
              href="https://www.instagram.com/rivers.streamline/"
              target="_blank"
              rel="noreferrer noopener"
              className="s24-bio-builders-project-text02"
            >
              <span>Instagram</span>
              <br></br>
              <br></br>
            </a>
            <Link to="/" className="s24-bio-builders-project-text06">
              <span>Read</span>
              <br></br>
            </Link>
          </div>
          <div className="s24-bio-builders-project-group1">
            <img
              alt="Ellipse1I145"
              src="/Streamline/logo_1-400h.png"
              className="s24-bio-builders-project-ellipse1"
            />
            <span className="s24-bio-builders-project-text09">
              The Rivers Streamline
            </span>
          </div>
        </div>
        <div className="s24-bio-builders-project-content1">
          <div className="s24-bio-builders-project-main-content">
            <div className="s24-bio-builders-project-content2">
              <div className="s24-bio-builders-project-oarticle">
                <div className="s24-bio-builders-project-blog-info">
                  <div className="s24-bio-builders-project-heading">
                    <span className="s24-bio-builders-project-text10">
                      Collecting Data from Nonesuch Pond: A BioBuilders Project
                    </span>
                  </div>
                  <div className="s24-bio-builders-project-short-info">
                    <div className="s24-bio-builders-project-aauthor">
                      <img
                        alt="ImageI2101"
                        src="https://www.finditcambridge.org/sites/default/files/styles/findit_opportunity_image_large/public/image/org/2020-09/BioBuilderEF_square.png?itok=z5qLfamF"
                        className="s24-bio-builders-project-image"
                      />
                      <span className="s24-bio-builders-project-text11">
                        Rivers BioBuilders Club
                      </span>
                    </div>
                    <span className="s24-bio-builders-project-text12">
                      Spring 2024
                    </span>
                  </div>
                </div>
                <img
                  alt="Image2101"
                  src="https://www.massachusettspaddler.com/x/cdn/?https://storage.googleapis.com/production-websitebuilder-v1-0-9/279/200279/9vUi31Nu/07b1ec5d00084697900257459c161929"
                  loading="lazy"
                  className="s24-bio-builders-project-image1"
                />
                <span className="s24-bio-builders-project-text13">
                  <span>About the team</span>
                  <br></br>
                </span>
                <span className="s24-bio-builders-project-text16">
                  <span className="AMainArticleText">
                    This is the third year of the Rivers BioBuilder team. Our
                    team consists of two returning members, Tyler Karp and
                    Christopher Kim, and two new members, Evan Canty and Chelsea
                    Yan. We also have Mr. Stewart Pierson as our returning
                    advisor and Thomas Hyde as our BioBuilder ment
                  </span>
                  <span className="AMainArticleText">
                    or. Our group started off by pondering the different ways
                    that we could collect data and how that would impact how our
                    device is built, such as a net of sensors or just a buoy
                    that would sit out on the lake. Going off our general idea,
                    we then had to figure out how to make our device float while
                    simultaneously making sure none of the technology gets
                    damaged. We also needed to conduct some research on our own
                    Nonesuch pond to decide what data to collect using our
                    device. After completing all the above steps, we finally
                    started programming.
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="AMainArticleText"></br>
                </span>
                <img
                  alt="Image2101"
                  src="/Streamline/biobuilders1-200h.png"
                  loading="lazy"
                  className="s24-bio-builders-project-image2"
                />
                <div className="s24-bio-builders-project-para">
                  <span className="s24-bio-builders-project-text21">
                    Introduction and Background
                  </span>
                  <span className="s24-bio-builders-project-text22 AMainArticleText">
                    <span className="AMainArticleText">
                      In addition to adding beauty to our campus, Nonesuch pond
                      is used in a plethora of different ways year-round, such
                      as our school&apos;s fishing club during the year, pond
                      hockey during the winter, and the day camp over the
                      summer. Noting the pond’s importance to Rivers, our club
                      wanted to ensure that the pond remains healthy and retains
                      its beauty for years to come. Our club aimed to develop a
                      device that would automatically collect and store water
                      health data. By collecting samples, we could easily see
                      how activities like swimming or fishing impacted the pond.
                      We wanted to create something that would inform others in
                      a clear way and incentivize them to help our environment
                      or just be conscientious of their impact on the
                      environment.
                    </span>
                    <br className="AMainArticleText"></br>
                  </span>
                </div>
                <span className="s24-bio-builders-project-text25">
                  <span>Scientific Content</span>
                  <br></br>
                </span>
                <span className="s24-bio-builders-project-text28">
                  <span className="AMainArticleText">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="AMainArticleText">
                    With an M0 Adalogger, we plan to collect various data from
                    the pond, including temperature, pH, and turbidity.
                    Currently, we are working on the temperature sensor. After
                    that, we plan to build a floating device that periodically
                    takes data from the pond throughout the day.
                  </span>
                  <br className="s24-bio-builders-project-text31"></br>
                  <br className="AMainArticleText"></br>
                  <span className="AMainArticleText">
                    The parts of our project that we struggled with the most
                    were getting Arduino, the M0 Adalogger, and the temperature
                    sensor to communicate with one another. We also faced
                    challenges in designing a waterproof system to ensure that
                    the electronics remain dry and safe.
                  </span>
                  <br className="s24-bio-builders-project-text34"></br>
                  <br className="AMainArticleText"></br>
                  <span className="AMainArticleText">
                    While our team was unable to complete this device, we had
                    intended to address problems with the water quality of the
                    pond after collecting the water data. We investigated how
                    factors such as algae and E. coli can harm pond ecosystems.
                  </span>
                  <br className="AMainArticleText"></br>
                </span>
                <img
                  alt="Image2101"
                  src="/biobuilders2-200h.png"
                  loading="lazy"
                  className="s24-bio-builders-project-image3"
                />
                <span className="s24-bio-builders-project-text38">
                  <span>Possible Next Steps</span>
                  <br></br>
                </span>
                <span className="s24-bio-builders-project-text41 AMainArticleText">
                  <span className="AMainArticleText">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="AMainArticleText">
                    Something that we learned from this project is that
                    electronics, especially sensors, are more complicated than
                    we had previously thought. We think that adding more sensors
                    would be a worthwhile next step in the project. Something
                    like PH or salinity sensors in order to gather more
                    informative data about the water ecosystem.
                  </span>
                  <br className="AMainArticleText"></br>
                  <br className="AMainArticleText"></br>
                  <br className="AMainArticleText"></br>
                </span>
              </div>
              <div className="s24-bio-builders-project-oconclusion">
                <div className="s24-bio-builders-project-para1"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer" className="s24-bio-builders-project-footer">
          <div className="s24-bio-builders-project-contents">
            <span className="s24-bio-builders-project-text47">
              <span className="s24-bio-builders-project-text48">
                Contact Us
              </span>
              <br></br>
            </span>
            <span className="s24-bio-builders-project-text50">
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
          <div className="s24-bio-builders-project-contents1">
            <span className="s24-bio-builders-project-text62">
              <span className="s24-bio-builders-project-text63">About</span>
              <br></br>
            </span>
            <span className="s24-bio-builders-project-text65">
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
            className="s24-bio-builders-project-image4"
          />
        </div>
      </div>
    </div>
  )
}

export default S24BioBuildersProject
