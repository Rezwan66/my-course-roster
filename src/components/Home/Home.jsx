import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';
import Basket from '../Basket/Basket';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);
  //   console.log(courses);

  const handleSelectCourse = card => {
    const isClicked = selectedCourses.find(sel => sel.id === card.id);
    if (isClicked) {
      return alert('Cant select again');
    }
    setSelectedCourses([...selectedCourses, card]);
  };

  return (
    <div>
      <div className="flex  gap-8">
        {/* cards container */}
        <div className="grid grid-cols-3 gap-6">
          {courses.map(card => (
            <Card
              key={card.id}
              card={card}
              handleSelectCourse={handleSelectCourse}
            ></Card>
          ))}
        </div>
        {/* basket container */}
        <div className="min-w-[320px]">
          <Basket selectedCourses={selectedCourses}></Basket>
        </div>
      </div>
    </div>
  );
};

export default Home;
