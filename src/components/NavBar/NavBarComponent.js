import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavHeader,
} from './NavBarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/'>
                        <div>
                            <img height="85px" width="125px" src="https://drive.google.com/uc?export=view&id=1IH31Ulzt24vJriL-86AMTFHqFNWEwwU0" alt="Eden Sign" />
                        </div>
                    </NavLink>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                    <NavLink to='/events'>
                        Contact
                    </NavLink>
                    <NavLink to='/annual'>
                        Services
                    </NavLink>
                </NavMenu>
                <NavHeader to='/'>Eden Sign</NavHeader>
                <NavBtn>
                    <NavBtnLink to={{ pathname: `https://forms.gle/7p8BLAUbEv7gBT6UA` }} target="_blank">Register</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
