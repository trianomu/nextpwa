import { Card } from 'react-bootstrap'
import Image from 'next/image';

const user = {
    uri: 'https://i.pravatar.cc/60?img=11',
    name: 'Tabay',
  };
  
export default function UserCard() {
  return (
    <Card className="rounded shadow-sm text-white"   
        style={{
        background: 'linear-gradient(125deg, #FF3D3D 0%, #A80070 100%)',
      }}>
      <Card.Body>
      <div className="d-flex justify-content-between mt-2">
        <div className='d-flex'>
            <Image src={user.uri} width={40} height={40} className="rounded-circle me-4" alt={user.name} />     
            <div>
            <h6>Tabay</h6>
            <small>UI/UX Designer</small>
            </div>
        </div>
          <div className="text-end">Member since<br /><strong>01 Juni 2021</strong></div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <div>Location<br /><strong>Kantor Sahid</strong></div>
        </div>
      </Card.Body>
    </Card>
  )
}
