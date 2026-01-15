export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

        <p className="text-lg font-medium text-gray-600 animate-pulse">
          Loading DevGear Hub...
        </p>
      </div>
    </div>
  );
}
