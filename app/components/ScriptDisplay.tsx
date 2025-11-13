'use client'

interface ScriptDisplayProps {
  script: any
}

export default function ScriptDisplay({ script }: ScriptDisplayProps) {
  const downloadScript = () => {
    let textContent = `VIDEO SCRIPT FOR ${script.restaurantName.toUpperCase()}\n`
    textContent += `Target Audience: ${script.targetAudience}\n`
    textContent += `Video Length: ${script.videoLength}\n`
    textContent += `\n${'='.repeat(80)}\n\n`

    script.sections.forEach((section: any, index: number) => {
      textContent += `SCENE ${index + 1}: ${section.title.toUpperCase()}\n`
      textContent += `${'-'.repeat(80)}\n`
      textContent += `Timestamp: ${section.timestamp}\n\n`
      textContent += `NARRATION:\n${section.narration}\n\n`
      textContent += `VISUALS:\n${section.visuals}\n\n`
      textContent += `MUSIC:\n${section.music}\n\n`
      textContent += `ON-SCREEN TEXT:\n${section.onScreenText}\n\n`
      textContent += `${'='.repeat(80)}\n\n`
    })

    textContent += `\nPRODUCTION NOTES\n${'='.repeat(80)}\n\n`
    textContent += `Overall Tone: ${script.productionNotes.overallTone}\n\n`
    textContent += `Cinematography: ${script.productionNotes.cinematography}\n\n`
    textContent += `Pacing: ${script.productionNotes.pacing}\n\n`
    textContent += `Color Grading: ${script.productionNotes.colorGrading}\n\n`
    textContent += `Voice-Over Direction: ${script.productionNotes.voiceOver}\n\n`
    textContent += `Additional Tips:\n`
    script.productionNotes.additionalTips.forEach((tip: string) => {
      textContent += `• ${tip}\n`
    })

    const blob = new Blob([textContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${script.restaurantName.replace(/\s+/g, '_')}_Video_Script.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Video Script: {script.restaurantName}
          </h2>
          <p className="text-gray-600">
            Target: {script.targetAudience} • Length: {script.videoLength}
          </p>
        </div>
        <button
          onClick={downloadScript}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
        >
          📥 Download Script
        </button>
      </div>

      <div className="space-y-8">
        {script.sections.map((section: any, index: number) => (
          <div
            key={index}
            className="border-l-4 border-orange-500 pl-6 py-4 bg-gradient-to-r from-orange-50 to-transparent rounded-r-lg"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                Scene {index + 1}: {section.title}
              </h3>
              <p className="text-sm text-gray-600 font-mono">{section.timestamp}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-orange-600 uppercase mb-2 flex items-center gap-2">
                  🎤 Narration
                </h4>
                <p className="text-gray-700 leading-relaxed italic bg-white p-4 rounded-lg">
                  "{section.narration}"
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-blue-600 uppercase mb-2 flex items-center gap-2">
                  🎥 Visuals
                </h4>
                <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg">
                  {section.visuals}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-bold text-purple-600 uppercase mb-2 flex items-center gap-2">
                    🎵 Music
                  </h4>
                  <p className="text-gray-700 bg-purple-50 p-4 rounded-lg">
                    {section.music}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-green-600 uppercase mb-2 flex items-center gap-2">
                    💬 On-Screen Text
                  </h4>
                  <p className="text-gray-700 bg-green-50 p-4 rounded-lg font-semibold">
                    {section.onScreenText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Production Notes</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-700 mb-1">Overall Tone:</h4>
            <p className="text-gray-600">{script.productionNotes.overallTone}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-1">Cinematography:</h4>
            <p className="text-gray-600">{script.productionNotes.cinematography}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-1">Pacing:</h4>
            <p className="text-gray-600">{script.productionNotes.pacing}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-1">Color Grading:</h4>
            <p className="text-gray-600">{script.productionNotes.colorGrading}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-1">Voice-Over Direction:</h4>
            <p className="text-gray-600">{script.productionNotes.voiceOver}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Additional Tips:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {script.productionNotes.additionalTips.map((tip: string, i: number) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
