import s from "./Timer.module.css";

export default function Timer({ time }) {

  return (
    <div>
      <span className={s.timer}>
        {new Date(time).toISOString().slice(11, 19)}
      </span>
    </div>
  )
}
