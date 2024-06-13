"use client"

import {useUploadThing} from '~/utils/uploadthing'

type Input = Parameters<typeof useUploadThing>

const useUploadThingInputProps = (...agrs: Input) => {
    const $ut = useUploadThing(...args);

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) return;

        const selectedFiles = Array.from(e.target.files)
        const result = await $ut.startUpload(selectedFiles)

        console.log("Upload Files",result)

        return {
            inputProps:{
                onChange,
                multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
                accept: "image/*",
            },
            isUploading: $ut.isUploading,
        }
    }
}




// import {
//     generateReactHelpers,
//       generateUploadButton,
//       generateUploadDropzone,
//     } from "@uploadthing/react";
     
//     import type { OurFileRouter } from "~/app/api/uploadthing/core";
     
//     export const UploadButton = generateUploadButton<OurFileRouter>();
//     export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
  
//   export const {useUploadThing} = generateReactHelpers<OurFileRouter>()