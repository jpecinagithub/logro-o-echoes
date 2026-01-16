import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Navigation, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AudioPlayer from './AudioPlayer';
import type { POI } from '@/data/pois';

interface PoiDrawerProps {
  poi: POI | null;
  onClose: () => void;
}

const PoiDrawer = ({ poi, onClose }: PoiDrawerProps) => {
  const openInMaps = () => {
    if (!poi) return;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${poi.lat},${poi.lng}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {poi && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-card rounded-t-3xl shadow-2xl max-h-[85vh] overflow-hidden md:absolute md:right-4 md:bottom-4 md:left-auto md:top-20 md:w-96 md:rounded-2xl md:max-h-none"
          >
            {/* Handle bar (mobile) */}
            <div className="flex justify-center pt-3 pb-1 md:hidden">
              <div className="w-12 h-1.5 bg-muted-foreground/30 rounded-full" />
            </div>
            
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm rounded-full"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </Button>
            
            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(85vh-20px)] md:max-h-[calc(100vh-160px)] scrollbar-hide">
              {/* Image */}
              <div className="relative h-48 md:h-56">
                <img
                  src={poi.imageSrc || '/placeholder.svg'}
                  alt={poi.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Order badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-br from-primary to-accent text-white w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg">
                  {poi.order}
                </div>
              </div>
              
              {/* Text content */}
              <div className="p-5 space-y-4">
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <h2 className="text-xl font-bold text-foreground leading-tight">
                      {poi.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {poi.description}
                  </p>
                </div>
                
                {/* Audio player */}
                <AudioPlayer 
                  src={poi.audioSrc} 
                  title="Audio guía"
                />
                
                {/* Navigation button */}
                <Button
                  onClick={openInMaps}
                  variant="outline"
                  className="w-full gap-2 h-12 rounded-xl"
                >
                  <Navigation className="h-4 w-4" />
                  Cómo llegar
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PoiDrawer;
