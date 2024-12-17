'use server';

import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logoutAction() {
  const supabase = await createClient();

  // Sign out the user
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Error logging out:', error);
    return;
  }

  // Clear all cookies
  const cookieStore = await cookies();
  cookieStore.getAll().forEach((cookie) => {
    cookieStore.delete(cookie.name);
  });

  // Redirect to login page
  redirect('/admin/login');
}
