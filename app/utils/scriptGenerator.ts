interface FormData {
  restaurantName: string
  sellingPoints: string
  targetAudience: string
  videoLength: string
  keyVisuals: string
}

interface ScriptSection {
  title: string
  timestamp: string
  narration: string
  visuals: string
  music: string
  onScreenText: string
}

export function generateScript(data: FormData) {
  const sellingPointsList = data.sellingPoints.split(',').map(s => s.trim())
  const visualsList = data.keyVisuals.split(',').map(s => s.trim())

  const script: ScriptSection[] = [
    {
      title: 'Opening Hook',
      timestamp: '0:00 - 0:10',
      narration: `Craving something delicious? ${data.restaurantName} is here to satisfy your hunger with flavors you won't forget!`,
      visuals: `Fast-paced montage of ${visualsList[0] || 'signature dishes'}, steaming hot food, vibrant restaurant exterior. Quick cuts showing the energy and excitement of the location.`,
      music: 'Upbeat, energetic pop/rock track (high tempo, 120-140 BPM)',
      onScreenText: `${data.restaurantName} - Where Flavor Meets Fun!`
    },
    {
      title: 'Restaurant Introduction',
      timestamp: '0:10 - 0:25',
      narration: `Welcome to ${data.restaurantName}, where we're passionate about serving ${data.targetAudience} the very best. From the moment you walk through our doors, you'll experience the difference.`,
      visuals: `Welcoming shots of the restaurant interior, friendly staff greeting customers, ${visualsList[1] || 'happy diners'} enjoying their meals. Show the warm, inviting atmosphere.`,
      music: 'Transition to uplifting, feel-good background music (medium tempo)',
      onScreenText: `Serving ${data.targetAudience} Since Day One`
    },
    {
      title: 'Unique Selling Points - Part 1',
      timestamp: '0:25 - 0:45',
      narration: `What makes us special? ${sellingPointsList[0] || 'Our commitment to quality'}. ${sellingPointsList[1] ? `Plus, ${sellingPointsList[1]}.` : 'Every bite is crafted with care.'} We don't just serve food – we create experiences that keep you coming back for more.`,
      visuals: `Close-up shots demonstrating the first selling point (e.g., fresh ingredients being prepared, ${visualsList[2] || 'kitchen activity'}). Show the attention to detail and quality standards.`,
      music: 'Continued uplifting music with slightly increased intensity',
      onScreenText: sellingPointsList[0] || 'Quality You Can Taste'
    },
    {
      title: 'Menu Showcase',
      timestamp: '0:45 - 1:05',
      narration: `Our menu is packed with mouth-watering options that'll make your taste buds dance. Whether you're in the mood for a classic favorite or something adventurous, we've got you covered.`,
      visuals: `Beautiful, appetizing shots of signature menu items. Slow-motion footage of ${visualsList[0] || 'burgers being assembled'}, cheese melting, toppings being added. Multiple dishes on display showcasing variety.`,
      music: 'Music swells with appetite-inducing sonic elements',
      onScreenText: 'Taste the Difference'
    },
    {
      title: 'Unique Selling Points - Part 2',
      timestamp: '1:05 - 1:20',
      narration: `${sellingPointsList[2] ? `And here's the best part: ${sellingPointsList[2]}.` : 'We go above and beyond for every customer.'} At ${data.restaurantName}, your satisfaction isn't just a goal – it's our guarantee.`,
      visuals: `Shots highlighting the second/third unique selling point. ${visualsList[3] || 'Happy customers'} interacting, testimonial-style footage (without audio), satisfied expressions.`,
      music: 'Energetic music continues with positive vibes',
      onScreenText: sellingPointsList[2] || 'Your Satisfaction Guaranteed'
    },
    {
      title: 'Atmosphere & Experience',
      timestamp: '1:20 - 1:35',
      narration: `But ${data.restaurantName} isn't just about great food. It's about the experience, the vibe, the memories you create here. Whether you're grabbing a quick bite or settling in with friends, we've created the perfect spot for ${data.targetAudience}.`,
      visuals: `Wide shots of the restaurant atmosphere, ${visualsList[1] || 'groups of people'} laughing and enjoying themselves, various dining scenarios (families, friends, couples). Show the social aspect.`,
      music: 'Warm, inviting instrumental music',
      onScreenText: 'More Than Just a Meal'
    },
    {
      title: 'Call to Action',
      timestamp: '1:35 - 1:50',
      narration: `So what are you waiting for? Come taste what everyone's talking about. Visit ${data.restaurantName} today and discover your new favorite spot. We can't wait to serve you!`,
      visuals: `Final montage combining best shots: food, happy customers, restaurant exterior with visible signage. End with ${data.restaurantName} logo prominently displayed.`,
      music: 'Music builds to an uplifting crescendo',
      onScreenText: `Visit ${data.restaurantName} Today!`
    },
    {
      title: 'Closing & Contact Info',
      timestamp: '1:50 - 2:00',
      narration: `${data.restaurantName} – where every meal is a celebration!`,
      visuals: `Clean branded end screen with ${data.restaurantName} logo, location information placeholder, and social media icons.`,
      music: 'Music fades out smoothly with positive resolution',
      onScreenText: `${data.restaurantName}\n[Address] | [Phone] | [Website]\nFollow us @${data.restaurantName.toLowerCase().replace(/\s+/g, '')}`
    }
  ]

  return {
    restaurantName: data.restaurantName,
    targetAudience: data.targetAudience,
    videoLength: data.videoLength,
    sections: script,
    productionNotes: {
      overallTone: 'Lively, energetic, and appetizing. The script should feel authentic and exciting without being overwhelming.',
      cinematography: 'Use dynamic camera movements, close-ups for food shots, and natural lighting where possible. Maintain high energy through varied shot composition.',
      pacing: 'Keep cuts quick during food montages (2-3 seconds per shot) and slightly longer for atmospheric scenes (4-5 seconds). Match editing pace to music tempo.',
      colorGrading: 'Warm, saturated colors that make food look appetizing. Enhance reds, oranges, and yellows while keeping skin tones natural.',
      voiceOver: 'Friendly, enthusiastic voice that sounds genuine and approachable. Not overly salesy – more like a friend making a recommendation.',
      additionalTips: [
        'Capture multiple angles of each key dish for editing flexibility',
        'Include authentic customer reactions (with releases)',
        'Ensure all branding is clearly visible but not forced',
        'Consider time of day for optimal natural lighting',
        'Have backup audio track options for different platform requirements'
      ]
    }
  }
}
