
'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function GitHubSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      localStorage.setItem('token', token);
      router.push('/dashboard'); 
    } else {
      router.push('/login');
    }
  }, [router, searchParams]);

  return (
    <div className="h-screen flex items-center justify-center text-lg text-gray-600">
      Redirecionando...
    </div>
  );
}
