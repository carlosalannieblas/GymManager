// import React, { useCallback, useState } from "react";
// import "./AvatarUpdate.scss";
// import { Button, Image } from "semantic-ui-react";
// import { noImage } from "@/assets";
// import { useDropzone } from "react-dropzone";
// import { User, Storage } from "../../../api";
// import { getStorage } from "firebase/storage";
// import { ref, uploadBytes } from "firebase/storage";
// const userController = new User();
// const storageController = new Storage();
// const storage = getStorage();
// const uuid = userController.getMe()?.uid;
// export const AvatarUpdate = () => {
//   const [avatarUrl, setAvatarUrl] = useState(
//     userController.getMe()?.photoURL || noImage
//   );
//   const onDrop = useCallback(async (acceptedFile: any) => {
//     setAvatarUrl(URL.createObjectURL(acceptedFile[0]));
//     const response = await storageController.uploadFile(
//       acceptedFile[0],
//       "avatar",
//       uuid
//     );
//   }, []);
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
//   return (
//     <div className="avatar-update" {...getRootProps()}>
//       <input {...getInputProps()} onChange={AvatarUpdate} />
//       <Image src={avatarUrl} />
//     </div>
//   );
// };
import React, { useCallback, useContext, useState } from "react";
import "./AvatarUpdate.scss";
import { Image } from "semantic-ui-react";
import { noImage } from "@/assets";
import { useDropzone } from "react-dropzone";
import { User } from "../../../api"; //puede q estos sean el problema
import { getDownloadURL } from "firebase/storage";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../utils/firebase";
export function AvatarUpdate() {
  const userController = new User();

  const imagesRef = ref(storage, "wmtu3yiXOIXtqu5P0nB7lpNgZ5Y2");
  const [avatarUrl, setAvatarUrl] = useState(
    userController.getMe()?.photoURL || noImage
  );
  const onDrop = async (acceptedFiles: File[]) => {
    // Do something with the files

    console.log(acceptedFiles);
    const file = acceptedFiles?.[0];
    if (!file) return;

    setAvatarUrl(URL.createObjectURL(acceptedFiles?.[0]));
    const snapshot = await uploadBytes(imagesRef, file);
    const url = await getDownloadURL(snapshot.ref);
    console.log(url);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/png": [".png"] },
    multiple: false,
  });
  //hola
  return (
    <div className="avatar-update" {...getRootProps()}>
      <input {...getInputProps()} />
      <Image src={avatarUrl} />
    </div>
  );
}
