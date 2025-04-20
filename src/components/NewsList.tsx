import React from 'react';
import NewsCard from './NewsCard';

const NewsList = () => {
  const newsData = [
    {
      author: 'Budi Santoso',
      date: 'Selasa, 1 Januari 2025',
      content: [
        'Kalimat 1 - Lorem ipsum dolor sit amet...',
        'Kalimat 2 - Lorem ipsum dolor sit amet...',
        'Kalimat 3 - Lorem ipsum dolor sit amet...',
        'Kalimat 4 - Lorem ipsum dolor sit amet...',
      ],
      imageUrl: 'https://i.pravatar.cc/60?img=1',
    },
    {
      author: 'Siti Aminah',
      date: 'Rabu, 2 Januari 2025',
      content: [
        'Update 1 - Lorem ipsum dolor sit amet...',
        'Update 2 - Lorem ipsum dolor sit amet...',
        'Update 3 - Lorem ipsum dolor sit amet...',
        'Update 4 - Lorem ipsum dolor sit amet...',
      ],
      imageUrl: 'https://i.pravatar.cc/60?img=2'
    },
    {
      author: 'Siti Badriah',
      date: 'Rabu, 2 Januari 2025',
      content: [
        'Informasi 1 - Lorem ipsum dolor sit amet...',
        'Informasi 2 - Lorem ipsum dolor sit amet...',
        'Informasi 3 - Lorem ipsum dolor sit amet...',
        'Informasi 4 - Lorem ipsum dolor sit amet...',
      ],
      imageUrl: 'https://i.pravatar.cc/60?img=3'
    },
  ];

  return (
    <div className='mb-4'>
        <h5 className='mt-4 fw-bold'>PCS News</h5>
        <div id="newsCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
        <div className="carousel-inner">
            {newsData.map((news, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <NewsCard
                author={news.author}
                date={news.date}
                content={news.content}
                imageUrl={news.imageUrl}
                />
            </div>
            ))}
        </div>

        <div className="carousel-indicators">
            {newsData.map((_, index) => (
            <button
                key={index}
                type="button"
                data-bs-target="#newsCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
            ></button>
            ))}
        </div>
        </div>

    </div>
  );
};

export default NewsList;