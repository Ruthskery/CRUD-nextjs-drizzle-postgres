import { NextResponse } from 'next/server';
import { db } from '@/db';
import { users } from '@/db/schema';
import type { NewUser } from '@/db/schema';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userData: NewUser = {
      name: body.name,
      age: Number(body.age),
      email: body.email,
    };

    const [newUser] = await db.insert(users)
      .values(userData)
      .returning();

    return NextResponse.json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allUsers = await db.select().from(users);
    return NextResponse.json(allUsers);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
} 