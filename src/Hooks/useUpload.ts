import { storage } from '../Firebase/Config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default (
  file: File,
  folder: string,
  CallBack: (data: any, err?: any) => void,
) => {
  const storageRef = ref(storage, `${folder}/${crypto.randomUUID()}`);
  uploadBytes(storageRef, file).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      CallBack(url);
    });
  });
};
