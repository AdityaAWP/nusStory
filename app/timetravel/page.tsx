"use client"

export default function MapPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
            <h1 className="text-6xl font-bold ">Time Travel</h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mt-5">
            Peta ini menunjukkan history tiap daerah di indonesia
            <br />
            Klik pada setiap daerah untuk mengetahui lebih lanjut tentang sejarah yang dimilikinya.
          </p>
        </div>

        <div className="bg-gray-400 rounded-lg shadow-lg" style={{ height: "400px" }}>
        </div>
      </div>
    </div>
  )
}
