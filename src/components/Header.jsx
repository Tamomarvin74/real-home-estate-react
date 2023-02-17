import { useEffect, useState } from "react";
import { useLocation,useNavigate} from "react-router"
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default function Header() {
  const [pageState, setPageState] = useState("SignIn");
    const location = useLocation();
    const navigate = useNavigate()
    const auth = getAuth();
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setPageState("Profile");
        } else {
          setPageState("Sign in");
        }
      });
    }, [auth]);

    function pathMatchRoute(route) {
        if (route === location.pathname) {
          return true;
        }
      }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50"> 
        <header className="flex justify-between items-center px-3   mx-auto">
            <div>
               <img src="https://realhomes.vn/wp-content/uploads/2019/11/cropped-Untitled.png" alt="logo" className="h-20 cursor-pointer" onClick={()=>navigate("/")} />
            </div>
            <div>
                <ul className="flex space-x-10">
                    <li className={` cursor-pointer py-3 font-semibold  text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black  border-b border-b-amber-600"}`} onClick={()=>navigate("/")}>Home</li>
                    <li className={`cursor-pointer py-3 font-semibold  text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/Offers") && "text-black  border-b border-b-amber-600"}`} onClick={()=>navigate("/Offers")}>Offers</li>
                    <li className={`cursor-pointer py-3 font-semibold  text-gray-400 border-b-[3px] border-b-transparent ${(pathMatchRoute("/SignIn") || pathMatchRoute("/Profile")) && "text-black  border-b border-b-amber-600"}`} onClick={()=>navigate("/Profile")}>  {pageState}</li>
                </ul>
            </div>
        </header>
    </div>
  )
}

