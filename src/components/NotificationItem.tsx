import { Card } from 'react-bootstrap'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface Props {
  title: 'Reimbursement' | 'Sickness' | 'Overtime'
  message: string
  status: 'success' | 'error' | 'info'
  date: string
  isRead?: boolean
}

const iconMap: Record<string, string> = {
  Reimbursement: '/icons/reimbursement.png',
  Sickness: '/icons/sickness.png',
  Overtime: '/icons/overtime.png',
}

const statusIconMap = {
  success: faCheckCircle,
  error: faTimesCircle,
  info: faArrowRight,
}

const statusColorMap = {
  success: 'text-success',
  error: 'text-danger',
  info: 'text-primary',
}

export default function NotificationItem({ title, message, status, date, isRead }: Props) {
  const icon = iconMap[title]
  const statusIcon = statusIconMap[status]
  const statusColor = statusColorMap[status]

  const boldKeywords = ['rejected', 'approved', 'processed', 'reviewed', 'paid']

  const formatMessage = (text: string) => {
    const parts = text.split(new RegExp(`(${boldKeywords.join('|')})`, 'gi'))
    return parts.map((part, idx) =>
      boldKeywords.includes(part.toLowerCase()) ? (
        <strong key={idx}>{part}</strong>
      ) : (
        <span key={idx}>{part}</span>
      )
    )
  }

  return (
    <Card className='my-0 border-0 rounded-0' style={{ backgroundColor: isRead ? '#ffffff' : '#ADD8E6' }}>
      <Card.Body>
        <div className="d-flex align-items-start">
          <div className="position-relative me-3" style={{ width: 48, height: 48 }}>
            <Image src={icon} alt={title} width={48} height={48} />
            <div
              className="position-absolute bottom-0 end-0 bg-white border rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: 25, height: 25 }}
            >
              <FontAwesomeIcon icon={statusIcon} className={`${statusColor} my-icon`} size="sm" />
            </div>
          </div>
          <div className="flex-grow-1">
            <div className='d-flex flex-row justify-content-between align-items-center mb-1'>
              <div className="fw-bold" style={{ fontSize: 14 }}>{title}</div>
              <div className="text-end ms-2" style={{ fontSize: 14, whiteSpace: 'nowrap' }}>
                {date}
              </div>
            </div>
            <div style={{ fontSize: 14 }}>{formatMessage(message)}</div>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
