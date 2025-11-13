'use client'

import { useState } from 'react'
import ScriptForm from './components/ScriptForm'
import ScriptDisplay from './components/ScriptDisplay'

export default function Home() {
  const [generatedScript, setGeneratedScript] = useState<any>(null)

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🎬 Fast Food Video Script Generator
          </h1>
          <p className="text-xl text-gray-600">
            Create compelling promotional video scripts for your restaurant
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {!generatedScript ? (
            <ScriptForm onGenerate={setGeneratedScript} />
          ) : (
            <div>
              <button
                onClick={() => setGeneratedScript(null)}
                className="mb-6 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                ← Create New Script
              </button>
              <ScriptDisplay script={generatedScript} />
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
