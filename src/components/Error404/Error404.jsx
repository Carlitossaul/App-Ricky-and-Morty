import style from "./Error404.module.css"

const Error404 = () => {
    return (
        <div className={style.container} >
            <h1 className={style.title} >OOPS!</h1>
            <h3 className={style.subtitle}>PAGE NOT FOUND</h3>
            <h2 className={style.number} >404</h2>
        </div>
    )
}

export default Error404