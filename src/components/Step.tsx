import styles from './Step.module.css'

interface StepProp {
    id: number
    text: string
    texto: string
}

export const Step = ({ step }: {step: StepProp}) => {
  return (
    <div className={styles.container}>
        <div className={styles.stepContainer}>
            <p className={styles.stepNumber}>{step.id}</p>
            <p className={styles.text}>{step.texto}</p>
        </div>
        <article className={styles.stepBorder}></article>
    </div>
  )
}


