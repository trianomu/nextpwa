import React from 'react';
import Image from 'next/image';

const users = [
  { name: 'Ali', surname: 'Ali', role: 'Sandi', uri: 'https://i.pravatar.cc/60?img=11' },
  { name: 'Udin', surname: 'Udin', role: 'Sandi', uri: 'https://i.pravatar.cc/60?img=10' },
  { name: 'Sam', surname: 'Sam', role: 'BSD', uri: 'https://i.pravatar.cc/60?img=19' },
  { name: 'Aldo', surname: 'Aldo', role: 'Erwin', uri: 'https://i.pravatar.cc/60?img=18' },
  { name: 'Arya', surname: 'Arya', role: 'RISD', uri: 'https://i.pravatar.cc/60?img=17' },
  { name: 'Ria', surname: 'Ria', role: 'NESHA', uri: 'https://i.pravatar.cc/60?img=16' },
  { name: 'Bayu', surname: 'Bayu', role: 'Krisna', uri: 'https://i.pravatar.cc/60?img=12' },
  { name: 'Adi', surname: 'Adi', role: 'IT', uri: 'https://i.pravatar.cc/60?img=9' },
  { name: 'Yoga', surname: 'Yoga', role: 'OPS', uri: 'https://i.pravatar.cc/60?img=8' },
  { name: 'Tio', surname: 'Tio', role: 'OPS', uri: 'https://i.pravatar.cc/60?img=7' },
];

const OnlineUsers = () => {
  const maxVisible = 8;
  const visibleUsers = users.slice(0, maxVisible);
  const extraCount = users.length - maxVisible;

  return (
    <>
      <h5 className='mt-3 fw-bold'>Online</h5>
      <div className="card p-3 mt-6">
        <div
          className="mx-auto position-relative"
          style={{
            position: 'relative',
            minHeight: 90,
            width: maxVisible * 30 + 50, // Lebar cukup utk 8 + more
          }}
        >
          {visibleUsers.map((user, idx) => (
            <div
              key={idx}
              className="text-center position-absolute"
              style={{
                
                left: idx * 30,
                zIndex: idx + 1,
              }}
            >
              <div style={{ width: 40, height: 40, position: 'relative' }}>
                <Image
                  src={user.uri}
                  alt={user.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-circle"
                />
              </div>
              <small className="d-block text-nowrap my-1">{user.name}</small>
              <small className="d-block text-nowrap">{user.surname}</small>
            </div>
          ))}

          {extraCount > 0 && (
            <div
              className="text-center position-absolute"
              style={{
                left: maxVisible * 30,
                zIndex: 0,
                top: 0,
              }}
            >
              <div
                className="rounded-circle bg-danger text-white d-flex flex-column justify-content-center align-items-center"
                style={{ width: 40, height: 40, fontSize: 12 }}
              >
                <small>{extraCount}</small>
                <small>more</small>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OnlineUsers;
