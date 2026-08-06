import './Invitation.css'

export default function Invitation() {
  return (
    <section className="invitation">
      <div className="invitation-inner">
        {/* <p className="blessing-text"></p> */}

        <div className="gold-line" />

        <h1 className="main-heading">
          We Are<br />
          <span>Getting Engaged</span>
        </h1>

        <div className="gold-line" />

        <div className="names-banner">
          <div className="names-row">
            <span className="name-groom">Sreeraj</span>
            <span className="name-ampersand">&amp;</span>
            <span className="name-bride">Anusree</span>
          </div>
        </div>

        <div className="gold-line" />

        <p className="invite-prose">
          With great joy and love, we invite you to share in the happiness of our
          engagement. Your presence will make our special day truly memorable.
        </p>
      </div>
    </section>
  )
}
