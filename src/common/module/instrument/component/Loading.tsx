import React from "react";
import {Card, Skeleton} from "@nextui-org/react";

export default function Loading() {
  return (
    <Card className="w-full space-y-5 p-4 bg-transparent" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-36 rounded-lg "></div>
      </Skeleton>
    </Card>
  );
}
