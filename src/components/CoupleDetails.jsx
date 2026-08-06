import './CoupleDetails.css'

function PersonCard({ name, relation, parents, address }) {
  return (
    <div className="person-card">
      <h2 className="person-name">{name}</h2>

      <p className="person-parents">
        <strong>{relation}</strong> {parents[0]} <strong>&amp;</strong> {parents[1]}
        <br />
        {address.join(', ')}
      </p>
    </div>
  )
}

const groom = {
  name: 'Sreeraj K',
  relation: 'S/o',
  parents: ['Valsala P P', 'Sureshan K'],
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
