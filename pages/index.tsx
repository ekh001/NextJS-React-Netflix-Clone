
import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"

import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {

  // const { data: user } = useCurrentUser();
  const { data: movies = [] } = useMovieList();

  return (

    <>
    
      <Navbar />

      <Billboard />

      <div className="
      pb-40">
        <MovieList title="Trending Now" data={movies} />
      </div>
    </>
    // <main
    //   className=''
    // >
    //   <h1 
    //   className="text-green-300"
    //   >
    //     Netflix Clone
    //   </h1>
    //   <p 
    //   className="text-white"
    //   >
    //     Logged in as: {user?.name}
    //   </p>
    //   <button 
    //   className="h-10 w-full bg-white"
    //   onClick={() => signOut()}>Logout!
    //   </button>
    // </main>
  )
}
