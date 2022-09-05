import React from 'react';
import ReactDOM from 'react-dom/client';
import CoursesPreview from './components/coursesPreview';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CoursesPreview />
  </React.StrictMode>
);

reportWebVitals();
