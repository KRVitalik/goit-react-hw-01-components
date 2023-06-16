import PropTypes from 'prop-types';
import { Container, ListsStats, List, Name } from './Profile.styled'

export const Profile = ({username, tag, location, avatar, stats}) => {
  return (
    <Container className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <Name className="name">{username}</Name>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ListsStats className="stats">
        <List>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </List>
        <List>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </List>
        <List>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </List>
      </ListsStats>
    </Container>
  )
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
}