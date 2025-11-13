'use client'

import { useState } from 'react'
import { generateScript } from '../utils/scriptGenerator'

interface ScriptFormProps {
  onGenerate: (script: any) => void
}

export default function ScriptForm({ onGenerate }: ScriptFormProps) {
  const [formData, setFormData] = useState({
    restaurantName: '',
    sellingPoints: '',
    targetAudience: '',
    videoLength: '',
    keyVisuals: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const script = generateScript(formData)
    onGenerate(script)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Restaurant Name *
          </label>
          <input
            type="text"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            required
            placeholder="e.g., Burger Palace"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Unique Selling Points *
          </label>
          <textarea
            name="sellingPoints"
            value={formData.sellingPoints}
            onChange={handleChange}
            required
            rows={3}
            placeholder="e.g., Fresh ingredients, homemade sauces, 24/7 service"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Target Audience *
          </label>
          <input
            type="text"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            required
            placeholder="e.g., Young professionals, families, students"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Video Length (minutes) *
          </label>
          <input
            type="text"
            name="videoLength"
            value={formData.videoLength}
            onChange={handleChange}
            required
            placeholder="e.g., 1-2 minutes"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Key Visuals or Scenes *
          </label>
          <textarea
            name="keyVisuals"
            value={formData.keyVisuals}
            onChange={handleChange}
            required
            rows={3}
            placeholder="e.g., Kitchen shots, happy customers, signature dishes"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-4 px-6 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg"
        >
          Generate Video Script 🎬
        </button>
      </form>
    </div>
  )
}
