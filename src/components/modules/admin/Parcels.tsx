import { useGetParcelsQuery } from "@/redux/features/parcel/parcel.api";

const Parcels = () => {
  const { data: parcels, isLoading } = useGetParcelsQuery(undefined);

  console.log(parcels);

  if (isLoading) return <p className="my-10 text-center">Loading....</p>;

  return (
    <div>
      <h2>All Parcels</h2>
    </div>
  );
};

export default Parcels;
