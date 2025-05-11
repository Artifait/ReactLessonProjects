import { v4 as uuidv4 } from 'uuid';

export default function GroupComposition({ peoples }) {
  return (
    <div className="group-composition">
      <h3>Состав группы:</h3>
      <ul>
        {peoples.map(person => (
          <li key={uuidv4()}>{person}</li>
        ))}
      </ul>
    </div>
  );
}
