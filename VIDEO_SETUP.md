# Video Banner Setup Guide

## Video File Management

### Option 1: Include Videos in Repository (For smaller files)
If your total video size is manageable (< 100MB), you can include them directly:

```bash
# Create videos directory
mkdir -p src/videos

# Copy your videos
cp -r /path/to/media_mp4/* src/videos/

# Add to git (be mindful of file sizes)
git add src/videos/
git commit -m "Add research highlight videos"
```

### Option 2: Use Git LFS (For larger files) - RECOMMENDED
For 84MB of videos, Git LFS is ideal:

```bash
# Install Git LFS if not already installed
git lfs install

# Track MP4 files
git lfs track "*.mp4"
git add .gitattributes

# Create videos directory and copy files
mkdir -p src/videos
cp -r /path/to/media_mp4/* src/videos/

# Add and commit
git add src/videos/
git commit -m "Add research videos via Git LFS"
```

### Option 3: External Hosting (For best performance)
Host videos on a CDN or cloud storage:
- Upload to YouTube/Vimeo (unlisted)
- Use AWS S3 / CloudFront
- Use Cloudinary or similar services

## Implementation

### 1. Add Videos to Your Site

After copying videos to `src/videos/`, update your homepage:

```javascript
// In src/pages/index.js
import VideoBanner from "../components/VideoBanner"

// Define your videos
const researchVideos = [
  {
    src: "/videos/video1.mp4",
    poster: "/videos/video1-poster.jpg", // Optional thumbnail
    title: "Neural Network Visualization",
    description: "Real-time visualization of deep learning processes"
  },
  {
    src: "/videos/video2.mp4",
    poster: "/videos/video2-poster.jpg",
    title: "Protein Folding Simulation",
    description: "Advanced molecular dynamics simulation"
  },
  // Add more videos...
]

// In your component
<VideoBanner videos={researchVideos} />
```

### 2. Generate Video Thumbnails (Optional)

```bash
# Install ffmpeg if not already installed
brew install ffmpeg

# Generate thumbnails
for video in src/videos/*.mp4; do
  ffmpeg -i "$video" -ss 00:00:01.000 -vframes 1 "${video%.mp4}-poster.jpg"
done
```

### 3. Optimize Videos for Web

```bash
# Compress videos for web (requires ffmpeg)
for video in src/videos/*.mp4; do
  ffmpeg -i "$video" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "${video%.mp4}-optimized.mp4"
done
```

## Performance Considerations

1. **Lazy Loading**: The VideoBanner component only loads videos when needed
2. **Preload Strategy**: Set to "metadata" to load video dimensions without full download
3. **Progressive Enhancement**: Shows poster images while videos load
4. **Mobile Optimization**: Reduces quality on mobile devices

## Alternative: Video Grid Gallery

If you prefer showing all videos at once:

```javascript
// Use the grid view
<div className="video-grid">
  {videos.map((video, index) => (
    <VideoGridItem key={index} video={video} />
  ))}
</div>
```

## Customization

The VideoBanner component supports:
- Custom styling via CSS variables
- Multiple layout options
- Autoplay on mute (for background videos)
- Click-to-play controls
- Keyboard navigation

## Best Practices

1. Keep individual videos under 20MB
2. Use MP4 format with H.264 codec
3. Provide poster images for better UX
4. Consider mobile data usage
5. Add captions for accessibility