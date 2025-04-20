import React from 'react';
import { Card } from 'react-bootstrap';
import Image from 'next/image';

const NewsCard = ({ author, date, content, imageUrl }) => {
  const cardBodyStyle = {
    height: 'calc(1.5em * 8)', // Tinggi maksimum untuk 4 baris (sesuaikan 1.5em dengan line-height Anda)
    overflow: 'hidden',
  };

  const paragraphStyle = {
    marginBottom: '0.25rem', // Sesuaikan margin bawah antar paragraf
    lineHeight: '1.5em', // Sesuaikan line-height sesuai kebutuhan
  };

  return (
    <Card className="mb-3 shadow">
      <Card.Body style={cardBodyStyle}>
        <div className="d-flex align-items-center mb-2">
          <div style={{ width: '40px', height: '40px', position: 'relative', marginRight: '0.5rem' }}>
            <Image src={imageUrl} alt={author} layout="fill" objectFit="cover" className="rounded-circle" />
          </div>
          <div>
            <div className="fw-bold">{author}</div>
            <small className="text-muted">{date}</small>
          </div>
        </div>
        {content && content.map((item, index) => (
          <p key={index} className="mb-0" style={paragraphStyle}>{item}</p>
        ))}
      </Card.Body>
    </Card>
  );
};

export default NewsCard;