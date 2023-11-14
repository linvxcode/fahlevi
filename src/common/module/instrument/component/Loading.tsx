import React from "react";
import {Card, Skeleton} from "@nextui-org/react";
import clsx from "clsx";

interface LoadingProps {
  className: string;
}

export default function Loading({className = ''}:LoadingProps) {
  return (
    <Card className="w-full space-y-5 p-4 bg-transparent" radius="lg">
      <Skeleton className="rounded-lg">
        <div className={clsx("h-36 rounded-lg ", className)}></div>
      </Skeleton>
    </Card>
  );
}
