import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../src/components/App';
import HomePage from '../src/components/home/HomePage';
import AboutPage from '../src/components/about/AboutPage';
import CoursePage from '../src/components/courses/CoursesPage';
import ManageCoursePage from '../src/components/courses/ManageCoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="courses" component={CoursePage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
  </Route>
);
