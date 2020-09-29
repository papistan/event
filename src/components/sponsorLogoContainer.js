import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ModalComponent from "./modal"
import "../styles/sponsors.scss"

const imageQuery = graphql`
  query {
    aws: file(relativePath: { eq: "aws.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bettercloud: file(relativePath: { eq: "bettercloud.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beyondid: file(relativePath: { eq: "beyondid.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    box: file(relativePath: { eq: "box.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    dropbox: file(relativePath: { eq: "dropbox.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

function SponsorLogoContainer() {
  const data = useStaticQuery(imageQuery)

  const logos = [
    {
      description:
        "Lorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor si.",
      image: data.aws.childImageSharp.fluid,
      imgAtl: "AWS",
    },
    {
      description:
        "Lorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor si.",
      image: data.bettercloud.childImageSharp.fluid,
      imgAtl: "bettercloud",
    },
    {
      description:
        "Lorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor si.",
      image: data.beyondid.childImageSharp.fluid,
      imgAtl: "beyondid",
    },
    {
      description:
        "Lorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor si.",
      image: data.box.childImageSharp.fluid,
      imgAtl: "box",
    },
    {
      description:
        "Lorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor si.",
      image: data.dropbox.childImageSharp.fluid,
      imgAtl: "dropbox",
    },
  ]

  const [currentLogo, setCurrentLogo] = useState(logos[0])
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <section className="logos-container">
      <ul className="logos">
        {logos.map(logo => (
          <Logo
            key={logo.alt}
            logo={logo}
            handleClick={() => {
              setCurrentLogo(logo)
              toggleModal()
            }}
          />
        ))}
      </ul>
      <ModalComponent toggleModal={toggleModal} isOpen={modalOpen}>
        <div className="logo-modal-card">
          <Img fluid={currentLogo.image} alt={currentLogo.imgAtl} />
          <p className="feature-description-description">
            {currentLogo.description}
          </p>
        </div>
      </ModalComponent>
    </section>
  )
}

function Logo({ logo, handleClick }) {
  return (
    <button aria-label="Open modal" className="logo" onClick={handleClick}>
      <Img fluid={logo.image} alt={logo.imgAtl} />
    </button>
  )
}

export default SponsorLogoContainer
