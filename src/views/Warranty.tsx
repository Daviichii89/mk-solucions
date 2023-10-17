import styles from './Warranty.module.css'

export const Warranty = () => {
  return (
    <div id="Warranty" className={styles.warranty}>
        <h2>Nuestra Garantía:</h2>
        <div className={styles.warrantyContainer}>
            <div className={styles.cardItem}>
                <h3>Materiales</h3>
                <p>
                    Trabajamos con materiales de primera calidad.
                </p>
            </div>
            <div className={styles.cardItem}>
                <h3>Plazos</h3>
                <p>
                    Cumplimos estrictos plazos de entrega.
                </p>
            </div>
            <div className={styles.cardItem}>
                <h3>Presupuestos</h3>
                <p>
                    Presupuestos claros y sin sorpresas.
                </p>
            </div>
            <div className={styles.cardItem}>
                <h3>Atención al cliente</h3>
                <p>
                    Atención personalizada y asesoramiento en diseño.
                </p>
            </div>
            <div className={styles.cardItem}>
                <h3>Calidad del trabajo</h3>
                <p>
                    Adjuntamos imágenes de proyectos anteriores para que puedas 
                    ver la calidad de nuestro trabajo.
                </p>
            </div>
        </div>
    </div>
  )
}
