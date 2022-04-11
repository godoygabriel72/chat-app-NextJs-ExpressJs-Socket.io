import Image from 'next/image'

const NavBar = () => {
    return (
        <>
            <div className='navBar'>
                <div className='userIcon'>
                    <Image src='/userPhoto1.png' alt='userIcon' width={50} height={50}/>
                </div>
                <h4 className='userName'>user name</h4>
            </div>
            <style jsx>{`
                .navBar {
                    width: 100vw;
                    height: 4.5rem;
                    background: #000;
                    display: flex;
                    align-items: center;
                }
                .userIcon {
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    margin: 0 0.75rem;
                    position: relative;
                    overflow: hidden;
                }
                .userName {
                    color: white;
                    font-weight: 400;
                }
            `}</style>
        </>
    )
}

export default NavBar