import { Nav } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faGear, faHouse, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck, faFileLines } from '@fortawesome/free-regular-svg-icons';

export default function NavbarBottom() {
  return (
    <div className="position-fixed bottom-0 start-0 end-0 bg-white border-top">
    <Nav
      className="d-flex justify-content-between align-items-center position-relative"
    >
        <div className='d-flex flex-row justify-content-between gap-1 pt-3'>
            <div className='d-flex flex-column align-items-center justify-content-center ' style={{ flex: 1}}>
                <FontAwesomeIcon icon={faHouse} className='text-danger my-icon' />
                <Link href="/" className="nav-link text-center text-danger fw-bold">Home</Link>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center' style={{ flex: 1}}>
                <FontAwesomeIcon icon={faCalendarCheck} style={{color:'#999'}} className='my-icon'/>
                <Link href="/" className="nav-link text-center px-2 "  style={{color:'#999'}}>Attendance</Link>
            </div>
        </div>

      {/* Tombol Tengah */}
      <div className="nav-center-button position-absolute start-50 translate-middle" style={{ zIndex: 1 , top:26}}>
        <Link
          href="/"
          className="btn btn-danger rounded-circle d-flex justify-content-center align-items-center"
          style={{ width: 64, height: 64 }}
        >
          <FontAwesomeIcon icon={faRightFromBracket} className='my-icon'/>
        </Link>
        <div className="text-center fw-bold" style={{ fontSize: 14, marginTop: 4, color: 'red' }}>Check Out</div>
      </div>

      <div className='d-flex flex-row justify-content-around gap-3 pt-3 pe-3'>
        <div className='d-flex flex-column align-items-center justify-content-center' style={{ flex: 1}}>
            <FontAwesomeIcon icon={faFileLines} style={{color:'#999'}} className='my-icon' />
            <Link href="/" className="nav-link text-center px-2" style={{color:'#999'}}>Form</Link>
        </div>
        <div className='d-flex flex-column align-items-center justify-content-center' style={{ flex: 1}}>
            <FontAwesomeIcon icon={faGear} style={{color:'#999'}} className='my-icon' />
            <Link href="/" className="nav-link text-center px-2" style={{color:'#999'}}>Setting</Link>
        </div>
        </div>
    </Nav>
    </div>
  );
}
