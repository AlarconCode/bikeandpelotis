const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countDown danger' : 'countDown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  )
}

export {DateTimeDisplay}