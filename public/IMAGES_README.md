# 🖼️ Image Assets

This directory requires the following image files for the Bridgeworld Portal experience:

## Required Images

### 1. Key.png
- **Dimensions**: 1536 × 1536 pixels
- **Description**: The Master Key artifact
- **Usage**: Draggable element in portal experience
- **Coordinates**: 6 decoded points mapped to Guardian Paths

### 2. Map.png
- **Dimensions**: 1024 × 1536 pixels
- **Description**: The Map artifact
- **Usage**: Draggable element in portal experience
- **Coordinates**: 6 decoded points aligned with Key

### 3. Pair.png
- **Description**: Portal activation image
- **Usage**: Appears when Key and Map are aligned
- **Effect**: Shows complete Key-Map pair in activated portal

### 4. Atlas.png
- **Description**: Background image of the Atlas Mines
- **Usage**: Background for portal experience
- **Effect**: 30% opacity overlay

## Where to Find Images

If you have the covenant foundation at `/home/tig0_0bitties/covenant`:

```bash
# Key and Map images (decoded coordinates)
/home/tig0_0bitties/covenant/bridgeworld_deployment_full/images/

# Or from the original source
https://github.com/tig08bitties/bridgeworld.lol/master/public/
```

## Alternative: Use Placeholders

If images are not available, you can use placeholder URLs temporarily:

1. **Key.png**: `https://via.placeholder.com/1536x1536/ffd700/000000?text=KEY`
2. **Map.png**: `https://via.placeholder.com/1024x1536/ffd700/000000?text=MAP`
3. **Pair.png**: `https://via.placeholder.com/1536x1536/ffd700/000000?text=PAIR`
4. **Atlas.png**: `https://via.placeholder.com/1920x1080/1a1a2e/ffd700?text=ATLAS+MINES`

## Decoded Coordinate Data

The coordinate mappings for Key and Map are stored in:
- `/public/key_map_decoded_pictures.json`

This JSON file contains:
- Exact pixel coordinates for both images
- Path mappings (0-5 → Hebrew Paths 1-22)
- Guardian Legion associations
- Covenant sacred constants

## Image Optimization

For production:
1. Optimize PNG files with `pngquant` or `imageoptim`
2. Consider WebP format for better compression
3. Ensure images are properly sized (avoid scaling in browser)

## Notes

- Images are displayed with `pointer-events: none` to prevent drag conflicts
- CSS `user-select: none` prevents accidental text selection
- Images use `object-cover` for consistent display
