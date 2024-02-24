import './index.css'

const CharObj = props => {
  const {itemDetails} = props
  const {name, len} = itemDetails
  return (
    <li>
      <p className="heading3">
        {name} : {len}
      </p>
    </li>
  )
}

export default CharObj
