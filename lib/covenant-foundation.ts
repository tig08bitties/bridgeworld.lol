/**
 * 🔮 COVENANT FOUNDATION - TypeScript Interface
 * 
 * The sacred source at /home/tig0_0bitties/covenant
 * Integrated with Bridgeworld Atlas Mines Portal
 */

// ═══════════════════════════════════════════════════════════════
// THE COVENANT - IMMUTABLE CONSTANTS
// ═══════════════════════════════════════════════════════════════

export const COVENANT = {
  // The Axis
  axis: 'אφ3350448040000ת',
  polarity: '+9.6',
  
  // Sacred Numbers
  constants: {
    THEOS: 419,           // Quest multiplier bonus
    EL: 369,              // Harvester boost multiplier
    TORAH_PAGES: 1798,    // Quest completion milestone
    RESONANCE: 687,       // Mining frequency (Hz/seconds)
    HEBREW_PATHS: 22,     // Guardian count
    PHI: 1.618033988749895
  },
  
  // Entropy
  entropy_product: 3350448040000,
  union_product: '83665740401110',
  genesis: 335044,
  terminus: 840000,
  
  // The Rootchain - 22 numbers from Genesis to Terminus
  rootchain: [
    335044, 82, 111, 212, 295, 333, 354, 369, 419, 605, 
    687, 777, 888, 929, 1011, 2025, 3335, 4321, 5250, 
    55088, 57103, 840000
  ],
  
  // 22 Aramaic Glyphs (Imperial Aramaic script)
  glyphs: [
    '𐡀', '𐡁', '𐡂', '𐡃', '𐡄', '𐡅', '𐡆', '𐡇', '𐡈', '𐡉', '𐡊',
    '𐡋', '𐡌', '𐡍', '𐡎', '𐡏', '𐡐', '𐡑', '𐡒', '𐡓', '𐡔', '𐡕'
  ],
  
  // Canonical Hashes
  hashes: {
    master_seed: '09d4f22c560b902b785ddb0655c51ee68184d2aa8a6c20b693da3c6391bf9965dd8a0e8be5cb5027b0195be5d70ffc7b518c76c03d5e7ea6ce8db832635b2a9a',
    declaration_file: 'e374c94009e32a6c3cc8f89ea6102ce6886c3302324aaaf1563ace8f10332ebf',
    declaration_embedded: '883e529de31c586131a831a9953113a6d75edd87c97369a2fa3a791209952f5a'
  }
} as const;

// ═══════════════════════════════════════════════════════════════
// ORACLE & CONTRACTS
// ═══════════════════════════════════════════════════════════════

export const CONTRACTS = {
  oracle: {
    address: '0xfa05997C66437dCCAe860af334b30d69E0De24DC',
    network: 'Arbitrum One',
    chainId: 42161,
    purpose: 'Guardian verification, quest multipliers, harvester boosts'
  },
  treasury: {
    address: '0xb4C173AaFe428845f0b96610cf53576121BAB221',
    network: 'Arbitrum One',
    chainId: 42161,
    threshold: '2/5'
  },
  theosOracle: {
    address: '0x8BCbC66A5bb808A8871F667f2dd92a017B3DaFAC',
    network: 'Arbitrum One',
    genesis_tx: '0x9a0982cee504ad18e9bee722c14b2748df432cee276da69d51327781adc95da6'
  },
  arweave: {
    txId: 'vQSMpXuEy9NrcjDsoQK2RxHxGKTyvCWsqFjzqSnPMck',
    gateway: 'https://arweave.net/vQSMpXuEy9NrcjDsoQK2RxHxGKTyvCWsqFjzqSnPMck'
  }
} as const;

// ═══════════════════════════════════════════════════════════════
// 22 GUARDIAN MAPPINGS (Hebrew Path → Bridgeworld Legion)
// ═══════════════════════════════════════════════════════════════

export const GUARDIAN_MAPPINGS = {
  paths: {
    1: { legion: 'Genesis Legion', glyph: '𐡀', rootchain: 335044 },
    7: { legion: 'Assassin', glyph: '𐡆', rootchain: 354 },
    9: { legion: 'Fighter', glyph: '𐡈', rootchain: 419 },
    10: { legion: 'Riverman', glyph: '𐡉', rootchain: 605 },
    11: { legion: 'Numeraire', glyph: '𐡊', rootchain: 687, note: 'CENTER' },
    18: { legion: 'Rare Legion', glyph: '𐡑', rootchain: 4321 }
  },
  all: [
    { path: 1, glyph: '𐡀', name: 'Aleph', value: 1 },
    { path: 2, glyph: '𐡁', name: 'Beth', value: 2 },
    { path: 3, glyph: '𐡂', name: 'Gimel', value: 3 },
    { path: 4, glyph: '𐡃', name: 'Daleth', value: 4 },
    { path: 5, glyph: '𐡄', name: 'He', value: 5 },
    { path: 6, glyph: '𐡅', name: 'Waw', value: 6 },
    { path: 7, glyph: '𐡆', name: 'Zayin', value: 7 },
    { path: 8, glyph: '𐡇', name: 'Heth', value: 8 },
    { path: 9, glyph: '𐡈', name: 'Teth', value: 9 },
    { path: 10, glyph: '𐡉', name: 'Yodh', value: 10 },
    { path: 11, glyph: '𐡊', name: 'Kaph', value: 20 },
    { path: 12, glyph: '𐡋', name: 'Lamedh', value: 30 },
    { path: 13, glyph: '𐡌', name: 'Mem', value: 40 },
    { path: 14, glyph: '𐡍', name: 'Nun', value: 50 },
    { path: 15, glyph: '𐡎', name: 'Samekh', value: 60 },
    { path: 16, glyph: '𐡏', name: 'Ayin', value: 70 },
    { path: 17, glyph: '𐡐', name: 'Pe', value: 80 },
    { path: 18, glyph: '𐡑', name: 'Tsade', value: 90 },
    { path: 19, glyph: '𐡒', name: 'Qoph', value: 100 },
    { path: 20, glyph: '𐡓', name: 'Resh', value: 200 },
    { path: 21, glyph: '𐡔', name: 'Shin', value: 300 },
    { path: 22, glyph: '𐡕', name: 'Taw', value: 400 }
  ]
} as const;

// ═══════════════════════════════════════════════════════════════
// KEY-MAP DECODED COORDINATES
// ═══════════════════════════════════════════════════════════════

export const KEY_MAP = {
  key: {
    dimensions: [1536, 1536] as const,
    coords: [[506, 506], [768, 768], [675, 675], [1228, 1228], [614, 614], [0, 0]] as const
  },
  map: {
    dimensions: [1024, 1536] as const,
    coords: [[506, 759], [768, 1152], [675, 1012], [1023, 1535], [614, 921], [0, 0]] as const
  },
  decoded: {
    path_mapping: { 0: 7, 1: 11, 2: 10, 3: 18, 4: 9, 5: 1 },
    phi_relationships: 10,
    total_points: 6
  }
} as const;

// ═══════════════════════════════════════════════════════════════
// COVENANT FOUNDATION CLIENT
// ═══════════════════════════════════════════════════════════════

export class CovenantFoundation {
  public readonly covenant = COVENANT;
  public readonly contracts = CONTRACTS;
  public readonly guardians = GUARDIAN_MAPPINGS;
  public readonly keyMap = KEY_MAP;

  /**
   * Get sacred constant by name
   */
  getConstant(name: keyof typeof COVENANT.constants): number {
    return this.covenant.constants[name];
  }

  /**
   * Get all sacred constants
   */
  getConstants() {
    return this.covenant.constants;
  }

  /**
   * Get glyph by path number (1-22)
   */
  getGlyph(path: number): string {
    if (path < 1 || path > 22) throw new Error('Path must be 1-22');
    return this.covenant.glyphs[path - 1];
  }

  /**
   * Get rootchain value by index
   */
  getRootchain(index: number): number {
    return this.covenant.rootchain[index];
  }

  /**
   * Get guardian mapping by path
   */
  getGuardian(path: number) {
    return this.guardians.paths[path as keyof typeof this.guardians.paths] || 
           this.guardians.all[path - 1];
  }

  /**
   * Get all guardians
   */
  getAllGuardians() {
    return this.guardians.all;
  }

  /**
   * Get oracle contract
   */
  getOracle() {
    return this.contracts.oracle;
  }

  /**
   * Get treasury
   */
  getTreasury() {
    return this.contracts.treasury;
  }

  /**
   * Calculate quest multiplier using THEOS
   */
  questMultiplier(base: number): number {
    return base * (this.covenant.constants.THEOS / 100);
  }

  /**
   * Calculate harvester boost using EL
   */
  harvesterBoost(base: number): number {
    return base * (this.covenant.constants.EL / 100);
  }

  /**
   * Get resonance frequency
   */
  getResonance(): number {
    return this.covenant.constants.RESONANCE;
  }

  /**
   * Get full status
   */
  getStatus() {
    return {
      axis: this.covenant.axis,
      polarity: this.covenant.polarity,
      constants: this.covenant.constants,
      guardians: 22,
      glyphs: this.covenant.glyphs.length,
      rootchain: this.covenant.rootchain.length,
      oracle: this.contracts.oracle.address,
      treasury: this.contracts.treasury.address,
      sovereignty: 'ABSOLUTE',
      completion: 'ETERNAL'
    };
  }
}

// ═══════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════

export const covenantFoundation = new CovenantFoundation();
export default covenantFoundation;
