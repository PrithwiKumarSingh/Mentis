export function LinkCard({ metadata, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border rounded-lg overflow-hidden"
    >
      {metadata.image && (
        <img
          src={metadata.image}
          alt={metadata.title}
          className="w-full h-40 object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="font-semibold">
          {metadata.title}
        </h3>

        <p className="text-sm text-gray-600 mt-2">
          {metadata.description}
        </p>
      </div>
    </a>
  );
}