import { v4 as uuidv4 } from 'uuid';
import Album from "./MusicGroupParts/Album";
import GroupName from './MusicGroupParts/GroupName';
import GroupComposition from './MusicGroupParts/GroupComposition';

export default function MusicGroup({ name, peoples, albums }) {
  const listItems = albums.map(album =>
    <Album key={uuidv4()} {...album} />
  );

  const albumHeader = albums.length > 1 ? "Альбомы:" : "Альбом:";

  return (
    <div className="music-group">
      <h2>Информация о группе:</h2>
      <GroupName name={name} />
      <GroupComposition peoples={peoples} />
      <h2>{albumHeader}</h2>
      <div className="albums-container">
        {listItems}
      </div>
    </div>
  );
}
