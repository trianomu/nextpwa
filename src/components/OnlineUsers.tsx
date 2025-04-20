import React from 'react';
import Image from 'next/image';

const users = [
  { name: 'Ali', surname: 'Ali', role: 'Sandi', uri: 'https://i.pravatar.cc/60?img=11', location:'Sahid' },
  { name: 'Udin', surname: 'Udin', role: 'Sandi', uri: 'https://i.pravatar.cc/60?img=10', location:'Sahid' },
  { name: 'Sam', surname: 'Sam', role: 'BSD', uri: 'https://i.pravatar.cc/60?img=19', location:'BSD' },
  { name: 'Aldo', surname: 'Aldo', role: 'Erwin', uri: 'https://i.pravatar.cc/60?img=18', location:'BSD' },
  { name: 'Arya', surname: 'Arya', role: 'RISD', uri: 'https://i.pravatar.cc/60?img=17', location:'WFH' },
  { name: 'Ria', surname: 'Ria', role: 'NESHA', uri: 'https://i.pravatar.cc/60?img=16', location:'WFH' },
  { name: 'Bayu', surname: 'Bayu', role: 'Krisna', uri: 'https://i.pravatar.cc/60?img=12', location:'BSD' },
  { name: 'Adi', surname: 'Adi', role: 'IT', uri: 'https://i.pravatar.cc/60?img=9', location:'Sahid' },
  { name: 'Yoga', surname: 'Yoga', role: 'OPS', uri: 'https://i.pravatar.cc/60?img=8', location:'BSD' },
  { name: 'Tio', surname: 'Tio', role: 'OPS', uri: 'https://i.pravatar.cc/60?img=7', location:'BSD' },
];

const OnlineUsers = () => {
  const maxVisible = 8;
  const visibleUsers = users.slice(0, maxVisible);
  const extraCount = users.length - maxVisible;

  return (
    <>
      <h5 className='mt-1 fw-bold'>Online</h5>
      <div className="card p-3 mt-6">
        <div
          className="mx-auto position-relative"
          style={{
            position: 'relative',
            minHeight: 100,
            width: maxVisible * 48 + 50, // Lebar cukup utk 8 + more
          }}
        >
          {visibleUsers.map((user, idx) => (
            <div
              key={idx}
              className="text-center position-absolute"
              style={{
                
                left: idx * 40,
                zIndex: idx + 1,
              }}
            >
              <div style={{ width: 48, height: 48, position: 'relative' }}>
                <Image
                  src={user.uri}
                  alt={user.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-circle"
                />
              </div>
              <small className="d-block text-nowrap my-0 text-sm">{user.name}</small>
              <small className="d-block text-nowrap my-0">{user.surname}</small>
              <small className="d-block text-nowrap fw-bold">{user.location}</small>
            </div>
          ))}

          {extraCount > 0 && (
            <div
              className="text-center position-absolute"
              style={{
                left: maxVisible * 40,
                zIndex: 0,
                top: 0,
              }}
            >
              <div
                className="rounded-circle bg-danger text-white d-flex flex-column justify-content-center align-items-center"
                style={{ width: 48, height: 48, fontSize: 12 }}
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
