import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);
  //   console.log(courses);
  return (
    <div>
      <div className="flex">
        {/* cards container */}
        <div>
          {courses.map(card => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
        {/* cart container */}
        <div></div>
      </div>
    </div>
  );
};

export default Home;
