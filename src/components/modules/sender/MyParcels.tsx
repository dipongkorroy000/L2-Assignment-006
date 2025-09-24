import { useUserParcelsQuery } from "@/redux/features/parcel/parcel.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { GetParcel } from "@/types/types";

const MyParcels = () => {
  const { data, isLoading } = useUserParcelsQuery(undefined);
  const parcels = data?.data || [];

  if (isLoading) return <p className="my-10 text-center">Loading....</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
      {parcels.map((parcel: GetParcel) => {
        return (
          <Card key={parcel._id}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {parcel.title} ({parcel.type})
              </CardTitle>
              <p className="text-sm text-muted-foreground">Tracking ID: {parcel.trackingId}</p>
            </CardHeader>

            <CardContent className="space-y-2 text-sm">
              <p>
                <strong>Receiver:</strong> {parcel.receiverNumber}
              </p>
              <p>
                <strong>Location:</strong> {parcel.division}, {parcel.city}, {parcel.area}
              </p>
              <p>
                <strong>Payment:</strong> {parcel.payment}
              </p>
              <p>
                <strong>Status:</strong> {parcel.status}
              </p>

              <div className="mt-4">
                <strong>Status Log:</strong>
                <ul className="list-disc list-inside text-xs mt-1">
                  {parcel.statusLog.map((log, index: number) => (
                    <li key={index}>
                      {log.status} — {log.location} ({log.updatedBy}) at {new Date(log.timestamp).toLocaleString("en-BD")}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default MyParcels;
