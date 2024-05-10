import spinner from '../../assets/imagenes/spinner.gif'
import './Spinner.css'

export const Spinner = () => {
  return (
    <div>
        <img className='spinner-img' src={spinner} alt="cargando..." />
    </div>
  )
}
