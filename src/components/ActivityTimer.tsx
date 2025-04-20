import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
const flippedIconStyle = {
  transform: 'scaleX(-1)',
  display: 'inline-block',
  color:'FF3D00',
};

const ActivityTimer = () => {
  return (
    <>
    <h5 className='mt-3 fw-bold'>Today's Activity</h5>
      <Card className="mb-1 border-0">
        <Card.Body className="d-flex justify-content-between text-center">
          <div>
          <FontAwesomeIcon icon={faClock}  style={flippedIconStyle} className="mb-1 my-icon" />
            <div className="fw-bold">08:30</div>
            <small>Check In</small>
          </div>
          <div>
          <FontAwesomeIcon icon={faClockRotateLeft} style={flippedIconStyle} className="mb-1 my-icon" />
            <div className="fw-bold text-danger">03:00:00</div>
            <small>Working Hours</small>
          </div>
          <div>
          <FontAwesomeIcon icon={faClock} style={{color:'FF3D00'}} className="mb-1 my-icon" />
            <div className="fw-bold">--:--</div>
            <small>Check Out</small>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ActivityTimer;