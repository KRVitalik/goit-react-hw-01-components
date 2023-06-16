import { ListsStats, List, Text, Title } from './Statistics.styled'
import PropTypes from 'prop-types';


export const Statistics = ({stats, title}) => {
  return (<section className="statistics">
    {title && <Title className="title">{title}</Title>}
    <ListsStats className="stat-list">
      {stats.map(({id, label, percentage}) => {
        return (<List className="item" id={id} key={id} style={{ backgroundColor: `${getRandomHexColor()}` }}>
          <Text className="label">{label}</Text>
          <Text className="percentage">{percentage}%</Text>
        </List>)
      })}
  </ListsStats>
  </section>)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
}