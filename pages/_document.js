import Document, { Html, Head, Main, NextScript} from "next/document";

export default class SampleDocument extends Document{
    render(){
        return (
            <Html /*lang="tr"*/>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=B612+Mono&display=swap" rel="stylesheet"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}