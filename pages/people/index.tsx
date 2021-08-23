import Head from 'next/head'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function People(){
    return(
        <>
        <Head>
            <title>LIMA Makers | People</title>
        </Head>
        <Navbar></Navbar>
        <main>
            <h1>
                This is supossed to be the people and makers section
            </h1>
        </main>
        <Footer></Footer>
        </>
    )
}

export default People