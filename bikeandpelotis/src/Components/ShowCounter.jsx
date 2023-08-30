import { DateTimeDisplay } from "./DateTimeDisplay"

const ShowCounter = ({ days, hours, minutes, seconds }) => {

  return (
    <div className="show-counter">
      <a
        className='inscribete'
        href='https://eventos.runrunsports.com/inscripcion/-vi-asedio-a-barcience/modalidades'
        target ='_blank'
        rel= 'noreferrer'>
        ¡Inscribete Aquí!
      </a>
      <DateTimeDisplay
        value={days}
        type={'Dias'}
        isDanger={days <= 3}
      />
      <p>:</p>
      <DateTimeDisplay
        value={hours}
        type={'Horas'}
        isDanger={false}
      />
      <p>:</p>
      <DateTimeDisplay
        value={minutes}
        type={'Minutos'}
        isDanger={false}
      />
      <p>:</p>
      <DateTimeDisplay
        value={seconds}
        type={'Segundos'}
        isDanger={false}
      />

    </div>
  )
}

export { ShowCounter }