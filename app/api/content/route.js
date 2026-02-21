// app/api/content/route.js
import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'
import matter from 'gray-matter'

export async function GET() {
  try {
    // Baca file hero
    const heroPath = path.join(process.cwd(), 'content', 'hero.md')
    const heroFile = fs.readFileSync(heroPath, 'utf-8')
    const { data: hero } = matter(heroFile)

    // Baca file features
    const featuresPath = path.join(process.cwd(), 'content', 'features.md')
    const featuresFile = fs.readFileSync(featuresPath, 'utf-8')
    const { data: features } = matter(featuresFile)

    return NextResponse.json({ hero, features })
  } catch (error) {
    console.error('Error loading content:', error)
    return NextResponse.json(
      { error: 'Failed to load content' },
      { status: 500 }
    )
  }
}