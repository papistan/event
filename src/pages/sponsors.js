import React from "react"
import SponsorLogoContainer from "../components/sponsorLogoContainer"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/sponsors.scss"

const Sponsors = () => (
  <Layout>
    <SEO title="Page two" />
    <section
      id="sponsors"
      className="SectionLayout-padding-normal Background-color-blue-dark sponsors-section"
    >
      <div className="Container">
        <div className="SectionHeading">
          <h2 className="SectionHeading-title">Sponsors</h2>
          <div className="SectionHeading-body">
            <p className="text-align-center">
              Oktane20 is fueled by support of our sponsors. Generate business
              with a forward-thinking group of IT professionals, and increase
              exposure for your solutions and services. Make sure you are a part
              of more strategic IT discussions that center on building new and
              differentiated experiences in an increasingly mobile and
              cloud-centric world.
              <br />
              <br />
              Contact us at sponsorships@okta.com if you are interested in
              sponsoring.
            </p>
            <p className="text-align-center">
              <a href="https://www.okta.com/sites/default/files/Oktane20Live_Sponsorship_Prospectus_v5_03062020.pdf?_ga=2.78860247.252596626.1601398295-1587600635.1601398295">
                View the sponsorship prospectus
              </a>
            </p>
          </div>
        </div>
        <div className="SectionLayout-padding-normal">
          <h3 className="Heading-tag Heading-tag-circle-normal">
            Platinum Sponsors
          </h3>
          <SponsorLogoContainer />
        </div>
      </div>
    </section>
  </Layout>
)

export default Sponsors
