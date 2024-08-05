import "./profile.css";
const Profiles = ({ name, description, origin, picture }) => {
  return (
    <button className="profile">
      <h1>{name}</h1>
      <img
        className="img"
        alt="text"
        src="https://mooglestorage.blob.core.windows.net/images/1481bb97-9764-4935-78b6-08d850f8108d.jpg"
      />
      <p>Origin: {origin}</p>
      <p>Profile: {description}</p>
    </button>
  );
};
export default Profiles;
