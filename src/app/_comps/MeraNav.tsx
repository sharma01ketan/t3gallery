'use client'

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { UploadButton } from '~/utils/uploadthing'
import { useRouter } from 'next/navigation'
//read more about this and its use cases

export default function MeraNav(){
    const router = useRouter()

    return (
      <nav className="flex items-center justify-between w-full p-4 font-semibold border-b">
        <div>Gallery</div> 
        <div className="flex flex-row">
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <UploadButton 
                endpoint='imageUploader'
                onClientUploadComplete={()=>{
                    router.refresh()
                }}
                />
                <UserButton/>
            </SignedIn>
        </div>
      </nav>
    )
  }