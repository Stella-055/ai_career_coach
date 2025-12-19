import { Button } from '@/components/ui/button'
import React from 'react'

const WelcomeBanner = () => {
  return (
    <div className='p-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg mx-6 '>
      <h2 className='font-bold text-2xl'>Ai Career Coach</h2>
      <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur vero voluptatum consectetur earum alias accusamus, mollitia quo nisi illo facere fugit quibusdam laborum ipsum molestiae atque blanditiis magnam eveniet.</p>
      <Button variant={"outline"} className='text-black'>Get started</Button>
    </div>
  )
}

export default WelcomeBanner
