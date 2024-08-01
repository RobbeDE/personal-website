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
  
  export default function Contributors() {
    return (
      <div>
        <h1>Contributors</h1>
        <div>
          {contributors.map((user, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h2>{user.name}</h2>
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
        <div>
          <h2>Check out the game Evaders:</h2>
        </div>
      </div>
    );
  }