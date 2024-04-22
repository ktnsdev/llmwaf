import { useRouter } from 'next/router';

export default function D1() {
  const router = useRouter();
  const currentPath = router.pathname;  

  return (
    <div className="p-4 w-screen h-screen flex flex-col items-center">
      <h1 className="text-xl">Current path: {currentPath}</h1>
    </div>
  );
}
