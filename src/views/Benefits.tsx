import styles from './Benefits.module.css'
import { BsFillDoorOpenFill } from 'react-icons/bs'
import { FaPeopleCarry, FaMoneyBillAlt } from 'react-icons/fa'
import { AiOutlineSchedule, AiOutlineRise } from 'react-icons/ai'
import { FiRepeat } from 'react-icons/fi'

export const Benefits = () => {
  return (
    <section id="Benefits" className={styles.benefits}>
      <h2 className={styles.benefitsTitle}>
        Benefits of having a professional web.
      </h2>
      <p>
        You open up to the world <BsFillDoorOpenFill />
      </p>
      <p>
        New customers <FaPeopleCarry />
      </p>
      <p>
        {" "}
        Much lower costs <FaMoneyBillAlt />
      </p>
      <p>
        No schedules <AiOutlineSchedule />
      </p>
      <p>
        Ultrasegmented marketing + high conversion <AiOutlineRise />
      </p>
      <p>
        Automation, less work, more performance <FiRepeat />
      </p>
    </section>
  )
}

