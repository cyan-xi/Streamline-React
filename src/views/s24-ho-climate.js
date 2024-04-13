import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './s24-ho-climate.css'

const S24HoClimate = (props) => {
  return (
    <div className="s24-ho-climate-container">
      <Helmet>
        <title>S24HoClimate - Streamline</title>
        <meta
          name="description"
          content="Streamline - The Rivers School's STEM Magazine &amp; Outreach Club"
        />
        <meta property="og:title" content="S24HoClimate - Streamline" />
        <meta
          property="og:description"
          content="Streamline - The Rivers School's STEM Magazine &amp; Outreach Club"
        />
      </Helmet>
      <div className="s24-ho-climate-content">
        <div className="s24-ho-climate-nav-bar">
          <img
            alt="Rectangle1I145"
            src="/external/rectangle1i145-k1uq-200h.png"
            className="s24-ho-climate-rectangle1"
          />
          <div className="s24-ho-climate-group3">
            <Link to="/" className="s24-ho-climate-text">
              Home
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </Link>
            <span className="s24-ho-climate-text01">About</span>
            <a
              href="https://www.instagram.com/rivers.streamline/"
              target="_blank"
              rel="noreferrer noopener"
              className="s24-ho-climate-text02"
            >
              <span>Instagram</span>
              <br></br>
              <br></br>
            </a>
            <Link to="/" className="s24-ho-climate-text06">
              <span>Read</span>
              <br></br>
            </Link>
          </div>
          <div className="s24-ho-climate-group1">
            <img
              alt="Ellipse1I145"
              src="/Streamline/logo_1-400h.png"
              className="s24-ho-climate-ellipse1"
            />
            <span className="s24-ho-climate-text09">The Rivers Streamline</span>
          </div>
        </div>
        <div className="s24-ho-climate-content1">
          <div className="s24-ho-climate-main-content">
            <div className="s24-ho-climate-content2">
              <div className="s24-ho-climate-oarticle">
                <div className="s24-ho-climate-blog-info">
                  <div className="s24-ho-climate-heading">
                    <span className="s24-ho-climate-text10">
                      The Brink of Catastrophe: Climate Change’s Disastrous
                      Effects
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="s24-ho-climate-short-info">
                    <div className="s24-ho-climate-aauthor">
                      <img
                        alt="ImageI2101"
                        src="https://bbk12e1-cdn.myschoolcdn.com/54/photo/orig_photo1893248_10058280.png?"
                        className="s24-ho-climate-image"
                      />
                      <span className="s24-ho-climate-text11">Andrew Ho</span>
                    </div>
                    <span className="s24-ho-climate-text12">Spring 2024</span>
                  </div>
                </div>
                <img
                  alt="Image2101"
                  src="https://oceanservice.noaa.gov/facts/sea-ice.jpg"
                  loading="lazy"
                  className="s24-ho-climate-image1"
                />
                <div className="s24-ho-climate-para">
                  <span className="s24-ho-climate-text13 AMainArticleText">
                    As Florida faces the looming threat of one-third of its land
                    submerged within three decades due to climate change, a
                    chilling parallel emerges with the ancient
                    Ordovician-Silurian extinction.
                  </span>
                </div>
                <div className="s24-ho-climate-para1">
                  <span className="s24-ho-climate-text14 AMainArticleText">
                    <span>
                      {' '}
                      In thirty years, one-third of Florida could be underwater.
                      This is a dramatic estimation, but it is rooted in
                      scientific evidence of rising sea levels due to warmer
                      weather. In fact, many scientists believe that we are
                      causing the sixth mass extinction of Earth’s history.
                      Interestingly, a type of climate change was actually one
                      of the root causes of the first mass extinction
                    </span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div className="s24-ho-climate-quote">
                  <span className="s24-ho-climate-text18 ArticlequoteRegular">
                    &quot;Many scientists believe that we are causing the sixth
                    mass extinction of Earth’s history.&quot;
                  </span>
                </div>
                <div className="s24-ho-climate-para2">
                  <span className="s24-ho-climate-text19 AMainArticleText">
                    <span className="s24-ho-climate-text20">
                      The first mass extinction, known as the
                      Ordovician-Silurian extinction, occurred 443.8 million
                      years ago. During the Ordovician period, there occurred a
                      flourishing in marine life and early terrestrial animals.
                      Underground minerals named silicates were responsible for
                      absorbing any CO2 that the Earth naturally produced.
                      Unfortunately, the silicates began absorbing too much CO2,
                      and the Earth cooled to an uncomfortably cold temperature.
                      Eventually, the Earth became so cold that ice sheets began
                      to form on the ground; these ice sheets in turn blocked
                      the silicates from absorbing CO2.This blockage was not a
                      solution, however. In fact, it caused an even more
                      devastating problem. As there was nothing to absorb the
                      amounts of CO2 produced on Earth, the atmosphere began to
                      warm to hotter temperatures. In response to warmer
                      temperatures, the ice sheets melted and produced large
                      floods of water which devastated life forms globally.
                      Ironically, the dissolution of the ice sheets caused the
                      silicates to begin absorbing CO2 again, restarting a fatal
                      cycle of negative feedback.
                    </span>
                    <br className="s24-ho-climate-text21"></br>
                  </span>
                </div>
                <img
                  alt="Image2101"
                  src="https://assets2.fossilera.com/sp/494821/epidote/epidote.jpg"
                  className="s24-ho-climate-image2"
                />
                <div className="s24-ho-climate-para3">
                  <span className="ArticlequoteRegular">
                    An image of silicate.
                  </span>
                  <span className="s24-ho-climate-text23 AMainArticleText">
                    <span>
                      This blockage was not a solution, however. In fact, it
                      caused an even more devastating problem. As there was
                      nothing to absorb the amounts of CO2 produced on Earth,
                      the atmosphere began to warm to hotter temperatures. In
                      response to warmer temperatures, the ice sheets melted and
                      produced large floods of water which devastated life forms
                      globally. Ironically, the dissolution of the ice sheets
                      caused the silicates to begin absorbing CO2 again,
                      restarting a fatal cycle of negative feedback.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      At the rate at which our world is heating up, the human
                      race will not last much longer. As authority decides to
                      ignore the devastating problem of climate change, they
                      ignore the extinction of our own population. As we sink
                      down into oblivion, one can’t help but wonder at the
                      stupidity of the human race. This has all happened before;
                      we just realized a little too late.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="s24-ho-climate-oconclusion">
                <div className="s24-ho-climate-para4">
                  <span className="s24-ho-climate-text29">Sources:</span>
                  <span className="s24-ho-climate-text30">
                    <span>
                      [Britannica] ⇒
                      https://www.britannica.com/list/major-mass-extinctions
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      [CBS News] =&gt;
                      https://www.cbsnews.com/miami/news/scientists-warn-south-florida-coastal-cities-will-be-affected-by-sea-level-rise/#:~:text=So%20what%20does%20that%20mean,Dade%20county%20will%20be%20underwater.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      Image
                      -&gt; https://oceanservice.noaa.gov/facts/sea-ice.jpg
                    </span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer" className="s24-ho-climate-footer">
          <div className="s24-ho-climate-contents">
            <span className="s24-ho-climate-text41">
              <span className="s24-ho-climate-text42">Contact Us</span>
              <br></br>
            </span>
            <span className="s24-ho-climate-text44">
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
          <div className="s24-ho-climate-contents1">
            <span className="s24-ho-climate-text56">
              <span className="s24-ho-climate-text57">About</span>
              <br></br>
            </span>
            <span className="s24-ho-climate-text59">
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
            className="s24-ho-climate-image3"
          />
        </div>
      </div>
    </div>
  )
}

export default S24HoClimate
