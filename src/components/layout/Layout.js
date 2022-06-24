import MainHeader from "./MainHeader";

const Layout = (props) => {
    return(
        <>
            <MainHeader />
            <div>{props.children}</div>
            <div>Footer</div>
        </>
    )
}

export default Layout