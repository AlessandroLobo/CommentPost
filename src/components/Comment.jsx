import { Trash, ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'



export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://i.pinimg.com/originals/39/0e/4a/390e4aa2c02a1614a143256fa1b9df89.jpg" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alessandro Lobo</strong>
              <time title='11 de Maio as 08:13:30' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={24} />
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>
    </div>

  )
}