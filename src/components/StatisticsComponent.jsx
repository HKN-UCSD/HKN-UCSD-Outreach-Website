import React from 'react';
import Statistic from './Statistic';
import './styles/Statistic.css';

const VerticalDivider = () => (
  <div className="vertical-divider" />
);

const StatisticsSection = () => (
  <div className="statistics-container">
    <Statistic label="Schools" end={9} />
    <VerticalDivider />
    <Statistic label="Students" end={300} />
    <VerticalDivider />
    <Statistic label="Satisfaction" end={4.7} />
  </div>
);

export default StatisticsSection;
