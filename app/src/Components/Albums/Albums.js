import SecondaryCover from "../../Layout/SecondaryCover";
import Works from "./Works";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../constants";

function Albums() {
  const fetchAlbums = async () => {
    const res = await fetch(`${API_URL}/albums`);
    return res.json();
  };

  const { data, isLoading, isError } = useQuery(["albums"], fetchAlbums);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const allAlbums = data.data.albums;

  return (
    <>
      <SecondaryCover
        title="Albums"
        description="We are a non-profital organization focusing on child education with technology."
      />
      <Works allAlbums={allAlbums} />
    </>
  );
}

export default Albums;
