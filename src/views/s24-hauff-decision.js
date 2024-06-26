import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './s24-hauff-decision.css'

const S24HauffDecision = (props) => {
  return (
    <div className="s24-hauff-decision-container">
      <Helmet>
        <title>S24HauffDecision - Streamline</title>
        <meta
          name="description"
          content="Streamline - The Rivers School's STEM Magazine &amp; Outreach Club"
        />
        <meta property="og:title" content="S24HauffDecision - Streamline" />
        <meta
          property="og:description"
          content="Streamline - The Rivers School's STEM Magazine &amp; Outreach Club"
        />
      </Helmet>
      <div className="s24-hauff-decision-content">
        <div className="s24-hauff-decision-nav-bar">
          <img
            alt="Rectangle1I145"
            src="/external/rectangle1i145-k1uq-200h.png"
            className="s24-hauff-decision-rectangle1"
          />
          <div className="s24-hauff-decision-group3">
            <Link to="/" className="s24-hauff-decision-text">
              Home
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </Link>
            <span className="s24-hauff-decision-text01">About</span>
            <a
              href="https://www.instagram.com/rivers.streamline/"
              target="_blank"
              rel="noreferrer noopener"
              className="s24-hauff-decision-text02"
            >
              <span>Instagram</span>
              <br></br>
              <br></br>
            </a>
            <Link to="/" className="s24-hauff-decision-text06">
              <span>Read</span>
              <br></br>
            </Link>
          </div>
          <div className="s24-hauff-decision-group1">
            <img
              alt="Ellipse1I145"
              src="/Streamline/logo_1-400h.png"
              className="s24-hauff-decision-ellipse1"
            />
            <span className="s24-hauff-decision-text09">
              The Rivers Streamline
            </span>
          </div>
        </div>
        <div className="s24-hauff-decision-content1">
          <div className="s24-hauff-decision-main-content">
            <div className="s24-hauff-decision-content2">
              <div className="s24-hauff-decision-oarticle">
                <div className="s24-hauff-decision-blog-info">
                  <div className="s24-hauff-decision-heading">
                    <span className="s24-hauff-decision-text10">
                      Head vs. Heart: The Science Behind Decision Making
                    </span>
                  </div>
                  <div className="s24-hauff-decision-short-info">
                    <div className="s24-hauff-decision-aauthor">
                      <img
                        alt="ImageI2101"
                        src="/external/imagei2101-pano-200h.png"
                        className="s24-hauff-decision-image"
                      />
                      <span className="s24-hauff-decision-text11">
                        Taylor Hauff &apos;25
                      </span>
                    </div>
                    <span className="s24-hauff-decision-text12">
                      Spring 2024
                    </span>
                  </div>
                </div>
                <img
                  alt="Image2101"
                  src="https://www.insperity.com/wp-content/uploads/decision_making_process_1200x630-1.png"
                  loading="lazy"
                  className="s24-hauff-decision-image1"
                />
                <span className="s24-hauff-decision-text13 ArticlequoteRegular">
                  <span className="s24-hauff-decision-text14"></span>
                  <span>
                    Understanding the complex science behind decision making and
                    the divide between logical reasoning and impulsiveness can
                    lead to making better choices in everyday life.
                  </span>
                  <br className="s24-hauff-decision-text16"></br>
                </span>
                <div className="s24-hauff-decision-para"></div>
                <div className="s24-hauff-decision-para1">
                  <span className="s24-hauff-decision-text17 AMainArticleText">
                    <span className="s24-hauff-decision-text18 AMainArticleText"></span>
                    <span className="s24-hauff-decision-text19">
                      Have you ever been in a situation where you have two
                      options but can’t seem to choose one? This could be a
                      decision that is as simple as what flavor of ice cream to
                      get or as important as choosing a college major.
                      Regardless of the importance, decision making is something
                      that we do hundreds of times each day. Even though
                      it&apos;s such a crucial part of our lives, the science
                      behind exactly why and how we make these decisions is
                      often overlooked.
                    </span>
                    <br className="s24-hauff-decision-text20"></br>
                    <br className="s24-hauff-decision-text21"></br>
                    <span className="s24-hauff-decision-text22">
                      Our brain and heart work together in a “dual-process
                      theory.” The brain analyzes the choices presented to make
                      a logical decision while the heart’s decision is based on
                      instinct, desire, or impulse. Often, the heart can often
                      override the brain. Our biases, emotions, and memories
                      also influence the ways we approach a situation, along
                      with the opinions of our friends and family, the media,
                      and social norms. Unsurprisingly, it is difficult for us
                      to make decisions in limited time, without enough
                      information, or with limited resources available because
                      our brain doesn’t have specific information on how to make
                      that decision. 
                    </span>
                    <br className="s24-hauff-decision-text23"></br>
                    <br className="s24-hauff-decision-text24"></br>
                    <span className="s24-hauff-decision-text25">
                      One field of research that is studying social,
                      psychological, and emotional factors associated with
                      decision making and risk assessment is behavioral
                      economics. Studies have shown that there is a different
                      psychological risk to being betrayed (i.e, losing your
                      trust in someone) from the risk of losing something with
                      value, like money or a possession. Because of this, our
                      risk assessment is affected by our brain’s strong
                      “betrayal aversion” and our goal to avoid this cognitive
                      danger.
                    </span>
                    <br className="s24-hauff-decision-text26 AMainArticleText"></br>
                  </span>
                </div>
                <div className="s24-hauff-decision-quote">
                  <span className="s24-hauff-decision-text27 ArticlequoteRegular">
                    &quot;Often, the heart can often override the brain. Our
                    biases, emotions, and memories also influence the ways we
                    approach a situation, along with the opinions of our friends
                    and family, the media, and social norms.&quot;
                  </span>
                </div>
                <div className="s24-hauff-decision-para2">
                  <span className="s24-hauff-decision-text28">
                    <span className="AMainArticleText">
                      Neuroeconomics, another field that analyzes our brain,
                      uses methods such as functional magnetic resonance imaging
                      (fMRI) that can see the anatomy and physiology behind
                      decision making. fMRI allows researchers to determine
                      which sections of the brain are working the most during
                      certain tasks like crossword puzzles or psychological mind
                      games. Scientists can then use these findings along with
                      other cognitive experiments to determine how your brain
                      uses information in decisions. For example, research has
                      deduced that the neuropeptide hormone oxytocin affects how
                      much trust we have in other people. The oxytocin hormone
                      is created in the hypothalamus, the section of the brain
                      that regulates the hormones in our body and keeps us in a
                      stable state of homeostasis. Additionally, oxytocin is
                      known to moderate social behavior in humans and animals,
                      which aligns with its role of managing trust.
                    </span>
                    <br className="s24-hauff-decision-text30"></br>
                    <br className="AMainArticleText"></br>
                    <span className="AMainArticleText">
                      The context of a situation also plays a role in how risk
                      and decisions are evaluated. One simple, common example is
                      the Ebbinghaus Illusion. In Figure 1, the yellow dots in
                      the middle are the same size, but because of the spacing
                      and size of the gray dots around them, the dot on the
                      right appears to be larger. Even though this illusion has
                      been tediously studied, the neural and perceptual
                      mechanisms responsible for this effect continue to be
                      debated among scientists.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="s24-hauff-decision-text33"></br>
                    <br className="AMainArticleText"></br>
                  </span>
                </div>
                <img
                  alt="Image2101"
                  src="https://openclipart.org/image/2400px/svg_to_png/269872/EbbinghausIllusion.png"
                  className="s24-hauff-decision-image2"
                />
                <span className="s24-hauff-decision-text35">
                  <span className="AMainArticleText">
                    Scientists have also researched how misinformation affects
                    the brain. In our current world, we consume information from
                    many different sources including social media, the internet,
                    and television. Our brain automatically has a neurological
                    bias (to a certain extent), which can be difficult to alter
                    when presented with alternative facts. Thus, if we take in
                    incorrect information first, it is increasingly challenging
                    to update our memories when we are met with the correct
                    facts, which consequently affects our judgment.
                    Surprisingly, this occurs even if we are aware that the
                    original information was incorrect or if we are informed
                    ahead of time that we will be receiving misinformation.
                    Scientists call this “continued influence effect of
                    misinformation.”
                  </span>
                  <br className="s24-hauff-decision-text37"></br>
                  <br className="AMainArticleText"></br>
                  <span className="AMainArticleText">
                    But if we have all of this information, bias, experience,
                    and context that contributes to our decision making process,
                    why can we be so indecisive at times? Researchers have
                    investigated this behavior and termed it indecision or
                    decisional procrastination. Indecisiveness is not lazy, but
                    it is the avoidance of needing to make a typically stressful
                    or important decision. Delaying a decision is seen as a
                    strategy of avoiding the imagined negative consequences
                    altogether, but putting it off is only a short-term solution
                    that leads to more anxiety and stress in the long term.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="s24-hauff-decision-text40"></br>
                  <br className="AMainArticleText"></br>
                  <span className="AMainArticleText">
                    If indecisiveness is bad for the long term, why is it so
                    easy to fall into the trap of decisional procrastination?
                    Studies have shown that the logical side of our brain that
                    understands long-term goals and consequences is in a
                    constant fight with the emotional, impulsive side. When we
                    get really close to getting a reward, our emotional brain
                    wins because of all of the dopamine that is released. Later,
                    when our brain calms down later, our logical side gains back
                    control and we may regret the decision.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="s24-hauff-decision-text43"></br>
                  <br className="AMainArticleText"></br>
                </span>
                <span className="s24-hauff-decision-text45 AMainArticleText">
                  All in all, we are in a constant tug-of-war between rational
                  analyzing and emotional impulsiveness. Whether this leads to a
                  quick choice or prolonged indecision, understanding the
                  science behind decision making can help us make more informed
                  and efficient decisions in our everyday lives.
                </span>
              </div>
              <div className="s24-hauff-decision-oconclusion">
                <div className="s24-hauff-decision-para3">
                  <span className="s24-hauff-decision-text46">Sources:</span>
                  <span className="s24-hauff-decision-text47">
                    <span>
                      https://openclipart.org/image/2400px/svg_to_png/269872/EbbinghausIllusion.png
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
        <div id="footer" className="s24-hauff-decision-footer">
          <div className="s24-hauff-decision-contents">
            <span className="s24-hauff-decision-text51">
              <span className="s24-hauff-decision-text52">Contact Us</span>
              <br></br>
            </span>
            <span className="s24-hauff-decision-text54">
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
          <div className="s24-hauff-decision-contents1">
            <span className="s24-hauff-decision-text66">
              <span className="s24-hauff-decision-text67">About</span>
              <br></br>
            </span>
            <span className="s24-hauff-decision-text69">
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
            className="s24-hauff-decision-image3"
          />
        </div>
      </div>
    </div>
  )
}

export default S24HauffDecision
