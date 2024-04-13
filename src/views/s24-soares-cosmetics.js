import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './s24-soares-cosmetics.css'

const S24SoaresCosmetics = (props) => {
  return (
    <div className="s24-soares-cosmetics-container">
      <Helmet>
        <title>S24SoaresCosmetics - Streamline</title>
        <meta
          name="description"
          content="Streamline - The Rivers School's STEM Magazine &amp; Outreach Club"
        />
        <meta property="og:title" content="S24SoaresCosmetics - Streamline" />
        <meta
          property="og:description"
          content="Streamline - The Rivers School's STEM Magazine &amp; Outreach Club"
        />
      </Helmet>
      <div className="s24-soares-cosmetics-content">
        <div className="s24-soares-cosmetics-nav-bar">
          <img
            alt="Rectangle1I145"
            src="/external/rectangle1i145-k1uq-200h.png"
            className="s24-soares-cosmetics-rectangle1"
          />
          <div className="s24-soares-cosmetics-group3">
            <Link to="/" className="s24-soares-cosmetics-text">
              Home
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </Link>
            <span className="s24-soares-cosmetics-text01">About</span>
            <a
              href="https://www.instagram.com/rivers.streamline/"
              target="_blank"
              rel="noreferrer noopener"
              className="s24-soares-cosmetics-text02"
            >
              <span>Instagram</span>
              <br></br>
              <br></br>
            </a>
            <Link to="/" className="s24-soares-cosmetics-text06">
              <span>Read</span>
              <br></br>
            </Link>
          </div>
          <div className="s24-soares-cosmetics-group1">
            <img
              alt="Ellipse1I145"
              src="/Streamline/logo_1-400h.png"
              className="s24-soares-cosmetics-ellipse1"
            />
            <span className="s24-soares-cosmetics-text09">
              The Rivers Streamline
            </span>
          </div>
        </div>
        <div className="s24-soares-cosmetics-content1">
          <div className="s24-soares-cosmetics-main-content">
            <div className="s24-soares-cosmetics-content2">
              <div className="s24-soares-cosmetics-oarticle">
                <div className="s24-soares-cosmetics-blog-info">
                  <div className="s24-soares-cosmetics-heading">
                    <span className="s24-soares-cosmetics-text10">
                      Making sense of consumer cosmetics through Chemistry
                    </span>
                  </div>
                  <div className="s24-soares-cosmetics-short-info">
                    <div className="s24-soares-cosmetics-aauthor">
                      <img
                        alt="ImageI2101"
                        src="/external/imagei2101-pano-200h.png"
                        className="s24-soares-cosmetics-image"
                      />
                      <span className="s24-soares-cosmetics-text11">
                        Lily Soares &apos;27
                      </span>
                    </div>
                    <span className="s24-soares-cosmetics-text12">
                      Spring 2024
                    </span>
                  </div>
                </div>
                <img
                  alt="Image2101"
                  src="https://www.chemicalsafetyfacts.org/wp-content/uploads/shutterstock_1855701562-1000x563.png"
                  loading="lazy"
                  className="s24-soares-cosmetics-image1"
                />
                <span className="s24-soares-cosmetics-text13">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="ArticlequoteRegular">
                    The ingredients of cosmetics have become increasingly
                    scrutinized by the public. How do we make sense of the new
                    information we are hearing about?
                  </span>
                </span>
                <div className="s24-soares-cosmetics-para">
                  <span className="s24-soares-cosmetics-text16">
                    Cosmetics in the marketplace
                  </span>
                </div>
                <div className="s24-soares-cosmetics-para1">
                  <span className="s24-soares-cosmetics-text17">
                    <span className="AMainArticleText"></span>
                    <span className="AMainArticleText">
                      Most cosmetics in today’s marketplace contain many
                      ingredients that work to achieve the efficacy and safety
                      of the product. People use these products every day, but
                      have you ever looked at the ingredients on the label in a
                      bottle of shampoo? The average person will likely find
                      names of chemicals that are difficult to recognize and
                      decipher. All of these chemicals work to achieve the
                      product’s stated purpose and customer satisfaction. But
                      what specifically are these chemicals? How were they made?
                      Are they completely safe for our health? A closer
                      examination of the ingredients in many cosmetic products
                      will often reveal substances such as preservatives,
                      fragrances, pigmenters, smootheners, and cleansers.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="s24-soares-cosmetics-text20"></br>
                    <br className="AMainArticleText"></br>
                    <span className="AMainArticleText">
                      Manufacturers of cosmetics have a legal responsibility to
                      ensure their products are free from harmful bacteria and
                      are safe. Preservatives, like parabens, discourage harmful
                      bacterial growth in cosmetic products. Parabens are a
                      derivative of para hydroxybenzoic acid, a substance that
                      occurs “…naturally in many fruits and vegetables.” Very
                      often, one finds parabens in shampoos and conditioners.
                      However, recent studies have shown that parabens are
                      harmful to humans, potentially increasing the risk of
                      breast cancer. Chemists and dermatologists have pushed
                      back against this as well, stating that “paraben-free”
                      companies replace them with even more toxic chemicals,
                      such as methylisothiazolinone.
                    </span>
                    <br className="AMainArticleText"></br>
                  </span>
                </div>
                <img
                  alt="Image2101"
                  src="https://www.eisenberg.com/upload/images/eisenberg/55/716_SPRAY-AND-MIST_1170X619PX.jpeg"
                  className="s24-soares-cosmetics-image2"
                />
                <span className="s24-soares-cosmetics-text24">
                  <span>Perfumes and fragrances</span>
                  <br></br>
                </span>
                <div className="s24-soares-cosmetics-para2">
                  <span className="s24-soares-cosmetics-text27 AMainArticleText">
                    <span className="AMainArticleText">
                      Perfumes are another type of cosmetic that people use
                      frequently, such as when going to school, out to dinner,
                      or to a fancy event. Perfumes, like deodorant, shampoo,
                      and hair conditioner, all contain fragrances that enhance
                      the scent or smell of a particular product and are created
                      by the blending of both natural or artificial substances.
                      Aldehydes, for example, are compounds found in organic
                      materials, like roses. They are very sweet smelling and
                      typically come in perfumes. However, there are also
                      harmful chemicals in fragrances. For instance,
                      benzophenone may disrupt the endocrine system, which
                      regulates hormones, and butoxyethanol is a chemical which
                      can irritate one’s eyes and skin. Thus, fragrances have
                      their upsides as well as their downsides.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="AMainArticleText"></br>
                  </span>
                </div>
                <div className="s24-soares-cosmetics-quote">
                  <span className="s24-soares-cosmetics-text30 ArticlequoteRegular">
                    &quot;When it comes to makeup, cosmetics come in numerous
                    colors. Different chemicals may cause different pigments in
                    these products.&quot;
                  </span>
                </div>
                <span className="s24-soares-cosmetics-text31">
                  <span>Cosmetics</span>
                  <br></br>
                </span>
                <span className="s24-soares-cosmetics-text34">
                  <span className="AMainArticleText">
                    When it comes to makeup, cosmetics come in numerous colors.
                    Different chemicals may cause different pigments in these
                    products. Pigments are colored powders, which can be either
                    organic or inorganic. For instance, metals like
                    “Pigment-grade titanium dioxide [are] used in some cosmetics
                    to aid in hiding blemishes and brightening the skin.
                    Titanium dioxide allows for the use of thinner coatings of
                    make-up material for the same desired effect.” Thus, one can
                    find titanium dioxide in products like sunscreen, but
                    they’re used in almost every cosmetic. To get bright colors,
                    like the ones in eye shadow, chemicals like iron oxides can
                    make yellow, red, and black shades. There are many other
                    chemicals which produce colors for other cosmetics, like
                    lipstick, blush, or nail polish as well.
                  </span>
                  <br className="s24-soares-cosmetics-text36"></br>
                  <br className="AMainArticleText"></br>
                  <span className="AMainArticleText">
                    In moisturizers, “emollients are used to make cosmetics
                    smooth and easy to apply and make the skin feel softer and
                    smoother.” Through filling gaps between cells, a layer forms
                    on the outer cell and holds onto the moisture. Emollients
                    may “...treat dry, itchy skin conditions such as eczema and
                    psoriasis. [They] are found in creams, lotions, ointments,
                    and sprays.” Some common emollients in cosmetics include
                    mineral oil, petroleum jelly, and glycerin, which all bring
                    in moisture to the skin. Furthermore, citric acid, an
                    organic compound, helps brighten the skin. One typically
                    uses it near their eyes, lips, mouth, and nose.
                    Specifically, sodium citrate is a salt of citric acid and is
                    found in lipstick and soap, helping preserve them and adjust
                    their pH levels (their acidity) to kill harmful bacteria.
                  </span>
                  <br className="AMainArticleText"></br>
                </span>
                <img
                  alt="Image2101"
                  src="https://sensient-beauty.com/wp-content/uploads/2023/07/Dye-Pigment-Website-Featured-Image.jpg"
                  className="s24-soares-cosmetics-image3"
                />
                <span className="s24-soares-cosmetics-text40">Cleansers</span>
                <span className="s24-soares-cosmetics-text41 AMainArticleText">
                  <span>
                    Finally, cleansers are very significant in our every-day
                    lives, whether it’s during a shower or while brushing our
                    teeth. Surfactants are compounds used to reduce surface
                    tension of water. Reducing the surface tension of water
                    involves breaking its hydrogen bonds, which holds water to
                    itself in its cohesive property. In your shaving cream,
                    there are many surfactants, which allow razors to remove
                    hair easily due to the foam it produces, making a barrier
                    between the skin and the razor. Specifically, sodium lauryl
                    sulfate (SLS) is a surfactant which traps oil and dirt in
                    your hair in products like shampoo, making it easier for the
                    water to wash it away. In toothpaste, this creates foam to
                    remove the food from your teeth. Furthermore, Toluene (known
                    as methylbenzene) and Acetone are ingredients in nail polish
                    removers which dissolve and break down other particles.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Overall, every day, there are key elements of every cosmetic
                    we use which serve a different purpose. These elements can
                    differentiate cosmetics from each other as well. Its
                    important that we know which chemicals we apply on ourselves
                    in our everyday lives and how they are used, as some can
                    cause issues with our bodies.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <br className="AMainArticleText"></br>
                </span>
              </div>
              <div className="s24-soares-cosmetics-oconclusion">
                <div className="s24-soares-cosmetics-para3">
                  <span className="s24-soares-cosmetics-text48">Sources:</span>
                  <span className="s24-soares-cosmetics-text49">
                    <span>
                      https://sensient-beauty.com/insights/dye-or-pigment-using-the-right-ingredients-in-makeup-formulation/
                    </span>
                    <br className="s24-soares-cosmetics-text51"></br>
                    <br></br>
                    <span>https://dhanveenpigments.com/</span>
                    <br></br>
                    <br></br>
                    <span>
                      https://www.safecosmetics.org/chemicals/fragrance/
                    </span>
                    <br className="s24-soares-cosmetics-text57"></br>
                    <br></br>
                    <span>
                      https://www.eisenberg.com/pa1173/how-to-make-perfume-last-longer
                    </span>
                    <br className="s24-soares-cosmetics-text60"></br>
                    <br></br>
                    <span>
                      https://www.safecosmetics.org/chemicals/parabens/
                    </span>
                    <br className="s24-soares-cosmetics-text63"></br>
                    <br></br>
                    <span>
                      https://www.euromonitor.com/article/the-rise-of-ingredient-led-beauty
                    </span>
                    <br className="s24-soares-cosmetics-text66"></br>
                    <br></br>
                    <span>
                      https://www.chemicalsafetyfacts.org/health-and-safety/chemistry-of-cosmetics-20-chemicals-that-make-up-personal-care-products/#:~:text=Chemicals%20in%20personal%20care%20and,are%20used%20in%20your%20cosmetics
                    </span>
                    <br></br>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer" className="s24-soares-cosmetics-footer">
          <div className="s24-soares-cosmetics-contents">
            <span className="s24-soares-cosmetics-text72">
              <span className="s24-soares-cosmetics-text73">Contact Us</span>
              <br></br>
            </span>
            <span className="s24-soares-cosmetics-text75">
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
          <div className="s24-soares-cosmetics-contents1">
            <span className="s24-soares-cosmetics-text87">
              <span className="s24-soares-cosmetics-text88">About</span>
              <br></br>
            </span>
            <span className="s24-soares-cosmetics-text90">
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
            className="s24-soares-cosmetics-image4"
          />
        </div>
      </div>
    </div>
  )
}

export default S24SoaresCosmetics
