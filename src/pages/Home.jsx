import React from 'react';
import RobbeDEImage from '../assets/RobbeDE.png';
import ElkdhaenImage from '../assets/Elkdhaen.png';

const contributors = [
  {
    name: 'RobbeDE',
    imageUrl: RobbeDEImage,
    imageSize: 90,
  },
  {
    name: 'Elkdhaen',
    imageUrl: ElkdhaenImage,
    imageSize: 90,
  },
];

const Home = () => {
  return (
    <div>
      <div>
        <h1>Check out the game Evaders:</h1>
        </div>
      <div>
        <a href={"/~rodpicke/missile-evaders"}>Play Missile Invaders</a>
      </div>
      <div style={{ marginTop: '50px' }}></div>
      <div>
        <h1>Contributors:</h1>
        <div>
          {contributors.map((user, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h3>{user.name}</h3>
              <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                  width: user.imageSize,
                  height: user.imageSize
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;