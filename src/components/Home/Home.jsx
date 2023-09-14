import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';
import Basket from '../Basket/Basket';

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
      <div className="flex  gap-8">
        {/* cards container */}
        <div className="grid grid-cols-3 gap-6">
          {courses.map(card => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
        {/* basket container */}
        <div className="min-w-[320px]">
          <Basket></Basket>
        </div>
      </div>
    </div>
  );
};

export default Home;
