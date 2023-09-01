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
        value= {days < 10 ? `0${days}` : days}
        type={'Dias'}
        isDanger={days <= 3}
      />
      <p>:</p>
      <DateTimeDisplay
        value={hours < 10 ? `0${hours}` : hours}
        type={'Horas'}
        isDanger={false}
      />
      <p>:</p>
      <DateTimeDisplay
        value={minutes < 10 ? `0${minutes}` : minutes}
        type={'Minutos'}
        isDanger={false}
      />
      <p>:</p>
      <DateTimeDisplay
        value={seconds < 10 ? `0${seconds}` : seconds}
        type={'Segundos'}
        isDanger={false}
      />

    </div>
  )
}

export { ShowCounter }