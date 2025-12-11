/**
 * 🔍 BRAVE SEARCH API CLIENT
 * 
 * Searches for missing Bridgeworld components using Brave Browser API
 */

export interface BraveSearchResult {
  title: string;
  url: string;
  description: string;
  age?: string;
  page_age?: string;
  profile?: {
    name: string;
    url: string;
  };
}

export interface BraveWebSearchResponse {
  query: {
    original: string;
    altered?: string;
  };
  results?: BraveSearchResult[];
  web?: {
    results: BraveSearchResult[];
  };
}

export class BraveSearchClient {
  private apiKey: string;
  private baseUrl = 'https://api.search.brave.com/res/v1';

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.BRAVE_API_KEY || '';
  }

  /**
   * Search for general information
   */
  async search(query: string, count: number = 10): Promise<BraveSearchResult[]> {
    if (!this.apiKey) {
      throw new Error('BRAVE_API_KEY not configured');
    }

    const url = new URL(`${this.baseUrl}/web/search`);
    url.searchParams.set('q', query);
    url.searchParams.set('count', count.toString());
    url.searchParams.set('search_lang', 'en');

    const response = await fetch(url.toString(), {
      headers: {
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip',
        'X-Subscription-Token': this.apiKey
      }
    });

    if (!response.ok) {
      throw new Error(`Brave API error: ${response.status} ${response.statusText}`);
    }

    const data: BraveWebSearchResponse = await response.json();
    return data.web?.results || data.results || [];
  }

  /**
   * Search for Bridgeworld components
   */
  async searchBridgeworld(component: string): Promise<BraveSearchResult[]> {
    const query = `Bridgeworld TreasureDAO ${component} site:docs.treasure.lol OR site:treasure.lol`;
    return this.search(query, 5);
  }

  /**
   * Search for Covenant-related information
   */
  async searchCovenant(topic: string): Promise<BraveSearchResult[]> {
    const query = `${topic} covenant integration blockchain oracle`;
    return this.search(query, 5);
  }

  /**
   * Find missing pieces
   */
  async findMissingPieces(): Promise<{
    contracts: BraveSearchResult[];
    quests: BraveSearchResult[];
    legions: BraveSearchResult[];
    treasures: BraveSearchResult[];
  }> {
    const [contracts, quests, legions, treasures] = await Promise.all([
      this.searchBridgeworld('smart contracts addresses Arbitrum'),
      this.searchBridgeworld('quests harvester'),
      this.searchBridgeworld('legions NFT'),
      this.searchBridgeworld('treasures MAGIC token')
    ]);

    return { contracts, quests, legions, treasures };
  }

  /**
   * Search for specific contract addresses
   */
  async findContracts(): Promise<BraveSearchResult[]> {
    const query = 'TreasureDAO Bridgeworld contract addresses Arbitrum explorer';
    return this.search(query, 10);
  }

  /**
   * Search for Atlas Mines information
   */
  async searchAtlasMines(): Promise<BraveSearchResult[]> {
    const query = 'Bridgeworld Atlas Mines staking harvester MAGIC';
    return this.search(query, 5);
  }
}

// ═══════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════

export const braveSearch = new BraveSearchClient();
export default braveSearch;
