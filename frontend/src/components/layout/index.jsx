import NavBar from './navBar'

const Layout = ({children, onChangeUserIcon}) => {

    return (
        <div className='position-absolute h-100 w-100'>
            <div className='navBar'>
                <NavBar onChangeUserIcon={onChangeUserIcon} />
            </div>
            <div className='content'>
                {children}
            </div>
            <style jsx>{`
                .navBar {
                    width: 100vw;
                    height: 4.5rem;
                    background: #35234E;
                }
                .content {
                    position: relative;
                    width: 100vw;
                    height: calc(100vh - 4.5rem);
                    padding: 0 1rem;
                    background: #DCDEF7;
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