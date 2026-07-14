interface YoutubeProps {
  link: string;
}

export function Youtube({ link }: YoutubeProps) {
  const regExp =
    /(?:youtube\.com\/(?:watch\?v=|live\/|embed\/)|youtu\.be\/)([^&\n?#]+)/;

  const match = link.match(regExp);
  const videoId = match ? match[1] : "";

  return (
    <iframe
      className="w-full mt-4 h-42.5 rounded-2xl max-w-full"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}