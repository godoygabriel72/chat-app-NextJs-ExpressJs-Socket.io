import Image from 'next/image'
import { AiFillSetting } from 'react-icons/ai'

const NavBar = () => {
    return (
        <>
            <div className='navBar'>
                <div className='userContent'>
                    <div className='userIcon'>
                        <Image src='/userPhoto1.png' alt='userIcon' width={50} height={50}/>
                    </div>
                    <h4 className='userName'>user name</h4>
                </div>
                <AiFillSetting color='white' size={40}/>
            </div>
            <style jsx>{`
                .navBar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    height: 100%;
                    padding: 0 0.75rem;
                }
                .userContent {
                    display: flex;
                    align-items: center;
                }
                .userIcon {
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    position: relative;
                    overflow: hidden;
                }
                .userName {
                    color: white;
                    font-weight: 400;
                    font-size: 1rem;
                    margin: 0 1rem;
                }
            `}</style>
        </>
    )
}

export default NavBar