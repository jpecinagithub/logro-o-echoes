import { motion } from 'framer-motion';
import { MapPin, Headphones, Sparkles } from 'lucide-react';
import { POIS, type POI } from '@/data/pois';
import { cn } from '@/lib/utils';

interface PoiListProps {
  selectedPoi: POI | null;
  onSelect: (poi: POI) => void;
}

const PoiList = ({ selectedPoi, onSelect }: PoiListProps) => {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
        <h2 className="text-lg font-bold text-foreground">
          Puntos de Interés
        </h2>
      </div>
      
      {POIS.map((poi, index) => (
        <motion.button
          key={poi.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => onSelect(poi)}
          className={cn(
            "w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all",
            "bg-card hover:bg-secondary/80 border-2 border-transparent shadow-sm hover:shadow-md",
            selectedPoi?.id === poi.id && "border-primary bg-primary/5"
          )}
        >
          {/* Order number */}
          <div className={cn(
            "w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-all",
            selectedPoi?.id === poi.id 
              ? "bg-gradient-to-br from-primary to-accent text-white shadow-lg" 
              : "bg-secondary text-secondary-foreground"
          )}>
            {poi.order}
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate">
              {poi.title}
            </h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
              <MapPin className="h-3 w-3" />
              <span className="truncate">{poi.description.slice(0, 35)}...</span>
            </p>
          </div>
          
          {/* Audio indicator */}
          <div className="bg-secondary p-2 rounded-full">
            <Headphones className="h-4 w-4 text-muted-foreground" />
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default PoiList;
