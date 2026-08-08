import './Invitation.css'

export default function Invitation() {
  return (
    <section className="invitation">
      <div className="invitation-inner">
        {/* <p className="blessing-text"></p> */}

        <div className="gold-line" />

        <h1 className="main-heading">
          <span className="main-heading-pre">We Are</span>
          <span className="main-heading-main">Getting Engaged</span>
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
          A beautiful new chapter begins...<br />
          With great joy, we are delighted to
          announce our engagement. Though we celebrate this moment with our
          families, your blessings and heartfelt wishes are truly cherished as
          we begin our journey together.
        </p>
      </div>
    </section>
  )
}
