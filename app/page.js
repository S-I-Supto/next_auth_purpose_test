import styles from './page.module.css'
import SignInBtn from './components/signInBtn'
import getCurrentUser from './actions/getCurrentUser'

export default async function Home() {
  const user = await getCurrentUser()
  console.log(user)
  return (
    <>
      <h1>hey there</h1>
      <SignInBtn />
    </>
  )
}
