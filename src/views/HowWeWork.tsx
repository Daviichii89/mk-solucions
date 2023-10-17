import { Step } from '../components/Step'
import styles from './HowWeWork.module.css'

export const HowWeWork = () => {
  const steps = [
    {
      id: 1,
      text: 'You tell us your proposal.',
      texto: 'Dinos tu propuesta.',
    },
    {
      id: 2,
      text: 'We discuss the details.',
      texto: 'Debatimos los detalles.',
    },
    {
      id: 3,
      text: 'We send you a quote.',
      texto: 'Te enviamos un presupuesto.',
    },
    {
      id: 4,
      text: 'You accept the quote.',
      texto: 'Aceptas el presupuesto.',
    },
    {
      id: 5,
      text: 'We start working.',
      texto: 'Empezamos a trabajar.',
    }
  ]
  return (
    <section id="HowWeWork" className={styles.howWeWork}>
      <h2 className={styles.title}>Cómo trabajamos</h2>
      {
        steps.map(step => (
          <Step key={step.id} step={step} />
        ))
      }
    </section>
  )
}
