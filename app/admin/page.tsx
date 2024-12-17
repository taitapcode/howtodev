import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TerminalIcon } from '@/components/icons';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export async function getCurrentUser() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error('Error fetching user:', error);
    redirect('/login'); // Redirect to login if there's an error
  }

  return user;
}

export default async function AdminPage() {
  const user = await getCurrentUser();
  console.log(user);

  return (
    <div className='flex h-screen'>
      <nav className='flex h-full w-64 flex-col bg-gray-800 text-white'>
        <Link className='flex items-center gap-2 p-4 text-xl font-bold' href='/admin'>
          <TerminalIcon width={20} height={20} />
          Admin Panel
        </Link>
        <div className='flex flex-1 flex-col p-4'>
          <Button className='mt-auto'>Logout</Button>
        </div>
      </nav>
      <div className='flex-1 p-4'>
        <h1 className='text-2xl'>Admin Dashboard</h1>
        {/* Add your admin content here */}
      </div>
    </div>
  );
}
