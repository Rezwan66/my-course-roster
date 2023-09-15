import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../Card/Card';
import Basket from '../Basket/Basket';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalHour, setTotalHour] = useState(0);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);
  //   console.log(courses);

  const handleSelectCourse = card => {
    const isClicked = selectedCourses.find(sel => sel.id === card.id);
    if (isClicked) {
      return toast.error('You have already selected this course!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    let count = card.credit;
    const newTotalHour = totalHour + count;
    const newRemaining = 20 - newTotalHour;
    if (newTotalHour > 20) {
      return toast.error('Sorry! Cannot take more than 20 credit hours!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
    setRemaining(newRemaining);
    setTotalHour(newTotalHour);
    setSelectedCourses([...selectedCourses, card]);
  };

  return (
    <div>
      <div className="flex gap-8">
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
          <Basket
            selectedCourses={selectedCourses}
            remaining={remaining}
            totalHour={totalHour}
          ></Basket>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
