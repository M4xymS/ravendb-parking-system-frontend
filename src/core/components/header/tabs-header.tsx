import { useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/core/components/ui/tabs.tsx";

const tabs = [
  {
    label: "B1",
    value: "frodo",
  },
  {
    label: "B2",
    value: "sam",
  },
  {
    label: "B3",
    value: "merry",
  },
  {
    label: "B4",
    value: "pippin",
  },
  {
    label: "B5",
    value: "asdasdaad",
  },
];

export const TabsHeader = () => {
  const [value, setValue] = useState(tabs[0].value);

  return (
    <div className="flex items-center">
      <span className="font-semibold text-xl mr-6">Floor</span>
      <Tabs
        value={value}
        onValueChange={setValue}
      >
        <TabsList>
          {tabs.map(tab => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
