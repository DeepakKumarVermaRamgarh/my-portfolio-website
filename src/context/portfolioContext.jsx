import { createContext, useContext, useEffect, useState } from "react";
import validator from "validator";
import { toast } from "react-toastify";
import { db, portfolioRef, storage } from "../config/firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import {} from "firebase/database";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useContextValue } from "./userContext";

const PortfolioContext = createContext();

export const usePortfolioContext = () => {
  return useContext(PortfolioContext);
};

const imgType = ["png", "jpg", "jpeg"];

export const PortfolioContextProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState();
  const { user } = useContextValue();
  let imageURL = "";

  useEffect(() => {
    const unsubscribe = listenToPortfolioChanges((portfolioData) => {
      setPortfolio(portfolioData[0]);
    });

    return () => {
      // Unsubscribe from the real-time listener when the component unmounts
      unsubscribe();
    };
  }, []);

  const uploadFile = async (file) => {
    try {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log(`Uploading ${progress}% done`);
        },
        (error) => {
          console.log(error);
        }
      );

      await uploadTask;

      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      imageURL = downloadURL;
    } catch (error) {
      console.error(error);
    }
  };

  const removeFile = async (fileUrl) => {
    const fileRef = ref(storage, fileUrl);
    try {
      await deleteObject(fileRef);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateProfile = async (profileData) => {
    const { name, designation, email, mobile, address, about, avatar } =
      profileData;

    if (!name) return toast.error("Invalid Name");

    if (!designation) return toast.error("Invalid Position");

    if (!email || !validator.isEmail(email))
      return toast.error("Invalid Email");

    if (!mobile || mobile <= 999999999)
      return toast.error("Invalid Mobile Number");

    if (!address || address.length < 4) return toast.error("Invalid Address");

    if (!about) return toast.error("Invalid About");

    if (!avatar || !imgType.includes(avatar.type.split("/")[1]))
      return toast.error("Invalid Avatar");

    try {
      if (portfolio.avatar) {
        await removeFile(portfolio.avatar);
      }

      await uploadFile(avatar);

      await updateDoc(doc(db, "portfolio", user.uid), {
        name,
        designation,
        email,
        mobile,
        address,
        about,
        avatar: imageURL,
        timeStamp: serverTimestamp(),
      });
      imageURL = "";
      toast.success("Profile Updated Successfully");
    } catch (error) {
      toast.error("Error in updating profile");
      console.log(error);
    }
  };

  function listenToPortfolioChanges(callback) {
    const portfolioCollectionRef = collection(db, "portfolio");

    const unsubscribe = onSnapshot(portfolioCollectionRef, (querySnapshot) => {
      const portfolioData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(portfolioData);
    });

    return unsubscribe;
  }

  const updateSocialLinks = async (socialLinks) => {
    const { linkedIn, gitHub, codingNinjas } = socialLinks;

    const docRef = doc(db, "portfolio", user.uid);

    try {
      await updateDoc(docRef, {
        linkedIn,
        gitHub,
        codingNinjas,
      });
      toast.success("Links updated successfully.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addProject = async (project) => {
    const docRef = doc(db, "portfolio", user.uid);
    const { title, description, technologies, thumb, link } = project;

    try {
      await uploadFile(thumb);

      const docSnapshot = await getDoc(docRef);
      const existingProjects = docSnapshot.exists()
        ? docSnapshot.data().Projects || []
        : [];

      await updateDoc(docRef, {
        Projects: [
          {
            title,
            description,
            technologies,
            thumb: imageURL,
            link,
          },
          ...existingProjects,
        ],
      });
      imageURL = "";
      toast.success("Project Added Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeProject = async (Project) => {
    const docRef = doc(db, "portfolio", user.uid);
    try {
      await removeFile(Project.thumb);
      await updateDoc(docRef, {
        Projects: arrayRemove(Project),
      });
      toast.success("Project Removed Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addSkill = async (skill) => {
    const { title, category, thumb } = skill;
    const docRef = doc(db, "portfolio", user.uid);

    try {
      await uploadFile(thumb);

      const docSnapshot = await getDoc(docRef);
      const existingSkills = docSnapshot.exists()
        ? docSnapshot.data().Skills || []
        : [];

      await updateDoc(docRef, {
        Skills: [
          {
            title,
            category,
            thumb: imageURL,
          },
          ...existingSkills,
        ],
      });
      imageURL = "";
      toast.success("Skill Added Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeSkill = async (skill) => {
    const docRef = doc(db, "portfolio", user.uid);
    try {
      if (skill.thumb) {
        await removeFile(skill.thumb);
      }

      await updateDoc(docRef, {
        Skills: arrayRemove(skill),
      });
      toast.success("Skill Removed Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addCertificate = async (Certificate) => {
    const { title, date, category, thumb } = Certificate;

    const docRef = doc(db, "portfolio", user.uid);
    try {
      await uploadFile(thumb);

      const docSnapshot = await getDoc(docRef);
      const existingCertificates = docSnapshot.exists()
        ? docSnapshot.data().Certificates || []
        : [];

      await updateDoc(docRef, {
        Certificates: [
          {
            title,
            date,
            category,
            thumb: imageURL,
          },
          ...existingCertificates,
        ],
      });
      imageURL = "";
      toast.success("Certificate Added Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeCertificate = async (Certificate) => {
    const docRef = doc(db, "portfolio", user.uid);
    try {
      await removeFile(Certificate.thumb);
      await updateDoc(docRef, {
        Certificates: arrayRemove(Certificate),
      });
      toast.success("Certificate Removed Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateResume = async (resume) => {
    try {
      if (portfolio.resume) {
        await removeFile(portfolio.resume);
      }
      await uploadFile(resume);

      await updateDoc(doc(db, "portfolio", user.uid), {
        resume: imageURL,
      });
      imageURL = "";
    } catch (error) {
      toast.error(error.message);
    }
    return true;
  };

  const portfolioContextValue = {
    portfolio,
    updateProfile,
    updateSocialLinks,
    addSkill,
    removeSkill,
    addCertificate,
    removeCertificate,
    addProject,
    removeProject,
    updateResume,
  };

  return (
    <PortfolioContext.Provider value={portfolioContextValue}>
      {children}
    </PortfolioContext.Provider>
  );
};
