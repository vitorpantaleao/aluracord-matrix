import { Button, Box, Text } from "@skynexui/components";
import Head from "next/head";

export default function pageNotFound() {
    return (
        <>
            <Head>
                <title>Oops... Conteúdo não encontrado - DevCord | Chat para Devs</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column',
                    backgroundImage: 'url(https://uicookies.com/wp-content/uploads/2020/10/Animated-500-Error.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundBlendMode: 'multiply',
                }}
            >
                <Text styleSheet={{
                    fontSize: '80px',
                    marginBottom: '80px',
                    color: '#165564',
                    fontWeight: 'bold',
                }}>
                    Oops...
                </Text>
                <Button label="Voltar Para Home" href="/"
                    styleSheet={{
                        fontSize: '40px',
                        marginBottom: '10%',
                        padding: '20px',
                        backgroundColor: '#165564',
                        textTransform: 'uppercase',
                        fontWeight: 'bold'
                    }} />
            </Box>
        </>
    )
}
