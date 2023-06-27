'use client'
import { useSession, signIn } from "next-auth/react"
const SignInBtn = () => {
    const { data } = useSession()
    console.log(data)
    if (!data?.user) {
        return (
            <>
                <button
                    style={{ padding: "5px 10px", background: "blue", color: "white" }}
                    onClick={() => { signIn('google') }}
                >
                    sign in
                </button>
            </>
        )
    }
    return (
        <div>
            hi {data?.user?.email}
        </div>
    )
}

export default SignInBtn