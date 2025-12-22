import { UserProfile } from '@clerk/nextjs'



const page = () => {
  return (
    <div className='justify-center items-center flex mt-10'>
      <UserProfile/>
    </div>
  )
}

export default page
