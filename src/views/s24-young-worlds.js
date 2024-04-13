import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './s24-young-worlds.css'

const S24YoungWorlds = (props) => {
  return (
    <div className="s24-young-worlds-container">
      <Helmet>
        <title>S24YoungWorlds - Streamline</title>
        <meta
          name="description"
          content="Streamline - The Rivers School's STEM Magazine &amp; Outreach Club"
        />
        <meta property="og:title" content="S24YoungWorlds - Streamline" />
        <meta
          property="og:description"
          content="Streamline - The Rivers School's STEM Magazine &amp; Outreach Club"
        />
      </Helmet>
      <div className="s24-young-worlds-content">
        <div className="s24-young-worlds-nav-bar">
          <img
            alt="Rectangle1I145"
            src="/external/rectangle1i145-k1uq-200h.png"
            className="s24-young-worlds-rectangle1"
          />
          <div className="s24-young-worlds-group3">
            <Link to="/" className="s24-young-worlds-text">
              Home
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </Link>
            <span className="s24-young-worlds-text01">About</span>
            <a
              href="https://www.instagram.com/rivers.streamline/"
              target="_blank"
              rel="noreferrer noopener"
              className="s24-young-worlds-text02"
            >
              <span>Instagram</span>
              <br></br>
              <br></br>
            </a>
            <Link to="/" className="s24-young-worlds-text06">
              <span>Read</span>
              <br></br>
            </Link>
          </div>
          <div className="s24-young-worlds-group1">
            <img
              alt="Ellipse1I145"
              src="/Streamline/logo_1-400h.png"
              className="s24-young-worlds-ellipse1"
            />
            <span className="s24-young-worlds-text09">
              The Rivers Streamline
            </span>
          </div>
        </div>
        <div className="s24-young-worlds-content1">
          <div className="s24-young-worlds-main-content">
            <div className="s24-young-worlds-content2">
              <div className="s24-young-worlds-oarticle">
                <div className="s24-young-worlds-blog-info">
                  <div className="s24-young-worlds-heading">
                    <span className="s24-young-worlds-text10">
                      How Computers Create Realistic 3D Worlds
                    </span>
                  </div>
                  <div className="s24-young-worlds-short-info">
                    <div className="s24-young-worlds-aauthor">
                      <img
                        alt="ImageI2101"
                        src="/external/imagei2101-pano-200h.png"
                        className="s24-young-worlds-image"
                      />
                      <span className="s24-young-worlds-text11">
                        Alex Young &apos;25
                      </span>
                    </div>
                    <span className="s24-young-worlds-text12">Spring 2024</span>
                  </div>
                </div>
                <img
                  alt="Image2101"
                  src="https://www.techspot.com/articles-info/1851/images/2019-05-26-image-6-j_1100.webp"
                  loading="lazy"
                  className="s24-young-worlds-image1"
                />
                <span className="s24-young-worlds-text13 ArticlequoteRegular">
                  <span className="s24-young-worlds-text14"></span>
                  <span className="s24-young-worlds-text15">
                    Rivers’ new computer science club explores the world of
                    computing
                  </span>
                  <br className="s24-young-worlds-text16"></br>
                </span>
                <div className="s24-young-worlds-para"></div>
                <div className="s24-young-worlds-para1">
                  <span className="s24-young-worlds-text17">
                    <span className="AMainArticleText"></span>
                    <span className="AMainArticleText">
                      Rivers’ computer science club is a new club we (Daniel
                      Connelly ‘25 and I) started this year. Meeting on Tuesday
                      once every two weeks, we typically discuss computer
                      related topics like code debugging, data mining, ChatGPT
                      (and how it works from a technical perspective), or 3D
                      graphics rendering. These discussion-based meetings do not
                      require prior experience with computer programming. In the
                      future, we hope to do more project focused work, where
                      members use their programming skills to explore and
                      develop things they are passionate about. This article
                      explains the details of computer graphics, a topic we
                      discussed in a February meeting.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="s24-young-worlds-text20"></br>
                    <br className="AMainArticleText"></br>
                    <span className="AMainArticleText">
                      In today’s world, video games contain stunning 3D worlds
                      with realistic grass, trees, water, and interiors with
                      reflections and immersive post processing effects. Many of
                      the processes used to create these worlds have existed
                      since 3D rendering was invented in the 1970s, but compared
                      to how many people interact with computer graphics every
                      day, few actually know what these processes are and how
                      they are used.
                    </span>
                    <br className="s24-young-worlds-text23"></br>
                    <br className="AMainArticleText"></br>
                    <span className="AMainArticleText">
                      The first step to rendering shapes in 3D is defining the
                      geometry of those shapes. A 3D shape, often referred to as
                      a mesh, contains vertices (points in space) and faces that
                      connect these vertices. Faces are almost always triangles
                      because triangles only require the connection of three
                      vertices and are the most efficient to render. Triangles
                      are defined by the vertices that make them up – so if a
                      triangle connects a mesh’s first, second and third vertex,
                      it would be defined as 0, 1, 2 (computers start counting
                      at 0). A cube, for example, has six vertices and twelve
                      triangles – two for each side. More complicated shapes
                      have more triangles and vertices and therefore take longer
                      to render. It is important to note that vertex positions
                      and triangles are not manually defined, unless a mesh is
                      extremely simple. Rather, meshes are produced in 3D
                      modeling softwares (e.g. Blender, Maya, 3ds Max) and
                      exported to text files (often in the .obj or .fbx format)
                      containing long lists of vertex positions and triangles
                      that computers are able to read and process.
                    </span>
                    <br className="AMainArticleText"></br>
                  </span>
                </div>
                <img
                  alt="Image2101"
                  src="https://www.techspot.com/articles-info/1851/images/2019-05-25-image-9-p_1100.webp"
                  className="s24-young-worlds-image2"
                />
                <div className="s24-young-worlds-para2">
                  <span className="s24-young-worlds-text27">
                    <span className="AMainArticleText">
                      If meshes are placed into a scene (meaning 3D world)
                      straight from the lists containing their geometry, they
                      would all overlap right at that scene’s origin. They must
                      be transformed – translated (moved around), rotated, or
                      scaled – in order to be in their proper positions. Moving
                      around a mesh is done by multiplying each of its vertices’
                      positions by a matrix that corresponds to a specific
                      translation, rotation, and scale. Matrices are grids of
                      numbers that, in the context of graphics programming, are
                      generally four by four in size and can be multiplied with
                      vectors (quantities with both direction and magnitude,
                      like a 3D coordinate) to modify them. While you can
                      interact with matrices in a linear algebra class,
                      professional programmers typically rely on math libraries
                      to do the math for them.
                    </span>
                    <br className="s24-young-worlds-text29"></br>
                    <br className="AMainArticleText"></br>
                    <span className="AMainArticleText">
                      Creating the effect of perspective, where distant objects
                      appear smaller than nearby objects, is done with more
                      matrix math. The analogy of a camera in a scene with a
                      position, orientation, and field of view is used commonly
                      when creating perspective. All vertices within the
                      camera’s frustum – or the physical area in which it can
                      see – are multiplied by a matrix derived from the camera’s
                      properties. This transformation projects these vertices
                      onto a 2D plane, and this 2D plane is the computer screen.
                      The camera is just an analogy because only the scene’s
                      vertex positions are changing. The position of the
                      viewpoint is technically stationary, and the scene is
                      moving around it.
                    </span>
                    <br className="AMainArticleText"></br>
                  </span>
                </div>
                <span className="s24-young-worlds-text33 ArticlequoteRegular">
                  . Computers need to be able to turn mathematical
                  representations of shapes into pixels that humans can see.
                </span>
                <span className="s24-young-worlds-text34 AMainArticleText">
                  <span>
                    One of the final steps in simple rendering is called
                    rasterization. Computers need to be able to turn
                    mathematical representations of shapes into pixels that
                    humans can see. A pixel is a tiny part of a larger screen
                    that is made up of just one color. Rasterization means going
                    through each pixel and determining which triangle in the
                    perspective projection (2D image of a scene) it fits into
                    and coloring it accordingly. Fortunately, graphics APIs like
                    OpenGL or Vulkan already have rasterization algorithms and
                    can do rasterization for us.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Of course, there are more steps to this process. 3D objects
                    have to be sorted by depth in order to determine what should
                    be visible to the camera. Each pixel of a 3D object
                    (sometimes called a fragment) is colored in a separate
                    program called a fragment shader to give it realistic
                    lighting. While there is always more to learn, we hope this
                    article gives you a good introduction on this topic and
                    inspires you to learn more about computer science in the
                    future.
                  </span>
                  <br></br>
                  <br></br>
                  <br></br>
                </span>
              </div>
              <div className="s24-young-worlds-oconclusion">
                <div className="s24-young-worlds-para3">
                  <span className="s24-young-worlds-text42">Sources:</span>
                  <span className="s24-young-worlds-text43">
                    https://www.techspot.com/article/1851-3d-game-rendering-explained/
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer" className="s24-young-worlds-footer">
          <div className="s24-young-worlds-contents">
            <span className="s24-young-worlds-text44">
              <span className="s24-young-worlds-text45">Contact Us</span>
              <br></br>
            </span>
            <span className="s24-young-worlds-text47">
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
          <div className="s24-young-worlds-contents1">
            <span className="s24-young-worlds-text59">
              <span className="s24-young-worlds-text60">About</span>
              <br></br>
            </span>
            <span className="s24-young-worlds-text62">
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
            className="s24-young-worlds-image3"
          />
        </div>
      </div>
    </div>
  )
}

export default S24YoungWorlds
