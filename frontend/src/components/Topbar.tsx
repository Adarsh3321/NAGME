import { SignedOut, UserButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SignInOAuthButtons from "./SignInOAuthButtons";
import { useAuthStore } from "@/stores/useAuthStore";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const Topbar = () => {
	const { isAdmin } = useAuthStore();
	console.log({ isAdmin });

	return (
		<div
			className='flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 
      backdrop-blur-md z-10
    '
		>
			<div className='flex gap-2 items-center'>
				<img src='/spotify.png' className='size-8' alt='Spotify logo' />
				Spotify
			</div>
			<div className='flex items-center gap-4'>
				{isAdmin && (
					<Link to={"/admin"} className={cn(buttonVariants({ variant: "outline" }))}>
						<LayoutDashboardIcon className='size-4  mr-2' />
						<span className='hidden md:inline'>Admin Dashboard</span>
					</Link>
				)}

				<SignedOut>
					<SignInOAuthButtons />
				</SignedOut>
				{/* GitHub Button */}
				<a
					href='https://github.com/Adarsh3321'
					target='_blank'
					rel='noopener noreferrer'
					className='flex items-center justify-center p-2 transition-transform transform hover:scale-105 hover:bg-green-500 rounded'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='size-4 mr-2'
						fill='currentColor'
						viewBox='0 0 24 24'
					>
						<path d='M12 .5C5.373.5.5 5.373.5 12c0 5.273 3.438 9.73 8.205 11.387.6.111.82-.26.82-.577 0-.287-.01-1.243-.01-2.25-3.338.725-4.042-1.608-4.042-1.608-.545-1.386-1.33-1.756-1.33-1.756-1.086-.743.083-.728.083-.728 1.204.084 1.838 1.236 1.838 1.236 1.068 1.83 2.8 1.301 3.48.995.108-.774.42-1.301.765-1.601-2.665-.303-5.466-1.332-5.466-5.93 0-1.313.47-2.387 1.241-3.22-.125-.303-.54-1.527.116-3.176 0 0 1.007-.322 3.3 1.23A11.516 11.516 0 0112 4.1c1.018.002 2.045.138 3.002.404 2.292-1.554 3.3-1.23 3.3-1.23.657 1.649.243 2.873.118 3.176.773.833 1.241 1.907 1.241 3.22 0 4.611-2.804 5.623-5.471 5.92.43.37.814 1.1.814 2.222 0 1.605-.014 2.905-.014 3.296 0 .32.218.694.825.577C20.563 21.23 24 16.773 24 12c0-6.627-5.373-11.5-12-11.5z' />
					</svg>
					<span className='hidden md:inline'>GODRIC</span>
				</a>

				<UserButton />
			</div>
		</div>
	);
};
export default Topbar;
