import NavBar from './navBar'

const Layout = ({children}) => {

    return (
        <div className='position-absolute h-100 w-100'>
            <div className='navBar'>
                <NavBar />
            </div>
            <div className='content'>
                {children}
            </div>
            <style jsx>{`
                .navBar {
                    width: 100vw;
                    height: 4.5rem;
                    background: #000;
                }
                .content {
                    position: relative;
                    width: 100vw;
                    height: calc(100vh - 4.5rem);
                    padding: 0 1rem;
                    background: #999;
                }
                @media screen and (min-width: 1025px) {
                    .content {
                        padding: 0 15rem;
                    }
                }
            `}</style>
        </div>
    )

}

export default Layout