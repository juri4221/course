import styles from "../../styles/ForgetPassword.module.css";

export const PIECES = {
  KING: "/pieces/King.svg",
  QUEEN: "/pieces/Queen.svg",
  KNIGHT: "/pieces/Knight.svg",
  OFFICER: "/pieces/Officer.svg",
  TOWER: "/pieces/Tower.svg",
  PAWN: "/pieces/Pawn.svg",
};

export const Piece = (props) => {
  const { piece } = props;

  return (
    <img className={styles.piece} src={piece} alt="Gucci Louis Dolce Fendi" />
  );
};
