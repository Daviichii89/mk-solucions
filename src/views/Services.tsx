import { SwiperComponent } from '../components/SwiperComponent'
import styles from './Services.module.css'

export const Services = () => {
  return (
    <section id="Services" className={styles.services}>
      <p>Estos son nuestros servicios</p>
      <ul className={styles.servicesList}>
        <li>- Reformas de cocinas y baños de diseño.</li>
        <li>- Renovación de suelos y paredes con materiales de alta calidad.</li>
        <li>- Instalación de sistemas de calefacción y aire acondicionado eficientes.</li>
        <li>- Carpintería a medida: muebles, puertas y armarios.</li>
        <li>- Electricidad y fontanería certificadas.</li>
        <li>- Aislamiento térmico y acústico para un mayor confort.</li>
        <li>- Pintura y decoración interior y exterior.</li>
      </ul>
      <p></p>
      <small>Galería de proyectos.</small>
      <picture className='swiper-container'>
        <SwiperComponent />
      </picture>
    </section>
  )
}
