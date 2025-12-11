'use client';

/**
 * 🗺️ KEY-MAP COORDINATE OVERLAY
 * 
 * Displays the decoded coordinate mappings from Key.png and Map.png
 */

import { motion, AnimatePresence } from 'framer-motion';
import { KEY_MAP } from '@/lib/covenant-foundation';

interface KeyMapOverlayProps {
  onClose: () => void;
}

export default function KeyMapOverlay({ onClose }: KeyMapOverlayProps) {
  const pathMapping = KEY_MAP.decoded.path_mapping;

  // Get guardian name for path
  const getGuardianName = (pathNum: number): string => {
    const guardianMap: Record<number, string> = {
      1: 'Genesis Legion',
      7: 'Assassin',
      9: 'Fighter',
      10: 'Riverman',
      11: 'Numeraire (CENTER)',
      18: 'Rare Legion'
    };
    return guardianMap[pathNum] || `Path ${pathNum}`;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-covenant-dark border-2 border-covenant-gold rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-covenant-gold">
              🗺️ Key-Map Decoded Coordinates
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Coordinate Grids */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* The Key */}
            <div className="bg-white/5 rounded-lg p-6 border border-covenant-gold/20">
              <h3 className="text-xl font-bold text-covenant-gold mb-4">THE KEY</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Dimensions:</span>
                  <span className="text-white font-mono">
                    {KEY_MAP.key.dimensions[0]} × {KEY_MAP.key.dimensions[1]}
                  </span>
                </div>
                <div className="border-t border-white/10 pt-2 mt-2">
                  <div className="text-gray-400 mb-2">Coordinates:</div>
                  {KEY_MAP.key.coords.map((coord, i) => (
                    <div key={i} className="flex justify-between py-1">
                      <span className="text-gray-500">Point {i}:</span>
                      <span className="text-white font-mono">
                        [{coord[0]}, {coord[1]}]
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* The Map */}
            <div className="bg-white/5 rounded-lg p-6 border border-covenant-gold/20">
              <h3 className="text-xl font-bold text-covenant-gold mb-4">THE MAP</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Dimensions:</span>
                  <span className="text-white font-mono">
                    {KEY_MAP.map.dimensions[0]} × {KEY_MAP.map.dimensions[1]}
                  </span>
                </div>
                <div className="border-t border-white/10 pt-2 mt-2">
                  <div className="text-gray-400 mb-2">Coordinates:</div>
                  {KEY_MAP.map.coords.map((coord, i) => (
                    <div key={i} className="flex justify-between py-1">
                      <span className="text-gray-500">Point {i}:</span>
                      <span className="text-white font-mono">
                        [{coord[0]}, {coord[1]}]
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Path Mappings */}
          <div className="bg-white/5 rounded-lg p-6 border border-covenant-gold/20 mb-6">
            <h3 className="text-xl font-bold text-covenant-gold mb-4">
              🔮 Guardian Path Mappings
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(pathMapping).map(([pointIndex, pathNum]) => (
                <div key={pointIndex} className="flex items-center gap-3 p-3 bg-black/30 rounded-lg">
                  <div className="text-2xl">
                    {pathNum === 1 ? '𐡀' : 
                     pathNum === 7 ? '𐡆' :
                     pathNum === 9 ? '𐡈' :
                     pathNum === 10 ? '𐡉' :
                     pathNum === 11 ? '𐡊' :
                     pathNum === 18 ? '𐡑' : '?'}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500">Point {pointIndex} → Path {pathNum}</div>
                    <div className="text-sm text-white font-medium">
                      {getGuardianName(pathNum)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decoded Stats */}
          <div className="bg-covenant-gold/10 rounded-lg p-6 border border-covenant-gold/30">
            <h3 className="text-lg font-bold text-covenant-gold mb-3">Decoded Analysis</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-white">
                  {KEY_MAP.decoded.total_points}
                </div>
                <div className="text-xs text-gray-400 mt-1">Total Points</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">
                  {KEY_MAP.decoded.phi_relationships}
                </div>
                <div className="text-xs text-gray-400 mt-1">Φ Relationships</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">
                  {Object.keys(pathMapping).length}
                </div>
                <div className="text-xs text-gray-400 mt-1">Guardian Mappings</div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-6 text-center text-xs text-gray-500">
            Coordinates decoded from Key.png and Map.png using Covenant Foundation
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
