import styles from './Avatar.module.css';

//Aplicar bordar por default para retirar a borda colocar hasBorder={false} 
export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
} 