import { useState } from 'react';
import { List, Map as MapIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MapView from '@/components/MapView';
import PoiList from '@/components/PoiList';
import PoiDrawer from '@/components/PoiDrawer';
import type { POI } from '@/data/pois';
import { cn } from '@/lib/utils';

const Index = () => {
  const [selectedPoi, setSelectedPoi] = useState<POI | null>(null);
  const [showList, setShowList] = useState(false);

  const handlePoiSelect = (poi: POI) => {
    setSelectedPoi(poi);
    setShowList(false);
  };

  const handleClose = () => {
    setSelectedPoi(null);
  };

  return (
    <div className="h-[calc(100vh-3.5rem-4rem)] mt-14 relative">
      {/* Map */}
      <div className={cn(
        "absolute inset-0 transition-opacity duration-300",
        showList ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto" : "opacity-100"
      )}>
        <MapView 
          selectedPoi={selectedPoi} 
          onPoiSelect={handlePoiSelect} 
        />
      </div>
      
      {/* List (mobile overlay / desktop sidebar) */}
      <div className={cn(
        "absolute inset-0 bg-background overflow-y-auto transition-transform duration-300 md:relative md:w-80 md:border-r md:border-border md:translate-x-0",
        showList ? "translate-x-0" : "translate-x-full md:translate-x-0"
      )}>
        <PoiList 
          selectedPoi={selectedPoi} 
          onSelect={handlePoiSelect} 
        />
      </div>
      
      {/* Toggle button (mobile) */}
      <Button
        onClick={() => setShowList(!showList)}
        size="icon"
        className="absolute bottom-20 right-4 z-20 h-14 w-14 rounded-full shadow-lg md:hidden"
        aria-label={showList ? 'Ver mapa' : 'Ver lista'}
      >
        {showList ? (
          <MapIcon className="h-6 w-6" />
        ) : (
          <List className="h-6 w-6" />
        )}
      </Button>
      
      {/* POI Drawer */}
      <PoiDrawer 
        poi={selectedPoi} 
        onClose={handleClose} 
      />
    </div>
  );
};

export default Index;
