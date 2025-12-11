/**
 * 🔍 SEARCH API ENDPOINT
 * 
 * Handles Brave API search requests for Bridgeworld components
 */

import { NextRequest, NextResponse } from 'next/server';
import { BraveSearchClient } from '@/lib/brave-search';
import CovenantGlass from '@/lib/covenant-glass';

// Initialize clients
const braveApiKey = process.env.BRAVE_API_KEY;
const braveSearch = new BraveSearchClient(braveApiKey);
const covenantGlass = new CovenantGlass(braveApiKey);

/**
 * GET /api/search?q=query&type=bridgeworld
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');
    const type = searchParams.get('type') || 'general';

    if (!query) {
      return NextResponse.json(
        { error: 'Query parameter "q" is required' },
        { status: 400 }
      );
    }

    let results;

    switch (type) {
      case 'bridgeworld':
        results = await braveSearch.searchBridgeworld(query);
        break;
      case 'covenant':
        results = await braveSearch.searchCovenant(query);
        break;
      case 'missing':
        results = await braveSearch.findMissingPieces();
        break;
      case 'contracts':
        results = await braveSearch.findContracts();
        break;
      case 'atlas':
        results = await braveSearch.searchAtlasMines();
        break;
      case 'general':
      default:
        results = await braveSearch.search(query);
        break;
    }

    return NextResponse.json({
      query,
      type,
      results,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Search API error:', error);
    
    return NextResponse.json(
      { 
        error: 'Search failed',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/search
 * 
 * Advanced search operations
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, query, component } = body;

    let result;

    switch (action) {
      case 'findMissing':
        result = await covenantGlass.findMissingPieces();
        break;

      case 'searchBridgeworld':
        result = await covenantGlass.searchComponent(component || query);
        break;

      case 'searchCovenant':
        result = await braveSearch.searchCovenant(query);
        break;

      case 'assemble':
        result = await covenantGlass.assemblePieces();
        break;

      case 'analyze':
        result = covenantGlass.analyzeFoundation();
        break;

      case 'coordinates':
        result = covenantGlass.getCoordinateMappings();
        break;

      case 'generateCode':
        const assembled = await covenantGlass.assemblePieces();
        result = {
          code: assembled.code,
          pieces: assembled.pieces.length,
          mappings: assembled.mappings
        };
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid action. Use: findMissing, searchBridgeworld, searchCovenant, assemble, analyze, coordinates, generateCode' },
          { status: 400 }
        );
    }

    return NextResponse.json({
      action,
      result,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Search POST error:', error);
    
    return NextResponse.json(
      { 
        error: 'Operation failed',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
