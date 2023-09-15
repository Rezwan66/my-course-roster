# My Course Roster

### Project Features

- Loads a single page application (SPA) with several programming-related courses, which can be added to the basket.
- The basket of products shows the names of the courses selected, but you can pick a specific course only once! If you try to pick the same course again, it will show an error message.
- There is a fixed credit hour selection limit of 20 hours in total, and you cannot exceed that limit! It will show an error message if you try to select more than 20 credits worth of courses.

### How different states are managed

- **useState() :** The react useState() hook is used to keep track of four different elements in this project
  -- The data fetched from the dataset is stored in the `courses` variable as an array to display the course detail cards.
  -- The courses selected by clicking the select button are stored in the `selectedCourses` variable as the array to show the selected course names.
  -- The remaining credit hours is stored in the `remaining` variable with an initial value of 20.
  -- The total credit hours selected is stored in the `totalHour` variable with an initial value of 0.

- **useEffect() :** The useEffect() hook is essentially used to deal with the side-effect of loading the data from the public folder using the fetch function, with no dependencies i.e. the data loads only when the browser loads.
