import AlbumCover from "./AlbumParts/AlbumCover";
import AlbumTitle from "./AlbumParts/AlbumTitle";

export default function Album({ title, pathToCaver }) {
  return (
    <div className="album">
      <AlbumCover path={pathToCaver} />
      <AlbumTitle title={title} />
    </div>
  );
}
