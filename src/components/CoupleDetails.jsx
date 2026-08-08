import './CoupleDetails.css'

 function PersonCard({ name, parents, address, relation, highlight }) {
  return (
    <div className={`person-card${highlight ? ' person-card-highlight' : ''}`}>
      <h2 className={`person-name${highlight ? ' person-name-highlight' : ''}`}>{name}</h2>
      <p className="person-parents">
        <strong>{relation}</strong>&nbsp;{parents[0]}&nbsp;<strong>&amp;</strong>&nbsp;{parents[1]}<br />
        {address.map((line, i) => (
          <span key={i}>{line}{i < address.length - 1 && <br />}</span>
        ))}
      </p>
    </div>
  )
}

export default function CoupleDetails() {
  const groom = {
    name: 'Sreeraj K',
    relation: 'S/o',
    parents: ['Valsala PP', 'Sureshan K'],
    address: [
      'Kannapurakkaran House',
      'Vankulath Vayal PO',
      'Azhikode, Kannur – 670009',
    ],
  }

  const bride = {
    name: 'Anusree Mohan',
    relation: 'D/o',
    parents: ['Mohanan A P', 'Bindu Mohan'],
    address: [
      'Asariparambil House',
      'Vazhikkadav PO, Vallikkad',
      'Malappuram – 679333',
    ],
  }

  return (
    <section className="couple-details-section">
      <div className="couple-details-inner">
        <h2 className="section-title">The Couple</h2>
        <p className="section-subtitle">Two hearts,<br />one journey</p>

        <div className="couple-grid">
          <PersonCard {...groom} />

          <div className="couple-divider">
            <div className="divider-line" />
            <span className="divider-heart">♥</span>
            <div className="divider-line" />
          </div>

          <PersonCard {...bride} highlight />
        </div>
      </div>
    </section>
  )
}
