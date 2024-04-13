import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Streamline</title>
        <meta
          name="description"
          content="Streamline - The Rivers School's STEM Magazine &amp; Outreach Club"
        />
        <meta property="og:title" content="Streamline" />
        <meta
          property="og:description"
          content="Streamline - The Rivers School's STEM Magazine &amp; Outreach Club"
        />
      </Helmet>
      <img
        alt="background"
        src="/banner-1500w.png"
        className="home-rectangle3"
      />
      <div className="home-content">
        <div className="home-group9107">
          <div className="home-herosection">
            <div className="home-small-text">
              <span className="home-text">
                <span className="home-text001">
                  Streamline is The Rivers School&apos;s STEM Magazine and
                  Outreach club.
                </span>
                <br className="home-text002"></br>
                <span className="home-text003">
                  {' '}
                  We aim to promote student engagement in STEM by featuring
                  student writing and initiating outreach projects.
                </span>
                <br className="home-text004"></br>
                <br></br>
              </span>
            </div>
            <span className="home-title">The Rivers Streamline</span>
          </div>
          <div className="home-nav-bar">
            <img
              alt="Rectangle1I145"
              src="/external/rectangle1i145-k1uq-200h.png"
              className="home-rectangle1"
            />
            <div className="home-group3">
              <Link to="/" className="home-text006">
                Home
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </Link>
              <span className="home-text007">About</span>
              <a
                href="https://www.instagram.com/rivers.streamline/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-text008"
              >
                <span>Instagram</span>
                <br></br>
                <br></br>
              </a>
              <a href="#featured_articles" className="home-text012">
                <span>Read</span>
                <br></br>
              </a>
            </div>
            <div className="home-group1">
              <img
                alt="Ellipse1I145"
                src="/Streamline/logo_1-400h.png"
                className="home-ellipse1"
              />
              <span className="home-text015">The Rivers Streamline</span>
            </div>
          </div>
        </div>
        <span id="featured_articles" className="Headingh3Semibold">
          Read articles from our Spring 2024 Edition:
        </span>
        <div className="home-content01">
          <div className="home-opostlayout">
            <div className="home-content02">
              <div className="home-row">
                <Link to="/s24-yan-lidar" className="home-navlink">
                  <div className="home-mpostcardgrid">
                    <img
                      alt="Rectangle382141"
                      src="https://media.evkx.net/multimedia/technology/sensorsandcameras/lidar/HD_Maps_Luminar.png"
                      className="home-rectangle38"
                    />
                    <div className="home-content03">
                      <div className="home-heading">
                        <span className="home-text017 Headingh3Semibold">
                          <span>
                            How Technology Sees the World: An Introduction to
                            LiDAR
                          </span>
                          <span className="Headingh3Semibold">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="home-short-info">
                        <div className="home-aauthor">
                          <img
                            alt="Chelsea Yan"
                            src="https://media.licdn.com/dms/image/D4E03AQG8BCTS3UbLUQ/profile-displayphoto-shrink_200_200/0/1698980278514?e=2147483647&amp;v=beta&amp;t=r3hbPtnCLclwO7tLpnYkJDLc1oMmPFs1SawDI482AkA"
                            className="home-image"
                          />
                          <span className="home-text020">
                            <span className="Bodyb4Medium">
                              Chelsea Yan &apos;25
                            </span>
                            <br></br>
                          </span>
                        </div>
                        <span className="home-text023 Bodyb4Regular">
                          Spring 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/s24-ho-climate" className="home-navlink01">
                  <div className="home-mpostcardgrid01">
                    <img
                      alt="Rectangle382141"
                      src="https://oceanservice.noaa.gov/facts/sea-ice.jpg"
                      className="home-rectangle3801"
                    />
                    <div className="home-content04">
                      <div className="home-heading01">
                        <span className="home-text024 Headingh3Semibold">
                          <span>
                            The Brink of Catastrophe: Climate Change’s
                            Disastrous Effects
                          </span>
                          <span className="home-text026 Headingh3Semibold">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="home-short-info01">
                        <div className="home-aauthor01">
                          <img
                            alt="Andrew Ho"
                            src="https://bbk12e1-cdn.myschoolcdn.com/54/photo/orig_photo1893248_10058280.png?"
                            className="home-image01"
                          />
                          <span className="home-text027">
                            <span className="Bodyb4Medium">
                              Andrew Ho &apos;25
                            </span>
                            <br></br>
                          </span>
                        </div>
                        <span className="home-text030 Bodyb4Regular">
                          Spring 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/s24-jang-skincare" className="home-navlink02">
                  <div className="home-mpostcardgrid02">
                    <img
                      alt="Rectangle382141"
                      src="https://media.istockphoto.com/id/1399453703/photo/closeup-of-one-young-indian-man-applying-moisturiser-lotion-to-his-face-while-grooming.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=Se_vfd4Bi8bEQNoZ7fjWAg0l7mOqDstCI_KkZBfmM40="
                      className="home-rectangle3802"
                    />
                    <div className="home-content05">
                      <div className="home-heading02">
                        <span className="home-text031 Headingh3Semibold">
                          A Cold-Weather Skincare Routine, Backed by Chemistry
                        </span>
                      </div>
                      <div className="home-short-info02">
                        <div className="home-aauthor02">
                          <img
                            alt="Justin"
                            src="https://media.licdn.com/dms/image/D4E03AQGEFY79DQ6dqA/profile-displayphoto-shrink_200_200/0/1711897297393?e=1717632000&amp;v=beta&amp;t=8j36Gy5i2vxXPICX9m-4yxHHxIstWakgvittJuACriQ"
                            className="home-image02"
                          />
                          <span className="home-text032 Bodyb4Medium">
                            Justin Jang &apos;25
                          </span>
                        </div>
                        <span className="home-text033 Bodyb4Regular">
                          Spring 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="home-row1">
                <Link to="/s24-hauff-decision" className="home-navlink03">
                  <div className="home-mpostcardgrid03">
                    <img
                      alt="decisions"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Mond-vergleich.svg/640px-Mond-vergleich.svg.png"
                      className="home-rectangle3803"
                    />
                    <div className="home-content06">
                      <div className="home-heading03">
                        <span className="home-text034">
                          <span className="Headingh3Semibold">
                            Head vs. Heart: The Science Behind Decision Making
                          </span>
                          <br></br>
                          <br></br>
                        </span>
                      </div>
                      <div className="home-short-info03">
                        <div className="home-aauthor03">
                          <img
                            alt="ImageI2141"
                            src="/external/imagei2101-pano-200h.png"
                            className="home-image03"
                          />
                          <span className="home-text038 Bodyb4Medium">
                            Taylor Hauff &apos;25
                          </span>
                        </div>
                        <span className="home-text039 Bodyb4Regular">
                          Spring 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/s24-canty-kessler" className="home-navlink04">
                  <div className="home-mpostcardgrid04">
                    <img
                      alt="Rectangle382141"
                      src="https://www.innovationnewsnetwork.com/wp-content/uploads/2021/02/images-of-space-debris.jpg"
                      className="home-rectangle3804"
                    />
                    <div className="home-content07">
                      <div className="home-heading04">
                        <span className="home-text040 Headingh3Semibold">
                          Space trash: coming to a space station near you at
                          15km/s
                        </span>
                      </div>
                      <div className="home-short-info04">
                        <div className="home-aauthor04">
                          <img
                            alt="ImageI2141"
                            src="/external/imagei2101-pano-200h.png"
                            className="home-image04"
                          />
                          <span className="home-text041">
                            <span className="Bodyb4Medium">
                              Evan Canty &apos;26
                            </span>
                            <br></br>
                          </span>
                        </div>
                        <span className="home-text044">
                          <span className="Bodyb4Regular">Spring 2024</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/s24-young-worlds" className="home-navlink05">
                  <div className="home-mpostcardgrid05">
                    <img
                      alt="Rectangle382141"
                      src="https://www.techspot.com/articles-info/1851/images/2019-05-26-image-6-j_1100.webp"
                      className="home-rectangle3805"
                    />
                    <div className="home-content08">
                      <div className="home-heading05">
                        <span className="home-text047">
                          <span className="Headingh3Semibold">
                            How Computers Create Realistic 3D Worlds
                          </span>
                          <br></br>
                          <br></br>
                        </span>
                      </div>
                      <div className="home-short-info05">
                        <div className="home-aauthor05">
                          <img
                            alt="ImageI2141"
                            src="/external/imagei2101-pano-200h.png"
                            className="home-image05"
                          />
                          <span className="home-text051 Bodyb4Medium">
                            Alex Young &apos;25
                          </span>
                        </div>
                        <span className="home-text052 Bodyb4Regular">
                          Spring 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="home-row2">
                <Link to="/s24-do-homeless" className="home-navlink06">
                  <div className="home-mpostcardgrid06">
                    <img
                      alt="Rectangle382141"
                      src="https://www.bu.edu/files/2022/01/feat-AP_21349775704129.jpg"
                      className="home-rectangle3806"
                    />
                    <div className="home-content09">
                      <div className="home-heading06">
                        <span className="home-text053 Headingh3Semibold">
                          Ethical Issues Raised by Patient Non-Adherence in the
                          Homeless Population
                        </span>
                      </div>
                      <div className="home-short-info06">
                        <div className="home-aauthor06">
                          <img
                            alt="joycepic"
                            src="https://static1.squarespace.com/static/5eed20d3507c013ac01ba571/5ef78a2775467b19acc150ff/6528a9dc757eff001f409cdb/1697210792736/IMG_4744+-+Joyce+Do+Cropped+2.PNG?format=1500w"
                            className="home-image06"
                          />
                          <span className="home-text054">
                            Joyce Do &apos;25
                          </span>
                        </div>
                        <span className="home-text055 Bodyb4Regular">
                          Spring 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/s24-willard-med" className="home-navlink07">
                  <div className="home-mpostcardgrid07">
                    <img
                      alt="Rectangle382141"
                      src="https://bbk12e1-cdn.myschoolcdn.com/54/photo/orig_photo1880787_9981392.png?"
                      className="home-rectangle3807"
                    />
                    <div className="home-content10">
                      <div className="home-heading07">
                        <span className="home-text056 Headingh3Semibold">
                          MED Club helps students find footing among medical
                          opportunities
                        </span>
                      </div>
                      <div className="home-short-info07">
                        <div className="home-aauthor07">
                          <img
                            alt="ImageI2141"
                            src="https://media.licdn.com/dms/image/D4D03AQGxXtIRz006KA/profile-displayphoto-shrink_100_100/0/1709155055521?e=1717632000&amp;v=beta&amp;t=pkIpqo0rkkgZDXj4ZdZzgfg11FBFX-F3iQF6l8zxrKw"
                            className="home-image07"
                          />
                          <span className="home-text057 Bodyb4Medium">
                            Jack Willard &apos;24
                          </span>
                        </div>
                        <span className="home-text058">Spring 2024</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/s24-shah-xenotransplantation"
                  className="home-navlink08"
                >
                  <div className="home-mpostcardgrid08">
                    <img
                      alt="Rectangle382141"
                      src="https://biotechhealth.com/wp-content/uploads/2020/08/lab-pig.jpg"
                      className="home-rectangle3808"
                    />
                    <div className="home-content11">
                      <div className="home-heading08">
                        <span className="home-text059">
                          <span className="Headingh3Semibold">
                            Ethical Considerations of Xenotransplantation
                          </span>
                          <br></br>
                          <br></br>
                        </span>
                      </div>
                      <div className="home-short-info08">
                        <div className="home-aauthor08">
                          <img
                            alt="ImageI2141"
                            src="https://media.licdn.com/dms/image/D4E03AQG1nzF2uoTvcw/profile-displayphoto-shrink_100_100/0/1696547465492?e=1717632000&amp;v=beta&amp;t=8f4dnK3TuZ1RzblIvjhrR6TYNGcY0fBTeEMw6ZLfaAU"
                            className="home-image08"
                          />
                          <span className="home-text063 Bodyb4Medium">
                            Lily Shah &apos;25
                          </span>
                        </div>
                        <span className="home-text064 Bodyb4Regular">
                          Spring 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="home-row3">
                <Link to="/s24-soares-cosmetics" className="home-navlink09">
                  <div className="home-mpostcardgrid09">
                    <img
                      alt="Rectangle382141"
                      src="https://sensient-beauty.com/wp-content/uploads/2023/07/Dye-Pigment-Website-Featured-Image.jpg"
                      className="home-rectangle3809"
                    />
                    <div className="home-content12">
                      <div className="home-heading09">
                        <span className="home-text065 Headingh3Semibold">
                          Making sense of consumer cosmetics through Chemistry
                        </span>
                      </div>
                      <div className="home-short-info09">
                        <div className="home-aauthor09">
                          <img
                            alt="ImageI2141"
                            src="/external/imagei2101-pano-200h.png"
                            className="home-image09"
                          />
                          <span className="home-text066">
                            Lily Soares &apos;27
                          </span>
                        </div>
                        <span className="home-text067 Bodyb4Regular">
                          Spring 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/s24-ho-ross" className="home-navlink10">
                  <div className="home-mpostcardgrid10">
                    <img
                      alt="Rectangle382141"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNSNdfjftOAPowg18lePB9woqZtqRYiQUo2EHYlteRQ&amp;s"
                      className="home-rectangle3810"
                    />
                    <div className="home-content13">
                      <div className="home-heading10">
                        <span className="home-text068 Headingh3Semibold">
                          ROSS - The Astronomical Life That You Have Never Heard
                          Of
                        </span>
                      </div>
                      <div className="home-short-info10">
                        <div className="home-aauthor10">
                          <img
                            alt="ImageI2141"
                            src="https://bbk12e1-cdn.myschoolcdn.com/54/photo/orig_photo1893248_10058280.png?"
                            className="home-image10"
                          />
                          <span className="home-text069 Bodyb4Medium">
                            Andrew Ho &apos;25
                          </span>
                        </div>
                        <span className="home-text070">Spring 2024</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/s24-li-rbc-folate" className="home-navlink11">
                  <div className="home-mpostcardgrid11">
                    <img
                      alt="Rectangle382141"
                      src="https://healthinfo.healthengine.com.au/assets/red-blood-cells-3188223_1280-1-1024x614.jpg"
                      className="home-rectangle3811"
                    />
                    <div className="home-content14">
                      <div className="home-heading11">
                        <span className="home-text071">
                          <span className="Headingh3Semibold">
                            RBC Folate’s Effect on Cardiovascular Disease
                          </span>
                          <br></br>
                          <br></br>
                        </span>
                      </div>
                      <div className="home-short-info11">
                        <div className="home-aauthor11">
                          <img
                            alt="ImageI2141"
                            src="/external/imagei2101-pano-200h.png"
                            className="home-image11"
                          />
                          <span className="home-text075 Bodyb4Medium">
                            Zimon Li &apos;26
                          </span>
                        </div>
                        <span className="home-text076 Bodyb4Regular">
                          Spring 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="home-row4">
                <Link to="/s24-lidforss-crispr" className="home-navlink12">
                  <div className="home-mpostcardgrid12">
                    <img
                      alt="nicolecrispr"
                      src="https://www.iberdrola.com/documents/20125/1527375/CRISPR-726x484.jpg/46cb36ee-b5e4-9ef6-47b1-2094abac7909?t=1642007315492"
                      className="home-rectangle3812"
                    />
                    <div className="home-content15">
                      <div className="home-heading12">
                        <span className="home-text077 Headingh3Semibold">
                          An Exploration of CRISPR in Sickle Cell Disease
                          Treatment
                        </span>
                      </div>
                      <div className="home-short-info12">
                        <div className="home-aauthor12">
                          <img
                            alt="ImageI2141"
                            src="/external/imagei2101-pano-200h.png"
                            className="home-image12"
                          />
                          <span className="home-text078">
                            Nicole Lidforss &apos;25
                          </span>
                        </div>
                        <span className="home-text079 Bodyb4Regular">
                          Spring 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/s24-soares-decisions" className="home-navlink13">
                  <div className="home-mpostcardgrid13">
                    <img
                      alt="Rectangle382141"
                      src="https://www.safebridge.net/wp-content/uploads/2021/07/Untitled-770x400-1.png"
                      className="home-rectangle3813"
                    />
                    <div className="home-content16">
                      <div className="home-heading13">
                        <span className="home-text080 Headingh3Semibold">
                          MED Club helps students find footing among medical
                          opportunities
                        </span>
                      </div>
                      <div className="home-short-info13">
                        <div className="home-aauthor13">
                          <img
                            alt="ImageI2141"
                            src="/external/imagei2101-pano-200h.png"
                            className="home-image13"
                          />
                          <span className="home-text081 Bodyb4Medium">
                            Lily Soares &apos;27
                          </span>
                        </div>
                        <span className="home-text082">Spring 2024</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/s24-bio-builders-project" className="home-navlink14">
                  <div className="home-mpostcardgrid14">
                    <img
                      alt="Rectangle382141"
                      src="/Streamline/biobuilders1-400w.png"
                      className="home-rectangle3814"
                    />
                    <div className="home-content17">
                      <div className="home-heading14">
                        <span className="home-text083">
                          <span className="Headingh3Semibold">
                            Collecting Data from Nonesuch Pond: A BioBuilders
                            Project
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="home-short-info14">
                        <div className="home-aauthor14">
                          <img
                            alt="ImageI2141"
                            src="https://www.finditcambridge.org/sites/default/files/styles/findit_opportunity_image_large/public/image/org/2020-09/BioBuilderEF_square.png?itok=z5qLfamF"
                            className="home-image14"
                          />
                          <span className="home-text086 Bodyb4Medium">
                            Rivers BioBuilders
                          </span>
                        </div>
                        <span className="home-text087 Bodyb4Regular">
                          Spring 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <button className="home-abutton">
              <span className="home-text088 Bodyb4Medium">
                <span>Load More</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div id="footer" className="home-footer">
        <div className="home-contents">
          <span className="home-text090">
            <span className="home-text091">Contact Us</span>
            <br></br>
          </span>
          <span className="home-text093">
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
        <div className="home-contents1">
          <span className="home-text105">
            <span className="home-text106">About</span>
            <br></br>
          </span>
          <span className="home-text108">
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
          className="home-image15"
        />
      </div>
    </div>
  )
}

export default Home
