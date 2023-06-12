import React, { useCallback, useState } from "react";
import "./AvatarUpdate.scss";
import { Image } from "semantic-ui-react";
import { noImage } from "@/assets";
import {useDropzone} from 'react-dropzone';
import { User, Storage} from "../../../api";
import { getStorage } from "firebase/storage";
import{ref, uploadBytes} from "firebase/storage";
const userController = new User();
const storageController = new Storage();
const storage = getStorage();
const uuid = userController.getMe()?.uid;
export const AvatarUpdate = () => {
    const [avatarUrl, setAvatarUrl] = useState(userController.getMe()?.photoURL || noImage)
    const onDrop = useCallback(async (acceptedFile: any) => {
         setAvatarUrl(URL.createObjectURL(acceptedFile[0]));
         const response = await storageController.uploadFile(acceptedFile[0],"avatar",uuid);
       

      }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
          <div className="avatar-update" {...getRootProps()}>
        <input {...getInputProps()} onChange={AvatarUpdate}/>
    <Image src={avatarUrl}/>
    </div>
  )
}
