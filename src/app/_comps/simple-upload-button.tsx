// "use client"

// import { useUploadThing } from '~/utils/uploadthing'
// import React, { useState } from 'react'
// import { useRouter } from 'next/navigation'

// // Define the allowed endpoints
// type AllowedEndpoint = "imageUploader" // Add other endpoints here if needed

// type UploadThingConfig = Parameters<typeof useUploadThing>[1]

// const useUploadThingInputProps = (endpoint: AllowedEndpoint, config?: UploadThingConfig) => {
//     const [files, setFiles] = useState<File[]>([])
//     const $ut = useUploadThing(endpoint, config)

//     const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (!e.target.files) return

//         const selectedFiles = Array.from(e.target.files)
//         setFiles(selectedFiles)
//     }

//     const startUpload = async () => {
//         if (files.length === 0) return
//         const result = await $ut.startUpload(files)
//         console.log("Upload Files", result)
//         // Clear files after upload
//         setFiles([])
//     }

//     return {
//         inputProps: {
//             onChange,
//             multiple: true,
//             accept: "image/*",
//         },
//         isUploading: $ut.isUploading,
//         startUpload,
//         files,
//     }
// }

// export default useUploadThingInputProps

// export function SimpleUploadButton() {
//     const router = useRouter()
//     const {inputProps, startUpload} = useUploadThingInputProps("imageUploader", {
//         onClientUploadComplete: () => {
//             router.refresh()
//         }
//     })

//     return (
//         <div>
//             <label htmlFor='upload-button'>Upload</label>
//             <input 
//                 id="upload-button" 
//                 type="file" 
//                 className="sr-only" 
//                 {...inputProps}
//                 onChange={(e) => {
//                     inputProps.onChange(e)
//                     startUpload()
//                 }}
//             />      
//         </div>
//     );
// }



// "use client"

// import { useUploadThing } from '~/utils/uploadthing'
// import React, { useState } from 'react'
// import { useRouter } from 'next/navigation'

// type UploadThingConfig = Parameters<typeof useUploadThing>[0]

// const useUploadThingInputProps = (config: UploadThingConfig) => {
//     const [files, setFiles] = useState<File[]>([])
//     const $ut = useUploadThing(config)

//     const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (!e.target.files) return

//         const selectedFiles = Array.from(e.target.files)
//         setFiles(selectedFiles)
//     }

//     const startUpload = async () => {
//         if (files.length === 0) return
//         const result = await $ut.startUpload(files)
//         console.log("Upload Files", result)
//         // Clear files after upload
//         setFiles([])
//     }

//     return {
//         inputProps: {
//             onChange,
//             multiple: true,//($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
//             accept: "image/*",
//         },
//         isUploading: $ut.isUploading,
//         startUpload,
//         files,
//     }
// }

// export default useUploadThingInputProps

// export function SimpleUploadButton() {
//     const router = useRouter()
//     const {inputProps} = useUploadThingInputProps('imageUploader',{
//         onClientUploadComplete(){
//             router.refresh()
//         }
//     })

//     return (
//         <div>
//             <label htmlFor='upload-button'>Upload</label>
//             <input id="upload-button" type="file" className="sr-only" {...inputProps}/>      
//         </div>
//     );
// }







"use client"

import { useUploadThing } from '~/utils/uploadthing'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

type UploadThingConfig = Parameters<typeof useUploadThing>[0]

const useUploadThingInputProps = (config: UploadThingConfig) => {
    const [files, setFiles] = useState<File[]>([])
    const $ut = useUploadThing(config)

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return

        const selectedFiles = Array.from(e.target.files)
        setFiles(selectedFiles)
    }

    const startUpload = async () => {
        if (files.length === 0) return
        const result = await $ut.startUpload(files)
        console.log("Upload Files", result)
        // Clear files after upload
        setFiles([])
    }

    return {
        inputProps: {
            onChange,
            multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
            accept: "image/*",
        },
        isUploading: $ut.isUploading,
        startUpload,
        files,
    }
}

export default useUploadThingInputProps

export function SimpleUploadButton() {
    const router = useRouter()
    const {inputProps} = useUploadThingInputProps('imageUploader')

    return (
        <div>
            <label htmlFor='upload-button'>Upload</label>
            <input id="upload-button" type="file" className="sr-only" {...inputProps}/>      
        </div>
    );
}






// "use client"

// import { useUploadThing } from '~/utils/uploadthing'
// import React, { useState } from 'react'

// type UploadThingConfig = Parameters<typeof useUploadThing>[0]

// const useUploadThingInputProps = (config: UploadThingConfig) => {
//     const [files, setFiles] = useState<File[]>([])
//     const $ut = useUploadThing(config)

//     const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (!e.target.files) return

//         const selectedFiles = Array.from(e.target.files)
//         setFiles(selectedFiles)
//     }

//     const startUpload = async () => {
//         if (files.length === 0) return
//         const result = await $ut.startUpload(files)
//         console.log("Upload Files", result)
//         // Clear files after upload
//         setFiles([])
//     }

//     // Determine if multiple file upload is allowed
//     const isMultipleAllowed = () => {
//         if (typeof config.endpoint === 'string') {
//             // If endpoint is a string, we can't determine the config
//             // So we'll default to allowing multiple
//             return true
//         }
//         // If endpoint is an object, we can check its configuration
//         const endpointConfig = config.endpoint.config
//         if (endpointConfig && 'image' in endpointConfig) {
//             return (endpointConfig.image.maxFileCount ?? 1) > 1
//         }
//         // Default to single file if we can't determine
//         return false
//     }

//     return {
//         inputProps: {
//             onChange,
//             multiple: isMultipleAllowed(),
//             accept: "image/*", // Adjust this based on your allowed file types
//         },
//         isUploading: $ut.isUploading,
//         startUpload,
//         files,
//     }
// }

// export default useUploadThingInputProps 

















// "use client"

// import {useUploadThing} from '~/utils/uploadthing'

// type Input = Parameters<typeof useUploadThing>

// const useUploadThingInputProps = (...agrs: Input) => {
//     const $ut = useUploadThing(...args);

//     const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//         if(!e.target.files) return;

//         const selectedFiles = Array.from(e.target.files)
//         const result = await $ut.startUpload(selectedFiles)

//         console.log("Upload Files",result)

//         return {
//             inputProps:{
//                 onChange,
//                 multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
//                 accept: "image/*",
//             },
//             isUploading: $ut.isUploading,
//         }
//     }
// }




// import {
//     generateReactHelpers,
//       generateUploadButton,
//       generateUploadDropzone,
//     } from "@uploadthing/react";
     
//     import type { OurFileRouter } from "~/app/api/uploadthing/core";
     
//     export const UploadButton = generateUploadButton<OurFileRouter>();
//     export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
  
//   export const {useUploadThing} = generateReactHelpers<OurFileRouter>()