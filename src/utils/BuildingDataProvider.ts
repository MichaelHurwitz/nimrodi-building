import { useState, useEffect } from 'react';
import buildingDataJson from '../data/building.json';

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity: string;
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  useEffect(() => {
    setBuildingData(buildingDataJson);
  }, []);

  const getFloorByIndex = (floorIndex: number): Floor | undefined => {
    if (floorIndex >= 0 && floorIndex < buildingData.length) {
      return buildingData[floorIndex];
    }
    return undefined; 
  };

  const getListOfActivities = (): string[] => {
    return buildingData.map(floor => floor.activity);
  };

  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
