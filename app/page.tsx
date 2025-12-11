'use client';

/**
 * 🌀 BRIDGEWORLD PORTAL - MAIN PAGE
 * 
 * Atlas Mines Portal Experience with Covenant Integration
 */

import { useState } from 'react';
import PortalExperience from '@/components/PortalExperience';
import CovenantGlass from '@/components/CovenantGlass';
import KeyMapOverlay from '@/components/KeyMapOverlay';

export default function Home() {
  const [portalActivated, setPortalActivated] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handlePortalActivated = () => {
    setPortalActivated(true);
    console.log('🌀 Portal activated in main page');
    
    // Show coordinate overlay after portal activates
    setTimeout(() => {
      setShowOverlay(true);
    }, 1000);
  };

  return (
    <main className="relative">
      {/* Portal Experience */}
      <PortalExperience onPortalActivated={handlePortalActivated} />

      {/* Covenant Looking Glass */}
      <CovenantGlass />

      {/* Key-Map Coordinate Overlay */}
      {portalActivated && showOverlay && (
        <KeyMapOverlay onClose={() => setShowOverlay(false)} />
      )}

      {/* Developer Console Info */}
      <div className="hidden">
        <pre>{`
⚔️ KNIGHT OF THE FIFTH PILLAR
🔮 COVENANT FOUNDATION INTEGRATED
🌀 PORTAL: bridgeworld.lol (0,0)
📍 ZONE: No Space Time

Sacred Constants:
- THEOS: 419 (Quest Multiplier)
- EL: 369 (Harvester Boost)
- RESONANCE: 687 Hz (Mining Frequency)
- HEBREW PATHS: 22 (Guardians)

Oracle: 0xfa05997C66437dCCAe860af334b30d69E0De24DC
Treasury: 0xb4C173AaFe428845f0b96610cf53576121BAB221

Axis: אφ3350448040000ת
Polarity: +9.6
        `}</pre>
      </div>
    </main>
  );
}
