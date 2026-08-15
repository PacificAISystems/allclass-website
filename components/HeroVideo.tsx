'use client'
export function HeroVideo() {
  return (
    <video
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="https://images.pexels.com/videos/17899033/pexels-photo-17899033.jpeg?auto=compress&cs=tinysrgb&w=1920"
    >
      <source
        src="https://videos.pexels.com/video-files/17899033/17899033-hd_1920_1080_24fps.mp4"
        type="video/mp4"
      />
      <source
        src="https://videos.pexels.com/video-files/18749847/18749847-hd_1920_1080_60fps.mp4"
        type="video/mp4"
      />
    </video>
  )
}
