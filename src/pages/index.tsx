import UserCard from '@/components/UserCard'
import NavbarBottom from '@/components/NavbarBottom'
import { Container } from 'react-bootstrap'
import ActivityTimer from '@/components/ActivityTimer'
import OnlineUsers from '@/components/OnlineUsers'
import NewsList from '@/components/NewsList'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function HomePage() {
  return (
    <Container className="pb-5">
      <div className='d-flex flex-row justify-content-between align-items-center'>
        <h2 className="text-danger fw-bold mt-3">KerjaYuk!</h2>
        <div className='icon-wrapper'>
          <Link href="/notification" passHref>
            <FontAwesomeIcon icon={faBell} className='mt-2 mx-2 my-icon text-dark cursor-pointer' role="button" />
          </Link>
          <span className="red-dot" />
        </div>
      </div>
      <p className='fw-bold mb-2 mt-3'>Hi, Good Morning!</p>
      <UserCard />
      <ActivityTimer/>
      <NewsList/>
      <OnlineUsers/>      
      <NavbarBottom />
    </Container>
  )
}
