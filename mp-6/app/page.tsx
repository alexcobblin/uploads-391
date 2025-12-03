import { auth, signIn, signOut } from "@/lib/auth"

export default async function Home() {
  const session = await auth()

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#fdffc6ff',
      minHeight: '100vh',
      gap: '20px'
    }}>
      <h1>Next.js with GitHub OAuth</h1>
      
      {session?.user ? (
        <div style={{ textAlign: 'center' }}>
          <p>Welcome, {session.user.name || session.user.email}!</p>
          {session.user.image && (
            <img 
              src={session.user.image} 
              alt="Profile" 
              style={{ borderRadius: '50%', width: '80px', height: '80px', margin: '10px' }}
            />
          )}
          <form action={async () => {
            "use server"
            await signOut()
          }}>
            <button type="submit" style={{
              padding: '10px 20px',
              fontSize: '20px',
              backgroundColor: '#003a7dff',
              color: 'white',
              border: 'none',
            }}>
              Sign Out
            </button>
          </form>
        </div>
      ) : (
        <form action={async () => {
          "use server"
          await signIn("github")
        }}>
          <button type="submit" style={{
            padding: '10px 20px',
            fontSize: '20px',
            cursor: 'pointer',
            backgroundColor: '#003870ff',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}>
            Sign in with GitHub
          </button>
        </form>
      )}
    </div>
  )
}