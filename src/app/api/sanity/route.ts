// @ts-nocheck
/* eslint-disable */

import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'
import { GETPROJECTSQUERY, getLatestProjectsQuery } from '@/lib/querys'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const queryType = searchParams.get('type')
  const category = searchParams.get('category') || ''

  try {
    if (queryType === 'latest') {
      const projects = await client.fetch(getLatestProjectsQuery)
      return NextResponse.json({ projects })
    } else {
      const projects = await client.fetch(GETPROJECTSQUERY, { category })
      return NextResponse.json({ projects })
    }
  } catch (error) {
    console.error('Error fetching data from Sanity:', error)
    return NextResponse.json(
      { error: 'Failed to fetch data from Sanity' },
      { status: 500 }
    )
  }
}
