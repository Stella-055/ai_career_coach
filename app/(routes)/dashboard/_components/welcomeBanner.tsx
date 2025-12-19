import { Button } from '@/components/ui/button'
import React from 'react'

const WelcomeBanner = () => {
  return (
    <div className='p-5 bg-gradient-to-r from-[#BE575F] via-[#A33833] to-[#AC7606] text-white rounded-lg mb-6'>
      <h2 className='font-bold text-2xl'>Ai Career Coach</h2>
      <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur vero voluptatum consectetur earum alias accusamus, mollitia quo nisi illo facere fugit quibusdam laborum ipsum molestiae atque blanditiis magnam eveniet.</p>
      <Button className='text-black' variant={'outline'}>Get Started</Button>
    </div>
  )
}

export default WelcomeBanner
