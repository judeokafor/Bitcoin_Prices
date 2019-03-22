import Navbar from '../components/Navbar'
import Head from 'next/head'

const Layout = (props) => (
<div>
    <Head>
        <title>
            BitzPricing
        </title>
        <link rel="stylesheet" href="../../static/css/bootstrap.min.css"/>
    </Head>
    <Navbar/>
    <div className = "container">
        {props.children}
    </div>
</div>
);

export default Layout
