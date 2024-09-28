// "use server"
// import { CheckSessionData } from '@/app/checkSessionServer';
// import { NextResponse } from 'next/server';

// export async function GET() {
//     const session = await CheckSessionData();

//     if (!session) {
//         return NextResponse.json({ error: 'Session not found' }, { status: 404 });
//     }

//     return NextResponse.json({ session }, { status: 200 });
// }
