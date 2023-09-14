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
        <div className="grid grid-cols-3 gap-6">
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
