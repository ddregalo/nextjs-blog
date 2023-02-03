import utilStyles from "../styles/utils.module.css";

export default function Button({text}) {
    return (
        <section className={utilStyles.headingMd}>
            <button className={utilStyles.button} type="button">{text}</button>
        </section>
    )
}