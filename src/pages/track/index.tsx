import { Layout } from "../../components";
import { useGetTrackByIdQuery } from "../../redux/services/trackApi";

const TrackPage = () => {
  const id = window.location.pathname.split("/")[2];
  const { data } = useGetTrackByIdQuery(id);

  return (
    <>
      <Layout>
        <div>
          <h1>{data?.name}</h1>
        </div>
      </Layout>
    </>
  );
};

export default TrackPage;
