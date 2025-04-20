'use client'

import NotificationItem from '@/components/NotificationItem'
import { Container } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function NotificationPage() {
  const router = useRouter()

  return (
    <Container className=" px-0 mb-0">
      <div className="d-flex align-items-center my-4">
        <FontAwesomeIcon icon={faArrowLeft} className="ms-4 me-3 my-icon" role="button" onClick={() => router.back()} />
        <h4 className="text-danger fw-bold mb-0">Notification</h4>
        <hr />
      </div>

      <NotificationItem
        title="Reimbursement"
        message="Your submission 'Lorem ipsum dolor sit amet…' with the total cost of 50,000 has been paid, please check your BRIMO application, Thank you."
        status="success"
        date="Today"
        // type="Reimbursement"
        isRead={false}
      />
      <NotificationItem
        title="Reimbursement"
        message="Your submission 'description' has been rejected, please click for details."
        status="error"
        date="Yesterday"
        // type="Reimbursement"
        isRead={true}
      />
      <NotificationItem
        title="Reimbursement"
        message="Your submission will be processed according to the reimbursement schedule. Please wait."
        status="info"
        date="2022-10-05"
        // type="Reimbursement"
        isRead={true}
      />
      <NotificationItem
        title="Sickness"
        message="Your submission has been approved by the Superior."
        status="success"
        date="2022-10-05"
        // type="Sickness"
        isRead={false}
      />
      <NotificationItem
        title="Sickness"
        message="Your submission has been rejected, please confirm with your Superior."
        status="error"
        date="2022-10-05"
        // type="Sickness"
        isRead={true}
      />
      <NotificationItem
        title="Sickness"
        message="Your submission is being reviewed to the Superior for the approval process, please wait."
        status="info"
        date="2022-10-05"
        // type="Sickness"
        isRead={false}
      />
      <NotificationItem
        title="Overtime"
        message="Your submission has been approved by the Superior."
        status="success"
        date="2022-10-05"
        // type="Overtime"
        isRead={true}
      />
      <NotificationItem
        title="Overtime"
        message="Your submission has been rejected, please confirm with your Superior."
        status="error"
        date="2022-10-05"
        // type="Overtime"
        isRead={true}
      />
      <NotificationItem
        title="Overtime"
        message="Your submission will be processed according to the reimbursement schedule. Please wait."
        status="info"
        date="2022-10-05"
        // type="Overtime"
        isRead={true}
      />
    </Container>
  )
}
