import './CoupleDetails.css'

function PersonCard({ name, parents, address }) {
  return (
    <div className="person-card">
      <h2 className="person-name">{name}</h2>
      <p className="person-parents">
        <strong>S/o</strong> {parents[0]} <strong>&amp;</strong> {parents[1]}<br />
        {address.join(', ')}
      </p>
    </div>
  )
}

export default function CoupleDetails() {
  const groom = {
    name: 'Sreeraj K',
    parents: ['Valsala PP', 'Sureshan K'],
    address: [
      'Kannapurakkaran House',
      'Vankulath Vayal PO',
      'Azhikode, Kannur – 670009',
    ],
  }

  const bride = {
    name: 'Anusree Mohan',
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
        <p className="section-subtitle">Two hearts, one journey</p>

        <div className="couple-grid">
          <PersonCard {...groom} />

          <div className="couple-divider">
            <div className="divider-line" />
            <span className="divider-heart">♥</span>
            <div className="divider-line" />
          </div>

          <PersonCard {...bride} />
        </div>
      </div>
    </section>
  )
}
