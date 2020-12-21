import { signIn, signOut, useSession } from 'next-auth/client'
const AboutPage = () => {
    const [session, loading] = useSession();
    return(
        <div className="home-main">
            THIS PAGE IS THE ABOUT PAGE;
        </div>
    )


}

export default AboutPage;