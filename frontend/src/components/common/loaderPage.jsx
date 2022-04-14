import Loader from "./loader"

const LoaderPage = () => {
    return (
        <>
            <div>
                <Loader />
            </div>
            <style jsx>{`
                div {
                    position: absolute;
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 99;
                }
            `}</style>
        </>
    )
}

export default LoaderPage