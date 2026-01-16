import { motion } from 'framer-motion';
import { MapPin, Headphones } from 'lucide-react';
import { POIS, type POI } from '@/data/pois';
import { cn } from '@/lib/utils';

interface PoiListProps {
  selectedPoi: POI | null;
  onSelect: (poi: POI) => void;
}

const PoiList = ({ selectedPoi, onSelect }: PoiListProps) => {
  return (
    <div className="p-4 space-y-3">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Puntos de Interés
      </h2>
      
      {POIS.map((poi, index) => (
        <motion.button
          key={poi.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => onSelect(poi)}
          className={cn(
            "w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all",
            "bg-card hover:bg-secondary/80 border border-transparent",
            selectedPoi?.id === poi.id && "border-primary bg-primary/5"
          )}
        >
          {/* Order number */}
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0",
            selectedPoi?.id === poi.id 
              ? "bg-primary text-primary-foreground" 
              : "bg-secondary text-secondary-foreground"
          )}>
            {poi.order}
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-foreground truncate">
              {poi.title}
            </h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
              <MapPin className="h-3 w-3" />
              <span className="truncate">{poi.description.slice(0, 40)}...</span>
            </p>
          </div>
          
          {/* Audio indicator */}
          <Headphones className="h-5 w-5 text-muted-foreground shrink-0" />
        </motion.button>
      ))}
    </div>
  );
};

export default PoiList;
