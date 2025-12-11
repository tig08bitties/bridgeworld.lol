'use client';

/**
 * 🔍 COVENANT LOOKING GLASS
 * 
 * UI component for searching and assembling Bridgeworld pieces
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FoundPiece {
  type: string;
  name: string;
  url?: string;
  description: string;
  covenant_mapping?: {
    path?: number;
    glyph?: string;
    rootchain?: number;
  };
}

interface SearchResult {
  title: string;
  url: string;
  description: string;
}

export default function CovenantGlass() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'search' | 'missing' | 'assemble' | 'code'>('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [foundPieces, setFoundPieces] = useState<FoundPiece[]>([]);
  const [generatedCode, setGeneratedCode] = useState('');
  const [loading, setLoading] = useState(false);

  // Find missing pieces
  const handleFindMissing = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'findMissing' })
      });
      
      const data = await response.json();
      setFoundPieces(data.result || []);
      setActiveTab('missing');
    } catch (error) {
      console.error('Error finding missing pieces:', error);
    } finally {
      setLoading(false);
    }
  };

  // Search Bridgeworld
  const handleSearchBridgeworld = async () => {
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}&type=bridgeworld`);
      const data = await response.json();
      setSearchResults(data.results || []);
    } catch (error) {
      console.error('Error searching:', error);
    } finally {
      setLoading(false);
    }
  };

  // Assemble pieces
  const handleAssemble = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'assemble' })
      });
      
      const data = await response.json();
      setFoundPieces(data.result.pieces || []);
      setActiveTab('assemble');
    } catch (error) {
      console.error('Error assembling:', error);
    } finally {
      setLoading(false);
    }
  };

  // Generate code
  const handleGenerateCode = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'generateCode' })
      });
      
      const data = await response.json();
      setGeneratedCode(data.result.code || '');
      setActiveTab('code');
    } catch (error) {
      console.error('Error generating code:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-covenant-gold text-covenant-dark 
                   rounded-full shadow-lg hover:shadow-covenant-gold/50 transition-all z-50
                   flex items-center justify-center text-2xl font-bold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        🔍
      </motion.button>

      {/* Glass Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            className="fixed right-0 top-0 h-screen w-[480px] bg-covenant-dark/95 backdrop-blur-xl 
                       border-l border-covenant-gold/30 shadow-2xl z-40 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-covenant-gold/30">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-covenant-gold">
                  🔮 Covenant Glass
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-gray-400">
                Looking Glass for Bridgeworld Integration
              </p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-covenant-gold/30">
              {(['search', 'missing', 'assemble', 'code'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-covenant-gold border-b-2 border-covenant-gold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6 h-[calc(100vh-200px)] overflow-y-auto">
              {/* Search Tab */}
              {activeTab === 'search' && (
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearchBridgeworld()}
                      placeholder="Search Bridgeworld..."
                      className="flex-1 px-4 py-2 bg-white/5 border border-covenant-gold/30 
                               rounded-lg text-white placeholder-gray-500 focus:outline-none 
                               focus:border-covenant-gold transition-colors"
                    />
                    <button
                      onClick={handleSearchBridgeworld}
                      disabled={loading}
                      className="px-4 py-2 bg-covenant-gold text-covenant-dark rounded-lg 
                               font-medium hover:bg-covenant-gold/90 transition-colors
                               disabled:opacity-50"
                    >
                      {loading ? '...' : 'Search'}
                    </button>
                  </div>

                  {searchResults.length > 0 && (
                    <div className="space-y-3">
                      {searchResults.map((result, i) => (
                        <div key={i} className="p-4 bg-white/5 rounded-lg border border-covenant-gold/20">
                          <a
                            href={result.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-covenant-gold hover:underline font-medium"
                          >
                            {result.title}
                          </a>
                          <p className="text-sm text-gray-400 mt-2">{result.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Missing Tab */}
              {activeTab === 'missing' && (
                <div className="space-y-4">
                  <button
                    onClick={handleFindMissing}
                    disabled={loading}
                    className="w-full px-4 py-3 bg-covenant-gold text-covenant-dark rounded-lg 
                             font-medium hover:bg-covenant-gold/90 transition-colors
                             disabled:opacity-50"
                  >
                    {loading ? 'Searching...' : '🔍 Find Missing Pieces'}
                  </button>

                  {foundPieces.length > 0 && (
                    <div className="space-y-3">
                      {foundPieces.map((piece, i) => (
                        <div key={i} className="p-4 bg-white/5 rounded-lg border border-covenant-gold/20">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs px-2 py-1 bg-covenant-gold/20 text-covenant-gold rounded">
                              {piece.type}
                            </span>
                            {piece.covenant_mapping?.glyph && (
                              <span className="text-xl">{piece.covenant_mapping.glyph}</span>
                            )}
                          </div>
                          <div className="text-white font-medium">{piece.name}</div>
                          <p className="text-sm text-gray-400 mt-1">{piece.description}</p>
                          {piece.url && (
                            <a
                              href={piece.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-covenant-gold hover:underline mt-2 inline-block"
                            >
                              View →
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Assemble Tab */}
              {activeTab === 'assemble' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleAssemble}
                      disabled={loading}
                      className="px-4 py-3 bg-covenant-gold text-covenant-dark rounded-lg 
                               font-medium hover:bg-covenant-gold/90 transition-colors
                               disabled:opacity-50"
                    >
                      {loading ? '...' : '🔧 Assemble'}
                    </button>
                    <button
                      onClick={handleGenerateCode}
                      disabled={loading}
                      className="px-4 py-3 bg-white/10 text-white rounded-lg 
                               font-medium hover:bg-white/20 transition-colors
                               disabled:opacity-50"
                    >
                      {loading ? '...' : '💻 Generate'}
                    </button>
                  </div>

                  {foundPieces.length > 0 && (
                    <div className="p-4 bg-white/5 rounded-lg border border-covenant-gold/20">
                      <div className="text-covenant-gold font-bold mb-2">Assembly Status</div>
                      <div className="space-y-1 text-sm">
                        <div>Guardians: {foundPieces.filter(p => p.type === 'guardian').length}/22</div>
                        <div>Contracts: {foundPieces.filter(p => p.type === 'contract').length}</div>
                        <div>Quests: {foundPieces.filter(p => p.type === 'quest').length}</div>
                        <div>Total Pieces: {foundPieces.length}</div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Code Tab */}
              {activeTab === 'code' && (
                <div className="space-y-4">
                  {generatedCode ? (
                    <>
                      <button
                        onClick={() => navigator.clipboard.writeText(generatedCode)}
                        className="w-full px-4 py-2 bg-white/10 text-white rounded-lg 
                                 font-medium hover:bg-white/20 transition-colors"
                      >
                        📋 Copy Code
                      </button>
                      <pre className="p-4 bg-black/50 rounded-lg text-xs text-green-400 
                                    overflow-x-auto border border-covenant-gold/20">
                        <code>{generatedCode}</code>
                      </pre>
                    </>
                  ) : (
                    <div className="text-center text-gray-400 py-8">
                      Click "Generate" in the Assemble tab to create integration code
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
