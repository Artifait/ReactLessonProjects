import "./Test.css"
import styles from "./Test.module.css"

export default function Test() {
  return <div>
    <h2>Lorem ipsum dolor sit.</h2>
    <button className={styles.active}>Click me</button>
    <p>
      Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Dolor nemo beatae quis
      expedita nihil sed vitae. Perferendis vero,
      magnam nulla, eum, quasi odit iste hic
      inventore atque cupiditate sed corrupti
      tempora voluptas eius iusto.
    </p>
  </div>
}
