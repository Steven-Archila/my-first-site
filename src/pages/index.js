// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
    return (
        <Layout pageTitle="Inicio">
            <p>Hola! Mi nombre es Steven.Este es mi Jardin Digital.</p>
            <StaticImage
                alt="Aca estoy,detenido bajo mi propia voluntad"
                src="../images/IMG_2355.JPG"
            />

        </Layout>
    )
}

// Step 3: Export your component
export default IndexPage
