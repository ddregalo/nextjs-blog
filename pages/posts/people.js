import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";


export default function People() {
    return (
        <Layout>
            <Head>
                <title>SWAPI Characters</title>
            </Head>
            <h1 className={utilStyles.title}>SWAPI Characters</h1>
        </Layout>
    )
}