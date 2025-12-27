
import { Button } from '@/components/ui/button';
import Aichat from '../../_components/Aichat';


const page = () => {
  return (
    <div>
    
        <div>
            <h2>AI Career Q/A Chat</h2>
            <div className="flex">
            <p>Smarter career decisions start here — get tailored advice, real-time market insights</p>
            <Button>New chat</Button>
            </div>
        </div>

        <div> <Aichat/> </div>
      
    </div>
  )
}

export default page
