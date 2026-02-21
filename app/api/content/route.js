export async function GET() {
  return Response.json({
    hero: {
      title: "HEADPHONE",
      subtitle: "ACCESSORIS",
      description: "Ini dari API",
      hero_image: "/headphone.png"
    },
    features: {
      features: [
        { title: "PRODUCT 01", description: "Test 1" },
        { title: "PRODUCT 02", description: "Test 2" }
      ]
    }
  })
}