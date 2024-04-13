import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './s24-lidforss-crispr.css'

const S24LidforssCRISPR = (props) => {
  return (
    <div className="s24-lidforss-crispr-container">
      <Helmet>
        <title>S24LidforssCRISPR - Streamline</title>
        <meta
          name="description"
          content="Streamline - The Rivers School's STEM Magazine &amp; Outreach Club"
        />
        <meta property="og:title" content="S24LidforssCRISPR - Streamline" />
        <meta
          property="og:description"
          content="Streamline - The Rivers School's STEM Magazine &amp; Outreach Club"
        />
      </Helmet>
      <div className="s24-lidforss-crispr-content">
        <div className="s24-lidforss-crispr-nav-bar">
          <img
            alt="Rectangle1I145"
            src="/external/rectangle1i145-k1uq-200h.png"
            className="s24-lidforss-crispr-rectangle1"
          />
          <div className="s24-lidforss-crispr-group3">
            <Link to="/" className="s24-lidforss-crispr-text">
              Home
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </Link>
            <span className="s24-lidforss-crispr-text001">About</span>
            <a
              href="https://www.instagram.com/rivers.streamline/"
              target="_blank"
              rel="noreferrer noopener"
              className="s24-lidforss-crispr-text002"
            >
              <span>Instagram</span>
              <br></br>
              <br></br>
            </a>
            <Link to="/" className="s24-lidforss-crispr-text006">
              <span>Read</span>
              <br></br>
            </Link>
          </div>
          <div className="s24-lidforss-crispr-group1">
            <img
              alt="Ellipse1I145"
              src="/Streamline/logo_1-400h.png"
              className="s24-lidforss-crispr-ellipse1"
            />
            <span className="s24-lidforss-crispr-text009">
              The Rivers Streamline
            </span>
          </div>
        </div>
        <div className="s24-lidforss-crispr-content1">
          <div className="s24-lidforss-crispr-main-content">
            <div className="s24-lidforss-crispr-content2">
              <div className="s24-lidforss-crispr-oarticle">
                <div className="s24-lidforss-crispr-blog-info">
                  <div className="s24-lidforss-crispr-heading">
                    <span className="s24-lidforss-crispr-text010">
                      An Exploration of CRISPR in Sickle Cell Disease Treatment
                    </span>
                  </div>
                  <div className="s24-lidforss-crispr-short-info">
                    <div className="s24-lidforss-crispr-aauthor">
                      <img
                        alt="ImageI2101"
                        src="/external/imagei2101-pano-200h.png"
                        className="s24-lidforss-crispr-image"
                      />
                      <span className="s24-lidforss-crispr-text011">
                        Nicole Lidforss &apos;25
                      </span>
                    </div>
                    <span className="s24-lidforss-crispr-text012">
                      Spring 2024
                    </span>
                  </div>
                </div>
                <img
                  alt="Image2101"
                  src="https://www.iberdrola.com/documents/20125/1527375/CRISPR-726x484.jpg/46cb36ee-b5e4-9ef6-47b1-2094abac7909?t=1642007315492"
                  loading="lazy"
                  className="s24-lidforss-crispr-image1"
                />
                <div className="s24-lidforss-crispr-para"></div>
                <span className="s24-lidforss-crispr-text013">
                  Introduction
                </span>
                <div className="s24-lidforss-crispr-para1">
                  <span className="s24-lidforss-crispr-text014">
                    <span className="AMainArticleText">
                      Sickle cell disease is a group of inherited blood
                      disorders affecting approximately 100,000 people in the
                      U.S. It is most common in African Americans, but also
                      disproportionately affects Hispanic Americans. The primary
                      problem in sickle cell disease is a mutation in
                      hemoglobin, a protein in red blood cells that transports
                      oxygen to the body’s tissues. This mutation causes red
                      blood cells to appear in a “sickle” shape. These mutated
                      red blood cells restrict blood flow in vessels and limit
                      oxygen delivery to the body’s tissues, leading to severe
                      pain and organ damage called vaso-occlusive events (VOEs)
                      or vaso-occlusive crises (VOCs). The recurrence of these
                      crises can lead to life-threatening disabilities and/or
                      early death.
                    </span>
                    <br className="AMainArticleText"></br>
                    <span className="AMainArticleText">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="s24-lidforss-crispr-text018"></br>
                    <span className="AMainArticleText">
                      A relatively new technology that research scientists use
                      to selectively modify the DNA of living organisms, CRISPR,
                      has just been implemented into sickle cell treatment.
                      CRISPR was adapted for use in the laboratory from
                      naturally occurring genome editing systems found in
                      bacteria. On December 8, 2023, the first ever CRISPR gene
                      therapy treatments were approved by the FDA for use in
                      patients over the age of 12. There are so many potential
                      benefits such as reducing the need for frequent and time
                      consuming hospital visits, reducing pain, and improving
                      overall quality of life. Nicole Verdun, M.D., director of
                      the Office of Therapeutic Products within the FDA’s Center
                      for Biologics Evaluation and Research writes, “Gene
                      therapy holds the promise of delivering more targeted and
                      effective treatments, especially for individuals with rare
                      diseases where the current treatment options are limited”.
                      With that being said, as the use of Cas9 in treatment is
                      so new, there is so much we do not know about it. It is
                      extremely important to take the many potential risks into
                      account. Accordingly, this controversial topic leads to
                      the question, is it ethical to use CRISPR as a treatment
                      for sickle cell disease, and what exactly is at stake?
                    </span>
                    <br className="AMainArticleText"></br>
                  </span>
                </div>
                <img
                  alt="Image2101"
                  src="https://www.froedtert.com/sites/default/files/upload/images/services/sickle-cell/sickle-cell-blood-cells.jpg"
                  loading="lazy"
                  className="s24-lidforss-crispr-image2"
                />
                <span className="s24-lidforss-crispr-text021">
                  <span>Sickle Cell Treatment Today</span>
                  <br></br>
                </span>
                <span className="s24-lidforss-crispr-text024">
                  <span className="AMainArticleText">
                    The most common treatment of sickle cell today is blood
                    transfusions. When anemia, a low blood cell count, is
                    severe, conditions including splenic sequestration, acute
                    chest syndrome, and aplastic crisis are life threatening if
                    not treated with blood transfusions. These transfusions
                    increase the number of normal red blood cells in the body,
                    increasing the supply of oxygen to the body.
                  </span>
                  <br className="s24-lidforss-crispr-text026"></br>
                  <br className="AMainArticleText"></br>
                  <span className="AMainArticleText">
                    An argument for CRISPR in sickle cell disease treatment are
                    the benefits of eliminating downsides of today’s most common
                    treatments, such as blood transfusions. While blood
                    transfusions can help reduce the frequency and severity of
                    sickle cell-related complications, they do not completely
                    eliminate the symptoms. Alloimmunization, the development of
                    antibodies against transfused blood, transmission of
                    infectious diseases such as hepatitis or HIV, and allergic
                    reactions can occur as a result of repeated transfusions.
                    Also, finding compatible blood for transfusions can be
                    challenging and may require extensive screening and matching
                    procedures.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="AMainArticleText"></br>
                </span>
                <span className="s24-lidforss-crispr-text030">
                  Current CRISPR Therapies
                </span>
                <span className="s24-lidforss-crispr-text031 AMainArticleText">
                  <span className="AMainArticleText">
                    At this point, two gene therapies involving the use of Cas9
                    for treating sickle cell disease have been approved by the
                    FDA for patients 12 years of age and older with recurring
                    vaso-occlusive crises, Casgevy (also called exa-cel) and
                    Lyfgenia. Casgevy is a cell-based gene therapy created by
                    the companies Vertex and CRISPR Therapeutics. The treatment
                    involves mobilizing a patient&apos;s own bone marrow stem
                    cells from the blood. The stem cells are edited at a
                    specific region of the BCL11A gene which prevents the
                    production of fetal hemoglobin (HbF), a type of hemoglobin
                    that facilitates oxygen delivery. In patients with SCD,
                    increased levels of HbF prevent the sickling of red blood
                    cells. The reduction of BCL11A gene transcription in the
                    patient’s RNA leads to an increase of HbF production, thus
                    providing functioning hemoglobin. The modified blood stem
                    cells are transplanted back into the patient where they
                    attach and multiply within the bone marrow. The second
                    approved treatment, Lyfgenia, is similar to Casgevy, but is
                    not as common. The patient’s blood stem cells are
                    genetically altered to produce HbAT87Q, a gene-therapy
                    extracted hemoglobin that works similarly to hemoglobin A,
                    which is the normal adult hemoglobin. Red blood cells
                    containing HbAT87Q have a lower risk of sickling and
                    blocking blood flow. These modified stem cells are then
                    transplanted into the patient. “These approvals represent an
                    important medical advance with the use of innovative
                    cell-based gene therapies to target potentially devastating
                    diseases and improve public health,” writes Peter Marks,
                    M.D., Ph.D., director of the FDA’s Center for Biologics
                    Evaluation and Research.
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
                  src="https://pwonlyias.com/wp-content/uploads/2023/11/Untitled-560-scaled.webp"
                  className="s24-lidforss-crispr-image3"
                />
                <span className="s24-lidforss-crispr-text034">
                  <span>Ethical considerations: Justice</span>
                  <br></br>
                </span>
                <div className="s24-lidforss-crispr-para2">
                  <span className="s24-lidforss-crispr-text037 AMainArticleText">
                    <span className="AMainArticleText">
                      The medical field has a long history of racism, and it is
                      important to consider that the majority of the people
                      affected by this disease and would be receiving CRISPR
                      treatment are black. Throughout the Jim Crow era in the
                      United States, segregation extended to healthcare
                      facilities, with black individuals often relegated to
                      substandard and underfunded hospitals and clinics. They
                      received inferior medical care compared to their white
                      counterparts, leading to stark disparities in health
                      outcomes. While overt forms of medical racism have
                      diminished over time, systemic biases and disparities
                      persist in healthcare systems worldwide. The use of CRISPR
                      in sickle cell disease treatment has the possibility of
                      doing immense good for a group that has historically been
                      neglected in the medical world. However, if these gene
                      therapies were to not go as planned, this mistreated
                      minority will be further punished by the medical industry.
                      Keeping these facts in mind while considering the
                      expansion of CRISPR SCD treatment is crucial to the making
                      of related major decisions and guidelines.
                    </span>
                    <br className="AMainArticleText"></br>
                  </span>
                  <span className="s24-lidforss-crispr-text040">
                    <span>Ethical considerations: Accessibility</span>
                    <br></br>
                  </span>
                  <span className="s24-lidforss-crispr-text043">
                    <span className="AMainArticleText">
                      Cost is a large topic of discussion as various sickle cell
                      expenses accumulate to be devastatingly costly.
                      SCD-related lifetime medical costs (blood transfusions and
                      included inpatient care) were estimated at almost 1.7
                      million dollars. While the majority of this cost is
                      covered by insurance, the disease and its implications are
                      very time consuming. Most people have to come in to
                      receive a blood transfusion once or even twice a month.
                      These hospital visits are inconvenient and often get in
                      the way of one’s day.
                    </span>
                    <br className="s24-lidforss-crispr-text045"></br>
                    <br className="AMainArticleText"></br>
                    <span className="AMainArticleText">
                      With that being said, one of the most critical issues
                      about these novel CRISPR treatments is their current cost.
                      Like most gene editing therapies, exa-cel and lovo-cell
                      are likely to be very expensive. Estimates suggest that
                      the price for each could be as much as $2 million per
                      patient. Arafa Salim, who has used her own experience with
                      sickle cell to build Tanzania’s first patient advocacy
                      organization claimed, “A new therapy can be extremely
                      effective, even a cure for sickle cell, but if it’s not
                      made accessible to the average patient, it won’t be used.”
                      Additionally, insurance companies are often motivated by a
                      utilitarian ethic of providing the most good to the most
                      people and could potentially deny especially expensive
                      treatments that are deemed “experimental” and “not
                      medically necessary,” meaning patients will have to pay
                      out of pocket for these treatments, which is just not
                      possible for most. As more CRISPR treatments and genetic
                      modification are released, it is conceivable that only the
                      wealthy will have access to this technology as far as we
                      know. However, a one-time gene editing treatment has the
                      potential to alleviate some of the long-term costs,
                      including the cost of treatment, travel, and lost time or
                      productivity for treatment. Furthermore if companies
                      eventually get the cost of genetic therapies down and gene
                      therapies become “standard of care”, perhaps health
                      insurance will begin to cover CRISPR treatments. However,
                      as of today, these therapies will not be covered by
                      insurance for a long time as companies tend to wait as
                      long as possible before covering a treatment, especially
                      the more expensive ones.
                    </span>
                    <br className="AMainArticleText"></br>
                  </span>
                </div>
                <div className="s24-lidforss-crispr-quote">
                  <span className="s24-lidforss-crispr-text049 ArticlequoteRegular">
                    <span>
                      &quot;As a society, we must determine if the beneficence
                      outweighs the maleficence this new technology may cause.
                      This development uncovers an entirely new chapter of the
                      future of the medical field.&quot;
                    </span>
                    <br className="ArticlequoteRegular"></br>
                  </span>
                </div>
                <span className="s24-lidforss-crispr-text052">
                  <span>Conclusions and Recommendations</span>
                  <br></br>
                </span>
                <span className="s24-lidforss-crispr-text055">
                  <span className="AMainArticleText">
                    Given the previous discussion, the question of whether it is
                    ethical to use CRISPR in sickle cell treatments is vastly
                    controversial, and has seemingly unlimited arguments for and
                    against it. As a society, we must determine if the
                    beneficence outweighs the maleficence this new technology
                    may cause. This development uncovers an entirely new chapter
                    of the future of the medical field.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="s24-lidforss-crispr-text057"></br>
                  <br className="AMainArticleText"></br>
                  <span className="AMainArticleText">
                    In order for the use of gene editing therapies to be
                    ethical, there must be specific, strict policies from the
                    federal government. First off, the government should
                    prioritize equity considerations in determining access,
                    specifically cost-wise. Individuals who cannot pay for,
                    whose insurance does not cover these treatments, or do not
                    live near a facility that provides CRISPR therapies should
                    be accordingly supported. Patients must also be thoroughly
                    informed of potential side effects that may occur from
                    treatment. Informed consent for individuals who are not
                    literate, do not speak the language spoken in the country
                    they are in, and are differently abled should be adequately
                    adapted to provide clear and fair communication of the
                    potential risks and benefits of such treatments. And
                    finally, there must be extensive and strict regulations to
                    CRISPR technology in medical facilities to ensure no person
                    or group handling these treatments goes beyond the
                    societally decided limits. Finally, as a society we must
                    come together and have intensive ethical discussions before
                    further advancing CRISPR in medicine. Under these
                    circumstances, CRISPR in medicine should and will be used to
                    treat genetic diseases such as sickle cell disease to
                    advance the future of humanity.
                  </span>
                  <br className="s24-lidforss-crispr-text060"></br>
                  <br className="AMainArticleText"></br>
                </span>
              </div>
              <div className="s24-lidforss-crispr-oconclusion">
                <div className="s24-lidforss-crispr-para3">
                  <span className="s24-lidforss-crispr-text062">Sources:</span>
                  <span className="s24-lidforss-crispr-link">
                    <span>
                      Office of the Commissioner. “FDA Approves First Gene
                      Therapies to Treat Patients with Sickle Cell Disease.”
                      FDA, 8 Dec. 2023,
                      www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease#:~:text=Casgevy%2C%20a%20cell%2Dbased%20gene.
                      Accessed 6 Jan. 2024.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      {' '}
                      Smith, Mike. 2023. “CRISPR.” Genome.gov. 2023.
                      https://www.genome.gov/genetics-glossary/CRISPR.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      {' '}
                      Peebles, Angelica. 2023. “U.S. Approves First Gene-Editing
                      Treatment, Casgevy, for Sickle Cell Disease.” CNBC.
                      December 8, 2023.
                      https://www.cnbc.com/2023/12/08/casgevy-first-crispr-gene-editing-treatment-approved-in-us.html.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      {' '}
                      Uddin, Fathema, et al. “CRISPR Gene Therapy: Applications,
                      Limitations, and Implications for the Future.” Frontiers
                      in Oncology, vol. 10, no. 1387, 7 Aug. 2020,
                      https://doi.org/10.3389/fonc.2020.01387.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      {' '}
                      Neidler, Sarah. 2020. “Blood Transfusion - Sickle Cell
                      Disease News.” Sickle Cell Disease News. March 5, 2020.
                      https://sicklecellanemianews.com/blood-transfusion/#:~:text=Simple%20transfusions%20are%20typically%20given
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      {' '}
                      Pagliarulo, Ned, and Shaun Lucas. “What If a CRISPR Cure
                      Isn’t Such an Easy Choice?” BioPharma Dive, 8 Nov. 2023,
                      www.biopharmadive.com/news/sickle-cell-crispr-gene-editing-vertex-exa-cel-barriers/698121/.
                      Accessed 13 Jan. 2024.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      {' '}
                      Reardon, Sara. 2023. “FDA Approves First CRISPR Gene
                      Editing Treatment for Sickle Cell Disease.” Scientific
                      American. December 28, 2023.
                      https://www.scientificamerican.com/article/fda-approves-first-crispr-gene-editing-treatment-for-sickle-cell-disease/#:~:text=Like%20most%20gene%20editing%20therapies.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer" className="s24-lidforss-crispr-footer">
          <div className="s24-lidforss-crispr-contents">
            <span className="s24-lidforss-crispr-text085">
              <span className="s24-lidforss-crispr-text086">Contact Us</span>
              <br></br>
            </span>
            <span className="s24-lidforss-crispr-text088">
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
          <div className="s24-lidforss-crispr-contents1">
            <span className="s24-lidforss-crispr-text100">
              <span className="s24-lidforss-crispr-text101">About</span>
              <br></br>
            </span>
            <span className="s24-lidforss-crispr-text103">
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
            className="s24-lidforss-crispr-image4"
          />
        </div>
      </div>
    </div>
  )
}

export default S24LidforssCRISPR
