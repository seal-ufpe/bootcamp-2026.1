import { Link } from 'react-router';
import membersData from '../assets/members.json';

export default function Main() {
  return (
    <>
      <h1>Membros da SEAL</h1>
      <ul>
        {membersData.members.map((member) => (
          <li key={member.slug}>
            <Link to={`/${member.slug}`}>{member.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
